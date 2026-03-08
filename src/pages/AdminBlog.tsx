import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { useBlogPosts, BlogPost } from "@/hooks/useBlogPosts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Pencil, Trash2, Plus, Eye, EyeOff, RefreshCw } from "lucide-react";
import { toast } from "sonner";
import { ADMIN_UID } from "@/lib/firebase";
import RichTextEditor from "@/components/RichTextEditor";
import { SITE_URL } from "@/lib/seoSchema";
import { ref, set } from "firebase/database";
import { db } from "@/lib/firebase";

function generateSitemap(publishedPosts: BlogPost[]) {
  const today = new Date().toISOString().split("T")[0];
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  // Add dynamic blog posts
  for (const post of publishedPosts) {
    const lastmod = new Date(post.updatedAt || post.createdAt).toISOString().split("T")[0];
    xml += `  <url><loc>${SITE_URL}/blog/${post.slug}</loc><lastmod>${lastmod}</lastmod><changefreq>weekly</changefreq><priority>0.7</priority></url>\n`;
  }
  xml += `</urlset>`;
  return xml;
}

async function saveSitemapToFirebase(publishedPosts: BlogPost[]) {
  const sitemapXml = generateSitemap(publishedPosts);
  const sitemapRef = ref(db, "sitemap/blogEntries");
  // Store blog entries for sitemap
  const entries = publishedPosts.map((p) => ({
    slug: p.slug,
    lastmod: new Date(p.updatedAt || p.createdAt).toISOString().split("T")[0],
  }));
  await set(sitemapRef, entries);
  return sitemapXml;
}

const EMPTY: Omit<BlogPost, "id" | "createdAt" | "updatedAt"> = {
  slug: "",
  title: "",
  description: "",
  keywords: "",
  content: "",
  published: false,
};

export default function AdminBlog() {
  const { posts, publishedPosts, loading, createPost, updatePost, deletePost } = useBlogPosts();
  const [editing, setEditing] = useState<BlogPost | null>(null);
  const [form, setForm] = useState(EMPTY);
  const [adminKey, setAdminKey] = useState(() => localStorage.getItem("tb_admin_key") || "");
  const [authed, setAuthed] = useState(false);

  const handleAuth = () => {
    if (adminKey === ADMIN_UID) {
      setAuthed(true);
      localStorage.setItem("tb_admin_key", adminKey);
      toast.success("Admin verified");
    } else {
      toast.error("Invalid admin key");
    }
  };

  const handleSave = async () => {
    if (!form.slug || !form.title) {
      toast.error("Slug & Title required");
      return;
    }
    try {
      if (editing) {
        await updatePost(editing.id, form);
        toast.success("Post updated");
      } else {
        await createPost(form);
        toast.success("Post created");
      }
      setForm(EMPTY);
      setEditing(null);
      // Auto-update sitemap in Firebase
      setTimeout(async () => {
        await saveSitemapToFirebase(publishedPosts);
        toast.info("Sitemap updated");
      }, 1000);
    } catch (err) {
      toast.error("Error saving post");
    }
  };

  const handleEdit = (post: BlogPost) => {
    setEditing(post);
    setForm({
      slug: post.slug,
      title: post.title,
      description: post.description,
      keywords: post.keywords,
      content: post.content,
      published: post.published,
    });
  };

  const handleDelete = async (id: string) => {
    if (confirm("Delete this post?")) {
      await deletePost(id);
      toast.success("Post deleted");
      await saveSitemapToFirebase(publishedPosts);
    }
  };

  const handleReindex = async () => {
    await saveSitemapToFirebase(publishedPosts);
    toast.success("Sitemap reindexed with " + publishedPosts.length + " posts");
  };

  if (!authed) {
    return (
      <Layout>
        <Helmet><title>Admin Login | TekkaBuzz</title><meta name="robots" content="noindex" /></Helmet>
        <section className="py-16 px-4 bg-background">
          <div className="max-w-md mx-auto">
            <h1 className="font-heading text-2xl font-bold text-foreground mb-6">Admin Access</h1>
            <Input type="password" placeholder="Admin Key" value={adminKey} onChange={(e) => setAdminKey(e.target.value)} className="mb-4" />
            <Button onClick={handleAuth} className="w-full">Verify</Button>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <Helmet><title>Blog Admin | TekkaBuzz</title><meta name="robots" content="noindex" /></Helmet>
      <section className="py-8 px-4 md:px-8 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="font-heading text-2xl font-bold text-foreground">Blog Admin</h1>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={handleReindex}>
                <RefreshCw className="w-4 h-4 mr-1" /> Reindex Sitemap
              </Button>
              <Button size="sm" onClick={() => { setEditing(null); setForm(EMPTY); }}>
                <Plus className="w-4 h-4 mr-1" /> New Post
              </Button>
            </div>
          </div>

          {/* Editor */}
          <div className="bg-card border border-border rounded-xl p-6 mb-8">
            <h2 className="font-bold text-foreground mb-4">{editing ? "Edit Post" : "New Post"}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <Input placeholder="slug (e.g., my-post)" value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "") })} />
              <Input placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
              <Input placeholder="Meta Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
              <Input placeholder="Keywords (comma-separated)" value={form.keywords} onChange={(e) => setForm({ ...form, keywords: e.target.value })} />
            </div>
            <Textarea placeholder="Content (HTML supported)" value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} className="min-h-[200px] mb-4" />
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 text-muted-foreground cursor-pointer">
                <input type="checkbox" checked={form.published} onChange={(e) => setForm({ ...form, published: e.target.checked })} className="rounded" />
                Published
              </label>
              <Button onClick={handleSave}>{editing ? "Update" : "Create"}</Button>
              {editing && <Button variant="outline" onClick={() => { setEditing(null); setForm(EMPTY); }}>Cancel</Button>}
            </div>
          </div>

          {/* Post List */}
          {loading ? (
            <p className="text-muted-foreground">Loading...</p>
          ) : (
            <div className="space-y-3">
              {posts.map((post) => (
                <div key={post.id} className="bg-card border border-border rounded-xl p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {post.published ? <Eye className="w-4 h-4 text-green-500" /> : <EyeOff className="w-4 h-4 text-muted-foreground" />}
                    <div>
                      <span className="font-medium text-foreground">{post.title}</span>
                      <span className="text-muted-foreground text-xs ml-2">/blog/{post.slug}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" onClick={() => handleEdit(post)}><Pencil className="w-4 h-4" /></Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(post.id)}><Trash2 className="w-4 h-4 text-destructive" /></Button>
                  </div>
                </div>
              ))}
              {posts.length === 0 && <p className="text-muted-foreground text-center py-8">No blog posts yet.</p>}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
