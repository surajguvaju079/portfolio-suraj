"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { navigation, site } from "@/content/site";
import Container from "./ui/Container";
export default function Navigation() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); toggle.current?.focus(); }
    };
    const closeOnDesktop = () => { if (window.innerWidth >= 1024) setOpen(false); };
    window.addEventListener("keydown", closeOnEscape);
    window.addEventListener("resize", closeOnDesktop);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("resize", closeOnDesktop);
    };
  }, [open]);
  return <header className="site-header"><Container>
    <nav aria-label="Main navigation" className="nav-bar">
      <Link href="/" className="wordmark" aria-label={`${site.name}, home`}>suraj<span className="wordmark-dot">.</span><span className="wordmark-surname">guvaju</span></Link>
      <div className="desktop-nav">
        {navigation.map(item => <a href={item.href} key={item.href}>{item.label}</a>)}
        <a href="#contact" className="nav-contact">Let’s talk <ArrowUpRight size={15} aria-hidden="true" /></a>
      </div>
      <button ref={toggle} type="button" className="menu-toggle" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(!open)}>
        {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
      </button>
    </nav>
    <nav id="mobile-navigation" aria-label="Mobile navigation" className="mobile-nav" hidden={!open}>
      {navigation.map(item => <a href={item.href} key={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
      <a href="#contact" onClick={() => setOpen(false)}>Contact <ArrowUpRight size={17} aria-hidden="true" /></a>
    </nav>
  </Container></header>;
}
