import { useState, useEffect, useCallback } from "react";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  keywords: string;
  content: string;
  published: boolean;
  createdAt: number;
  updatedAt: number;
}

const BLOG_REF = "blogPosts";

async function getFirebase() {
  const [{ ref, onValue, push, set, remove, update }, { db, ADMIN_UID }] = await Promise.all([
    import("firebase/database"),
    import("@/lib/firebase"),
  ]);
  return { ref, onValue, push, set, remove, update, db, ADMIN_UID };
}

export function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let unsub: (() => void) | undefined;

    (async () => {
      try {
        const { ref, onValue, db } = await getFirebase();
        const postsRef = ref(db, BLOG_REF);
        unsub = onValue(postsRef, (snapshot) => {
          const data = snapshot.val();
          if (data) {
            const arr = Object.entries(data).map(([id, val]: [string, any]) => ({
              id,
              ...val,
            })) as BlogPost[];
            arr.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
            setPosts(arr);
          } else {
            setPosts([]);
          }
          setLoading(false);
        });
      } catch {
        setLoading(false);
      }
    })();

    return () => unsub?.();
  }, []);

  const createPost = useCallback(async (post: Omit<BlogPost, "id" | "createdAt" | "updatedAt">) => {
    const { ref, push, set, db } = await getFirebase();
    const postsRef = ref(db, BLOG_REF);
    const newRef = push(postsRef);
    const now = Date.now();
    await set(newRef, { ...post, createdAt: now, updatedAt: now });
    return newRef.key;
  }, []);

  const updatePost = useCallback(async (id: string, data: Partial<BlogPost>) => {
    const { ref, update, db } = await getFirebase();
    const postRef = ref(db, `${BLOG_REF}/${id}`);
    await update(postRef, { ...data, updatedAt: Date.now() });
  }, []);

  const deletePost = useCallback(async (id: string) => {
    const { ref, remove, db } = await getFirebase();
    const postRef = ref(db, `${BLOG_REF}/${id}`);
    await remove(postRef);
  }, []);

  const publishedPosts = posts.filter((p) => p.published);

  return { posts, publishedPosts, loading, createPost, updatePost, deletePost };
}

export function useBlogPost(slug: string) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let unsub: (() => void) | undefined;

    (async () => {
      try {
        const { ref, onValue, db } = await getFirebase();
        const postsRef = ref(db, BLOG_REF);
        unsub = onValue(postsRef, (snapshot) => {
          const data = snapshot.val();
          if (data) {
            const found = Object.entries(data).find(
              ([, val]: [string, any]) => val.slug === slug && val.published
            );
            if (found) {
              setPost({ id: found[0], ...(found[1] as any) });
            } else {
              setPost(null);
            }
          } else {
            setPost(null);
          }
          setLoading(false);
        });
      } catch {
        setLoading(false);
      }
    })();

    return () => unsub?.();
  }, [slug]);

  return { post, loading };
}
