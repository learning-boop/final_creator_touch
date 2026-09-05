import ServicesSection from "../_components/services/ServicesSection";

export const metadata = {
  title: "Services Preview — Creators Touch",
  robots: { index: false, follow: false },
};

export default function ServicesPreviewPage() {
  return (
    <main style={{ background: "#08090A", minHeight: "100vh", color: "#F4F3F1" }}>
      <ServicesSection />
    </main>
  );
}
