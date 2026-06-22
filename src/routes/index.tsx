import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maa Chandrika Mahila Mahavidyalaya — Mahoba" },
      {
        name: "description",
        content:
          "Maa Chandrika Mahila Mahavidyalaya — a private women's college in Mahoba (U.P.) offering B.A., B.Sc., M.A. and D.El.Ed. programs.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/site.html");
  }, []);
  return (
    <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", fontFamily: "system-ui" }}>
      Loading…
    </div>
  );
}
