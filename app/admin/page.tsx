"use client";

import { useState, useEffect } from "react";
import { useAdminKey } from "./layout";

type Tab = "blog" | "contacts" | "otps";

type BlogPost = {
  id: string; slug: string; title: string; excerpt: string; category: string;
  coverImage: string | null; coverColor: string; readTime: string;
  published: boolean; publishedAt: string | null; body?: string;
};
type Contact = {
  id: string; name: string; email: string; phone: string | null;
  needs: string[]; message: string | null; status: string; createdAt: string;
};
type Otp = { id: string; phone: string; verified: boolean; attempts: number; createdAt: string; expiresAt: string };

const S: React.CSSProperties = { minHeight: "100vh", background: "#08090A", color: "#F4F3F1", fontFamily: "Geist,Arial,sans-serif" };
const CARD: React.CSSProperties = { background: "#0E0F12", border: "1px solid rgba(244,243,241,0.09)", borderRadius: 16, padding: 24 };
const MONO: React.CSSProperties = { fontFamily: "'Geist Mono',monospace", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase" as const };
const BTN: React.CSSProperties = { padding: "10px 20px", background: "#FF3D8F", color: "#08090A", border: "none", borderRadius: 100, fontSize: 13, fontWeight: 500, cursor: "pointer" };
const INPUT: React.CSSProperties = { padding: "10px 14px", background: "rgba(244,243,241,0.04)", border: "1px solid rgba(244,243,241,0.14)", borderRadius: 8, color: "#F4F3F1", fontSize: 14, outline: "none", width: "100%" };

export default function AdminPage() {
  const apiKey = useAdminKey();
  const [tab, setTab] = useState<Tab>("blog");

  const tabs: { key: Tab; label: string }[] = [
    { key: "blog", label: "Blog Posts" },
    { key: "contacts", label: "Contact Submissions" },
    { key: "otps", label: "OTP Logs" },
  ];

  return (
    <div style={S}>
      {/* Header */}
      <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 28px", borderBottom: "1px solid rgba(244,243,241,0.1)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <a href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none", color: "#F4F3F1" }}>
            <img src="/assets/images/logo/creator-touch.png" alt="" style={{ width: 28, height: 28 }} />
          </a>
          <span style={{ fontSize: 14, fontWeight: 600, letterSpacing: "-0.02em" }}>Admin Panel</span>
        </div>
        <button onClick={() => { sessionStorage.removeItem("admin_api_key"); location.reload(); }} style={{ ...MONO, color: "rgba(244,243,241,0.4)", background: "none", border: "none", cursor: "pointer" }}>
          Logout
        </button>
      </header>

      {/* Tabs */}
      <div style={{ display: "flex", gap: 4, padding: "16px 28px", borderBottom: "1px solid rgba(244,243,241,0.08)" }}>
        {tabs.map(t => (
          <button key={t.key} onClick={() => setTab(t.key)}
            style={{ ...MONO, padding: "8px 18px", borderRadius: 100, border: "1px solid", cursor: "pointer",
              background: tab === t.key ? "#F4F3F1" : "transparent",
              color: tab === t.key ? "#08090A" : "rgba(244,243,241,0.5)",
              borderColor: tab === t.key ? "#F4F3F1" : "rgba(244,243,241,0.14)",
            }}>
            {t.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={{ padding: "28px", maxWidth: 1200, margin: "0 auto" }}>
        {tab === "blog" && <BlogTab apiKey={apiKey} />}
        {tab === "contacts" && <ContactsTab apiKey={apiKey} />}
        {tab === "otps" && <OtpsTab apiKey={apiKey} />}
      </div>
    </div>
  );
}

/* ─── Blog Tab ─── */
function BlogTab({ apiKey }: { apiKey: string }) {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<BlogPost | null>(null);
  const [creating, setCreating] = useState(false);

  const load = () => {
    setLoading(true);
    fetch("/api/blog?limit=50", { headers: { "x-api-key": apiKey } })
      .then(r => r.json()).then(d => setPosts(d.posts || []))
      .finally(() => setLoading(false));
  };
  useEffect(load, [apiKey]);

  const deletePost = async (slug: string) => {
    if (!confirm(`Delete "${slug}"?`)) return;
    await fetch(`/api/blog/${slug}`, { method: "DELETE", headers: { "x-api-key": apiKey } });
    load();
  };

  if (creating || editing) {
    return <BlogEditor apiKey={apiKey} post={editing} onDone={() => { setEditing(null); setCreating(false); load(); }} />;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2 style={{ margin: 0, fontSize: 22, fontWeight: 500 }}>Blog Posts ({posts.length})</h2>
        <button onClick={() => setCreating(true)} style={BTN}>+ New Post</button>
      </div>
      {loading ? <p style={{ color: "rgba(244,243,241,0.4)" }}>Loading...</p> : (
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {posts.map(p => (
            <div key={p.id} style={{ ...CARD, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: p.published ? "#25D366" : "#c9a227", flexShrink: 0 }} />
                  <span style={{ fontSize: 15, fontWeight: 400, letterSpacing: "-0.02em", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{p.title}</span>
                </div>
                <div style={{ display: "flex", gap: 12, ...MONO, color: "rgba(244,243,241,0.35)" }}>
                  <span>{p.category}</span>
                  <span>{p.readTime}</span>
                  <span>{p.published ? "Published" : "Draft"}</span>
                </div>
              </div>
              <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
                <button onClick={() => { fetch(`/api/blog/${p.slug}`, { headers: { "x-api-key": apiKey } }).then(r => r.json()).then(d => setEditing(d.post)); }}
                  style={{ ...MONO, padding: "6px 14px", border: "1px solid rgba(244,243,241,0.14)", borderRadius: 100, background: "transparent", color: "rgba(244,243,241,0.6)", cursor: "pointer" }}>
                  Edit
                </button>
                <button onClick={() => deletePost(p.slug)}
                  style={{ ...MONO, padding: "6px 14px", border: "1px solid rgba(255,61,143,0.3)", borderRadius: 100, background: "transparent", color: "#FF3D8F", cursor: "pointer" }}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── Blog Editor ─── */
function BlogEditor({ apiKey, post, onDone }: { apiKey: string; post: BlogPost | null; onDone: () => void }) {
  const isEdit = !!post;
  const [form, setForm] = useState({
    slug: post?.slug || "",
    title: post?.title || "",
    excerpt: post?.excerpt || "",
    category: post?.category || "",
    body: post?.body || "",
    coverImage: post?.coverImage || "",
    coverColor: post?.coverColor || "#FF3D8F",
    readTime: post?.readTime || "4 min",
    published: post?.published ?? false,
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError("");
    const url = isEdit ? `/api/blog/${post!.slug}` : "/api/blog";
    const method = isEdit ? "PUT" : "POST";
    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json", "x-api-key": apiKey },
        body: JSON.stringify({ ...form, coverImage: form.coverImage || null }),
      });
      if (!res.ok) { const d = await res.json(); setError(d.error || "Failed"); setSaving(false); return; }
      onDone();
    } catch { setError("Network error"); setSaving(false); }
  };

  const field = (label: string, key: keyof typeof form, type = "text", rows = 0) => (
    <div style={{ display: "flex", flexDirection: "column" as const, gap: 6 }}>
      <label style={{ ...MONO, color: "rgba(244,243,241,0.4)" }}>{label}</label>
      {rows > 0 ? (
        <textarea value={form[key] as string} onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
          rows={rows} style={{ ...INPUT, resize: "vertical" as const, minHeight: rows * 24 }} />
      ) : (
        <input type={type} value={form[key] as string} onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
          style={INPUT} />
      )}
    </div>
  );

  return (
    <form onSubmit={save} style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 720 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2 style={{ margin: 0, fontSize: 22, fontWeight: 500 }}>{isEdit ? "Edit Post" : "New Post"}</h2>
        <button type="button" onClick={onDone} style={{ ...MONO, background: "none", border: "none", color: "rgba(244,243,241,0.4)", cursor: "pointer" }}>Cancel</button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        {field("Title", "title")}
        {field("Slug", "slug")}
      </div>
      {field("Excerpt", "excerpt", "text")}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
        {field("Category", "category")}
        {field("Read Time", "readTime")}
        {field("Cover Color", "coverColor", "color")}
      </div>
      {field("Cover Image Path", "coverImage")}
      {field("Body (paragraphs separated by blank lines)", "body", "text", 16)}

      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <label style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}>
          <input type="checkbox" checked={form.published} onChange={e => setForm(f => ({ ...f, published: e.target.checked }))} />
          <span style={{ fontSize: 14, color: "rgba(244,243,241,0.7)" }}>Published</span>
        </label>
      </div>

      {error && <p style={{ margin: 0, color: "#FF3D8F", fontSize: 13 }}>{error}</p>}

      <div style={{ display: "flex", gap: 12 }}>
        <button type="submit" disabled={saving} style={{ ...BTN, opacity: saving ? 0.5 : 1 }}>
          {saving ? "Saving..." : isEdit ? "Update Post" : "Create Post"}
        </button>
      </div>
    </form>
  );
}

/* ─── Contacts Tab ─── */
function ContactsTab({ apiKey }: { apiKey: string }) {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const load = () => {
    setLoading(true);
    fetch(`/api/contact?page=${page}&limit=20`, { headers: { "x-api-key": apiKey } })
      .then(r => r.json()).then(d => { setContacts(d.submissions || []); setTotal(d.total || 0); })
      .finally(() => setLoading(false));
  };
  useEffect(load, [apiKey, page]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <h2 style={{ margin: 0, fontSize: 22, fontWeight: 500 }}>Contact Submissions ({total})</h2>
      {loading ? <p style={{ color: "rgba(244,243,241,0.4)" }}>Loading...</p> : contacts.length === 0 ? (
        <p style={{ color: "rgba(244,243,241,0.4)" }}>No submissions yet.</p>
      ) : (
        <>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {contacts.map(c => (
              <div key={c.id} style={{ ...CARD, display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div>
                    <span style={{ fontSize: 16, fontWeight: 500 }}>{c.name}</span>
                    <div style={{ display: "flex", gap: 14, marginTop: 4, ...MONO, color: "rgba(244,243,241,0.35)" }}>
                      <span>{c.email}</span>
                      {c.phone && <span>{c.phone}</span>}
                      <span>{new Date(c.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <span style={{ ...MONO, padding: "4px 12px", borderRadius: 100, fontSize: 9,
                    background: c.status === "new" ? "rgba(255,61,143,0.12)" : "rgba(244,243,241,0.06)",
                    color: c.status === "new" ? "#FF3D8F" : "rgba(244,243,241,0.4)",
                    border: `1px solid ${c.status === "new" ? "rgba(255,61,143,0.25)" : "rgba(244,243,241,0.1)"}`,
                  }}>{c.status}</span>
                </div>
                {c.needs.length > 0 && (
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {c.needs.map(n => (
                      <span key={n} style={{ ...MONO, padding: "3px 10px", borderRadius: 100, border: "1px solid rgba(244,243,241,0.1)", color: "rgba(244,243,241,0.45)", fontSize: 9 }}>{n}</span>
                    ))}
                  </div>
                )}
                {c.message && <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: "rgba(244,243,241,0.55)" }}>{c.message}</p>}
              </div>
            ))}
          </div>
          {total > 20 && (
            <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
              <button disabled={page <= 1} onClick={() => setPage(p => p - 1)} style={{ ...MONO, padding: "6px 14px", border: "1px solid rgba(244,243,241,0.14)", borderRadius: 100, background: "transparent", color: "rgba(244,243,241,0.5)", cursor: "pointer" }}>Prev</button>
              <span style={{ ...MONO, padding: "6px 14px", color: "rgba(244,243,241,0.35)" }}>Page {page}</span>
              <button disabled={page * 20 >= total} onClick={() => setPage(p => p + 1)} style={{ ...MONO, padding: "6px 14px", border: "1px solid rgba(244,243,241,0.14)", borderRadius: 100, background: "transparent", color: "rgba(244,243,241,0.5)", cursor: "pointer" }}>Next</button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

/* ─── OTP Logs Tab ─── */
function OtpsTab({ apiKey }: { apiKey: string }) {
  const [otps, setOtps] = useState<Otp[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("/api/admin/otps", { headers: { "x-api-key": apiKey } })
      .then(r => r.json()).then(d => setOtps(d.otps || []))
      .finally(() => setLoading(false));
  }, [apiKey]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <h2 style={{ margin: 0, fontSize: 22, fontWeight: 500 }}>OTP Logs</h2>
      {loading ? <p style={{ color: "rgba(244,243,241,0.4)" }}>Loading...</p> : otps.length === 0 ? (
        <p style={{ color: "rgba(244,243,241,0.4)" }}>No OTP records yet.</p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {otps.map(o => (
            <div key={o.id} style={{ ...CARD, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <span style={{ fontSize: 15, fontWeight: 500, fontFamily: "'Geist Mono',monospace" }}>{o.phone}</span>
                <div style={{ display: "flex", gap: 14, marginTop: 4, ...MONO, color: "rgba(244,243,241,0.35)" }}>
                  <span>{new Date(o.createdAt).toLocaleString()}</span>
                  <span>Attempts: {o.attempts}</span>
                  <span>Expires: {new Date(o.expiresAt).toLocaleTimeString()}</span>
                </div>
              </div>
              <span style={{ ...MONO, padding: "4px 12px", borderRadius: 100, fontSize: 9,
                background: o.verified ? "rgba(37,211,102,0.12)" : "rgba(201,162,39,0.12)",
                color: o.verified ? "#25D366" : "#c9a227",
                border: `1px solid ${o.verified ? "rgba(37,211,102,0.25)" : "rgba(201,162,39,0.25)"}`,
              }}>{o.verified ? "Verified" : "Pending"}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
