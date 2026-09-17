"use client";

import { useState, useEffect } from "react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [apiKey, setApiKey] = useState("");
  const [authed, setAuthed] = useState(false);
  const [input, setInput] = useState("");

  useEffect(() => {
    const stored = sessionStorage.getItem("admin_api_key");
    if (stored) { setApiKey(stored); setAuthed(true); }
  }, []);

  const login = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    sessionStorage.setItem("admin_api_key", input.trim());
    setApiKey(input.trim());
    setAuthed(true);
  };

  if (!authed) {
    return (
      <div style={{ minHeight: "100vh", background: "#08090A", color: "#F4F3F1", fontFamily: "Geist,Arial,sans-serif", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <form onSubmit={login} style={{ display: "flex", flexDirection: "column", gap: 16, width: 360, padding: 40, background: "#0E0F12", borderRadius: 20, border: "1px solid rgba(244,243,241,0.1)" }}>
          <h1 style={{ margin: 0, fontSize: 24, fontWeight: 500, letterSpacing: "-0.03em" }}>Admin Login</h1>
          <p style={{ margin: 0, fontSize: 14, color: "rgba(244,243,241,0.5)" }}>Enter your API key to continue.</p>
          <input
            type="password"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="API Key"
            style={{ padding: "12px 16px", background: "rgba(244,243,241,0.04)", border: "1px solid rgba(244,243,241,0.14)", borderRadius: 10, color: "#F4F3F1", fontSize: 15, outline: "none" }}
          />
          <button type="submit" style={{ padding: "14px 24px", background: "#FF3D8F", color: "#08090A", border: "none", borderRadius: 100, fontSize: 14, fontWeight: 500, cursor: "pointer" }}>
            Sign in
          </button>
        </form>
      </div>
    );
  }

  return (
    <AdminContext.Provider value={apiKey}>
      {children}
    </AdminContext.Provider>
  );
}

import { createContext, useContext } from "react";
const AdminContext = createContext("");
export function useAdminKey() { return useContext(AdminContext); }
