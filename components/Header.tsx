"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Transition } from "@headlessui/react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("diensten");

  useEffect(() => {
    const sections = ["diensten", "expertise", "over", "contact"];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);

        if (
          element &&
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight
        ) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const menuItems = [
    { id: "diensten", label: "Diensten", href: "/#diensten" },
    { id: "tarieven", label: "Tarieven", href: "/tarieven" },
    { id: "blog", label: "Blog", href: "/blog" },
    { id: "expertise", label: "Expertise", href: "/#expertise" },
    { id: "over", label: "Over ons", href: "/#over" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-4 transition hover:opacity-90"
        >
          <Image
            src="/logo-jouw-it.png"
            alt="Jouw IT"
            width={220}
            height={90}
            priority
            className="h-16 w-auto"
          />

          <div>
            <p className="text-2xl font-extrabold tracking-tight text-slate-900">
              Jouw <span className="text-blue-600">IT</span>
            </p>

            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              Websitebeheer • Computerhulp • Laptop Service • Advies
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-2 md:flex">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                activeSection === item.id
                  ? "bg-blue-50 text-blue-600 shadow-sm"
                  : "text-slate-600 hover:bg-slate-100 hover:text-blue-600"
              }`}
            >
              {item.label}
            </a>
          ))}

          <a
            href="/#contact"
            className="ml-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:shadow-blue-600/40"
          >
            Direct contact
          </a>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 md:hidden"
          aria-label="Menu"
        >
          {menuOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <Transition
        show={menuOpen}
        enter="transition duration-300 ease-out"
        enterFrom="opacity-0 -translate-y-2"
        enterTo="opacity-100 translate-y-0"
        leave="transition duration-200 ease-in"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-2"
      >
        <div className="border-t border-slate-200 bg-white md:hidden">
          <nav className="flex flex-col gap-2 px-6 py-6">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={closeMenu}
                className={`rounded-xl px-4 py-3 font-medium transition-all duration-200 hover:translate-x-1 ${
                  activeSection === item.id
                    ? "bg-blue-50 text-blue-600"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                {item.label}
              </a>
            ))}

            <a
              href="/#contact"
              onClick={closeMenu}
              className="mt-2 rounded-xl bg-blue-600 px-5 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
            >
              Direct contact
            </a>
          </nav>
        </div>
      </Transition>
    </header>
  );
}