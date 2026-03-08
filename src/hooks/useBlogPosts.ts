import { useState, useEffect, useCallback } from "react";
import { db, ADMIN_UID } from "@/lib/firebase";
import { ref, onValue, push, set, remove, update } from "firebase/database";

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

export function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const postsRef = ref(db, BLOG_REF);
    const unsub = onValue(postsRef, (snapshot) => {
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
    return () => unsub();
  }, []);

  const createPost = useCallback(async (post: Omit<BlogPost, "id" | "createdAt" | "updatedAt">) => {
    const postsRef = ref(db, BLOG_REF);
    const newRef = push(postsRef);
    const now = Date.now();
    await set(newRef, { ...post, createdAt: now, updatedAt: now });
    return newRef.key;
  }, []);

  const updatePost = useCallback(async (id: string, data: Partial<BlogPost>) => {
    const postRef = ref(db, `${BLOG_REF}/${id}`);
    await update(postRef, { ...data, updatedAt: Date.now() });
  }, []);

  const deletePost = useCallback(async (id: string) => {
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
    const postsRef = ref(db, BLOG_REF);
    const unsub = onValue(postsRef, (snapshot) => {
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
    return () => unsub();
  }, [slug]);

  return { post, loading };
}
