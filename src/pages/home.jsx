import React, { useEffect, useState } from "react";
import logo from "../logo.svg";
import { CHvertical,CHCircle } from "../designcomps/charts";
import { Battery100Icon, WifiIcon, ChartBarIcon,Bars3Icon,PlusIcon,MagnifyingGlassIcon,XMarkIcon } from '@heroicons/react/20/solid';
import { Dialog, DialogPanel } from '@headlessui/react'


export default function Home() {
    const [greeting, setGreeting] = useState("Welcome");
    const marray = [1, 2, 3, 4, 5,6,7,8,9];
    const [time, setTime] = useState("");
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
            <Start />
            <Bento />

            <footer style={styles.footer}>
                © {new Date().getFullYear()} Sonico — Built for modern frontends.
            </footer>
        </main>
    );
}

export function Bento() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12;
      const formattedTime = `${hours}:${minutes.toString().padStart(2, "0")} ${ampm}`;
      setTime(formattedTime);
    };

    updateTime(); // set immediately
    const interval = setInterval(updateTime, 60000); // update every minute

    return () => clearInterval(interval);
  }, []);

  const myArray = [
  0.1, 1.12, 0.14, 3.17, 0.20, 0.25, 0.31, 0.39, 1.49, 3.63,
  4.81, 3.05, 2.36, 1.76, 2.27, 2.93, 5.79, 4.22, 6.38, 8.29,
  10.78, 14.04, 13.29
];
const values = Array.from({ length: 23 }, (_, i) => {
  const base = Math.pow(1.22, i) * 0.1; // exponential base
  const noise = 1 + (Math.random() - 0.5) * 0.2; // ±10% randomness
  return +(base * noise).toFixed(2);
});
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
                  Our application is now fully responsive and works seamlessly on all devices.
                </p>
              </div>
              <div className="@container relative min-h-96 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 top-10 bottom-0 rounded-t-[30px] border-x-[10px] border-t-[10px] border-gray-700 bg-gray-900 shadow-2xl">
                  <img src={logo} className="absolute rounded-full w-1/2 left-1/2 top-2/3 -translate-x-1/2 -translate-y-1/2 hover:scale-95"/>
                  <div className="w-[20px] h-[60px] bg-gray-700 absolute z-[1] -right-[20px] top-[100px] rounded-r-[5px]"></div>
                  <div className="w-[20px] h-[60px] bg-gray-700 absolute z-[1] -right-[20px] top-[170px] rounded-r-[5px]"></div>
                  <div className="w-[20px] h-[130px] bg-gray-700 absolute z-[1] -left-[20px] top-[100px] rounded-l-[5px]"></div>
                  <div className="flex absolute flex-row-reverse gap-2 top-0 w-full  h-8">
                    <Battery100Icon className="w-6 top-0 text-gray-500 mr-[20px] z-[1]" />
                    <WifiIcon className="w-4 top-0 text-gray-500 z-[1]" />
                    <ChartBarIcon className="w-4 top-0 text-gray-500 z-[1]" />
                    <div className="flex flex-1 items-center justify-start z-[1]">
                      <span className="text-gray-500 text-sm ml-[20px]">{time}</span>
                    </div>
                    <div className="absolute top-0 w-full h-[140px] rounded-t-[20px] bg-gray-950 z-0">
                        <Bars3Icon className="w-6 top-10 left-2 absolute text-gray-300 z-[1]"/>
                        <PlusIcon className="w-6 top-10 right-2 absolute text-gray-300 z-[1]"/>
                       
                        <div className="w-full h-[30px]  absolute top-20 flex justify-center items-center px-2"> 
                          <div className="w-full bg-gray-100/20 h-full  rounded-[5px] flex items-center px-[3px] py-[3px]">
                            <div className="w-[24px] h-full flex items-center justify-center rounded-[3px] bg-gray-900">
                               <MagnifyingGlassIcon className="w-4 relative text-gray-300"/>
                            </div>
                            <div className="left-0 text-[15px] ml-2 text-gray-400  leading-[20px]"> search item</div>
                           
                          </div>
                        </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 lg:rounded-l-4xl" />
          </div>
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Delivery</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  We deliver products without delays, ensuring timely arrival to your doorstep.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                <CHvertical array={myArray}/>
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
                  Our top priority is keeping your data safe and secure at all times.
                </p>
              </div>
              <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                <CHCircle/>
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
                With our robust and flexible APIs, developers can easily integrate and extend functionalities to suit their needs.
                </p>
              </div>
              <div className="relative min-h-120 w-full grow">
                <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl outline outline-white/10">
                  <div className="flex bg-gray-900 outline outline-white/5">
                    <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                      <div className=" border-b  border-b-white/20 bg-white/5 px-4 py-2 text-white">
                        activity
                      </div>
                      <div className=" border-gray-600/10 px-4 py-2">sales</div>
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




const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export function Start() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
   

      <div className="relative isolate px-6 pt-0 lg:px-8">

        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-20">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{' '}
              <a href="#" className="font-semibold text-emerald-600">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
              Time to build something great
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-emerald-300 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-emerald-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="#" className="text-sm/6 font-semibold text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
      </div>
    </div>
  )
}
