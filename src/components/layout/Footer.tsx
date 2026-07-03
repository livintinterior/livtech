import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/constants/site";

const services = [
  { label: "Website Development",     href: "/services/website-development" },
  { label: "Mobile App Development",  href: "/services/mobile-app-development" },
  { label: "UI/UX Design",            href: "/services/ui-ux-design" },
  { label: "Digital Marketing",       href: "/services/digital-marketing" },
  { label: "Cloud Solutions",         href: "/services/cloud-solutions" },
  { label: "AI Solutions",            href: "/services/ai-solutions" },
];

const company = [
  { label: "About Us",     href: "/about" },
  { label: "Portfolio",    href: "/portfolio" },
  { label: "Blog",         href: "/blog" },
  { label: "Careers",      href: "/careers" },
  { label: "Technologies", href: "/technologies" },
  { label: "Pricing",      href: "/pricing" },
];

const legal = [
  { label: "Contact Us",      href: "/contact" },
  { label: "FAQ",             href: "/faq" },
  { label: "Privacy Policy",  href: "/privacy-policy" },
  { label: "Terms of Service",href: "/terms" },
  { label: "Refund Policy",   href: "/refund-policy" },
];

function SvgLinkedin() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
    </svg>
  );
}
function SvgInstagram() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
      <rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}
function SvgTwitterX() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}
function SvgFacebook() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

const socials = [
  { Icon: SvgLinkedin,  href: siteConfig.social.linkedin,  label: "LinkedIn"  },
  { Icon: SvgInstagram, href: siteConfig.social.instagram, label: "Instagram" },
  { Icon: SvgTwitterX,  href: siteConfig.social.twitter,   label: "Twitter"   },
  { Icon: SvgFacebook,  href: siteConfig.social.facebook,  label: "Facebook"  },
];

export function Footer() {
  return (
    <footer className="bg-white border-t border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main grid */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-10">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4">
              <Image src="/images/logo.png" alt={siteConfig.name} width={24} height={23} className="w-6 h-auto" />
              <span className="text-[15px] font-semibold text-[#0a0a08]">{siteConfig.name}</span>
            </Link>
            <p className="text-[12.5px] text-black/35 leading-relaxed mb-5">
              Building modern digital products for businesses across India and globally.
            </p>
            <div className="space-y-2 mb-5 text-[12.5px] text-black/35">
              <a href={`mailto:${siteConfig.email.hello}`} className="block hover:text-black/60 transition-colors">
                {siteConfig.email.hello}
              </a>
              <a href={`tel:${siteConfig.phone}`} className="block hover:text-black/60 transition-colors">
                {siteConfig.phone}
              </a>
            </div>
            <div className="flex items-center gap-2">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-7 h-7 rounded-lg bg-black/[0.03] border border-black/[0.07] flex items-center justify-center text-black/30 hover:text-black/65 hover:border-black/[0.14] transition-all duration-200"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[10.5px] font-semibold text-black/35 uppercase tracking-widest mb-4">Services</h3>
            <ul className="space-y-2.5">
              {services.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-[12.5px] text-black/35 hover:text-black/65 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[10.5px] font-semibold text-black/35 uppercase tracking-widest mb-4">Company</h3>
            <ul className="space-y-2.5">
              {company.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-[12.5px] text-black/35 hover:text-black/65 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h3 className="text-[10.5px] font-semibold text-black/35 uppercase tracking-widest mb-4">Support</h3>
            <ul className="space-y-2.5">
              {legal.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-[12.5px] text-black/35 hover:text-black/65 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 border-t border-black/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11.5px] text-black/25">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-[11.5px] text-black/20">
            Hyderabad, India
          </p>
        </div>

      </div>
    </footer>
  );
}
