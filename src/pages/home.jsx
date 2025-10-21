import React, { useEffect, useState } from "react";

export default function Home() {
    const [greeting, setGreeting] = useState("Welcome");

    useEffect(() => {
        const hour = new Date().getHours();
        if (hour < 12) setGreeting("Good morning");
        else if (hour < 18) setGreeting("Good afternoon");
        else setGreeting("Good evening");
    }, []);

    const features = [
        { id: 1, title: "Fast", desc: "Lightweight and optimized for performance." },
        { id: 2, title: "Accessible", desc: "Built with accessibility in mind." },
        { id: 3, title: "Composable", desc: "Flexible components that scale with your app." }
    ];

    const styles = {
        page: {
            fontFamily: '"Inter", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
            color: "#0f172a",
            padding: "2rem",
            maxWidth: 1100,
            margin: "0 auto"
        },
        header: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" },
        nav: { display: "flex", gap: "1rem", fontSize: "0.95rem" },
        hero: { display: "grid", gridTemplateColumns: "1fr 360px", gap: "2rem", alignItems: "center", marginBottom: "2rem" },
        heroCard: { padding: "1.5rem", borderRadius: 12, background: "linear-gradient(180deg,#fff,#f8fafc)", boxShadow: "0 6px 20px rgba(2,6,23,0.08)" },
        h1: { fontSize: "2rem", margin: 0, lineHeight: 1.1 },
        p: { marginTop: "0.6rem", color: "#475569" },
        button: { marginTop: "1.2rem", padding: "0.7rem 1.1rem", borderRadius: 8, background: "#0ea5a4", color: "white", border: "none", cursor: "pointer" },
        features: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "1rem" },
        featureCard: { padding: "1rem", borderRadius: 10, background: "#fff", border: "1px solid #e6eef6" },
        footer: { marginTop: "2.5rem", color: "#64748b", fontSize: "0.9rem", textAlign: "center" }
    };

    return (
        <main className="">
            <header style={styles.header}>
                <div style={{ fontWeight: 700 }}>Sonico</div>
                <nav style={styles.nav} aria-label="Main navigation">
                    <a href="#features">Features</a>
                    <a href="#docs">Docs</a>
                    <a href="#contact">Contact</a>
                </nav>
            </header>
            <Bento />


            <section id="features">
                <h2 style={{ marginBottom: "1rem" }}>Features</h2>
                <div style={styles.features}>
                    {features.map((f) => (
                        <article key={f.id} style={styles.featureCard} aria-labelledby={`feature-${f.id}`}>
                            <h3 id={`feature-${f.id}`} style={{ margin: 0 }}>{f.title}</h3>
                            <p style={{ marginTop: 6, color: "#475569", fontSize: "0.95rem" }}>{f.desc}</p>
                        </article>
                    ))}
                </div>
            </section>

            <footer style={styles.footer}>
                © {new Date().getFullYear()} Sonico — Built for modern frontends.
            </footer>
        </main>
    );
}

export function Bento() {
  return (
      <div className=" max-w-2xl px-6 lg:max-w-full lg:px-8">

        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Mobile friendly
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                </p>
              </div>
              <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                  <img
                    alt=""
                    src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-mobile-friendly.png"
                    className="size-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 lg:rounded-l-4xl" />
          </div>
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Performance</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit maiores impedit.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-performance.png"
                  className="w-full max-lg:max-w-xs"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-t-4xl" />
          </div>
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-white" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Security</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi.
                </p>
              </div>
              <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-security.png"
                  className="h-[min(152px,40cqw)] object-cover"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5" />
          </div>
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-4xl lg:rounded-r-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Powerful APIs
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget sem sodales gravida.
                </p>
              </div>
              <div className="relative min-h-120 w-full grow">
                <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl outline outline-white/10">
                  <div className="flex bg-gray-900 outline outline-white/5">
                    <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                      <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                        NotificationSetting.jsx
                      </div>
                      <div className="border-r border-gray-600/10 px-4 py-2">App.jsx</div>
                    </div>
                  </div>
                  <div className="px-6 pt-6 pb-14">{/* Your code example */}</div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
          </div>
        </div>
      </div>
  )
}