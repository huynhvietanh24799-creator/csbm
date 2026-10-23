import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sổ CSKH — Chăm sóc khách hàng" },
      { name: "description", content: "Sổ chăm sóc khách hàng: ba mẹ, kế hoạch, báo cáo và chat." },
      { property: "og:title", content: "Sổ CSKH — Chăm sóc khách hàng" },
      { property: "og:description", content: "Sổ chăm sóc khách hàng: ba mẹ, kế hoạch, báo cáo và chat." },
    ],
  }),
  component: Index,
});

function Index() {
  return <iframe src="/app.html" title="Sổ CSKH" className="fixed inset-0 h-full w-full border-0" />;
}
