"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { navigation } from "@/lib/constants/navigation";
import { siteConfig } from "@/lib/constants/site";

export function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-black/[0.07] shadow-sm shadow-black/[0.05]"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[68px]">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <Image
                src="/images/logo.png"
                alt={siteConfig.name}
                width={28}
                height={27}
                className="w-7 h-auto"
              />
              <span className="text-[15px] font-semibold text-[#0a0a08] tracking-tight">
                {siteConfig.name}
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navigation.main.map((item) =>
                "children" in item ? (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      className={cn(
                        "flex items-center gap-1 px-3 py-2 rounded-lg text-[13px] font-medium transition-all duration-150",
                        isActive(item.href)
                          ? "text-[#0a0a08]"
                          : "text-black/40 hover:text-black/75"
                      )}
                    >
                      {item.label}
                      <ChevronDown className={cn("w-3 h-3 transition-transform duration-150", servicesOpen && "rotate-180")} />
                    </button>

                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 6, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.98 }}
                          transition={{ duration: 0.12 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[680px] rounded-2xl bg-white/98 backdrop-blur-2xl border border-black/[0.07] shadow-xl shadow-black/[0.08] p-4"
                        >
                          <div className="grid grid-cols-3 gap-0.5">
                            {item.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-[13px] text-black/40 hover:text-black/75 hover:bg-black/[0.04] transition-all duration-100"
                              >
                                <span className="w-1 h-1 rounded-full bg-[#3d5a2e]/60 flex-shrink-0" />
                                {child.label}
                              </Link>
                            ))}
                          </div>
                          <div className="mt-3 pt-3 border-t border-black/[0.06] flex items-center justify-between">
                            <p className="text-[11px] text-black/25">14 specialized services</p>
                            <Link
                              href="/services"
                              className="flex items-center gap-1 text-[11px] text-[#3d5a2e]/70 hover:text-[#3d5a2e] font-medium transition-colors"
                            >
                              View all <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "px-3 py-2 rounded-lg text-[13px] font-medium transition-all duration-150",
                      isActive(item.href)
                        ? "text-[#0a0a08]"
                        : "text-black/40 hover:text-black/75"
                    )}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            {/* CTAs */}
            <div className="hidden lg:flex items-center gap-2">
              <Link
                href="/request-quote"
                className="px-4 py-1.5 text-[13px] font-medium text-black/45 hover:text-black/75 transition-colors"
              >
                Get Quote
              </Link>
              <Link
                href="/book-consultation"
                className="px-4 py-1.5 text-[13px] font-semibold text-white bg-[#0a0a08] rounded-full hover:bg-[#0a0a08]/85 transition-all duration-200"
              >
                Book a Call
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-black/40 hover:text-black/70 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="absolute right-0 top-0 bottom-0 w-[280px] bg-white border-l border-black/[0.07] overflow-y-auto"
            >
              <div className="p-5 pt-20 space-y-1">
                {navigation.main.map((item) =>
                  "children" in item ? (
                    <div key={item.label}>
                      <p className="px-3 py-1.5 text-[11px] font-semibold text-black/25 uppercase tracking-widest">
                        {item.label}
                      </p>
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-3 py-2 text-[13px] text-black/40 hover:text-black/75 hover:bg-black/[0.04] rounded-lg transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={cn(
                        "block px-3 py-2.5 text-[13px] font-medium rounded-lg transition-colors",
                        isActive(item.href) ? "text-[#0a0a08]" : "text-black/40 hover:text-black/75"
                      )}
                    >
                      {item.label}
                    </Link>
                  )
                )}

                <div className="pt-4 space-y-2">
                  <Link
                    href="/request-quote"
                    className="block w-full px-4 py-2.5 text-[13px] font-medium text-center text-black/50 border border-black/[0.10] rounded-full hover:border-black/[0.18] transition-colors"
                  >
                    Get Quote
                  </Link>
                  <Link
                    href="/book-consultation"
                    className="block w-full px-4 py-2.5 text-[13px] font-semibold text-center text-white bg-[#0a0a08] rounded-full"
                  >
                    Book a Call
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
