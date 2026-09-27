import { siWhatsapp, siGmail } from "simple-icons";

const PHONE = "M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.4 11.4 0 003.6.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1z";
import { NAV, CONTACT } from "@/lib/content";
import { Corners } from "../ui/Corners";
import { RollLetters } from "../ui/RollText";
import { SwapArrow } from "../ui/Arrow";
import { BigWord } from "./BigWord";

function Social({ href, label, path }: { href: string; label: string; path: string }) {
  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" aria-label={label} className="group relative grid h-8 w-8 place-items-center overflow-hidden bg-card backdrop-blur-[10px]">
      <span aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-accent transition-[height] duration-500 ease-out-expo group-hover:h-full" />
      <Corners />
      <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" className="relative" aria-hidden>
        <path d={path} />
      </svg>
    </a>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-card">
      <div className="mx-auto max-w-[1440px] px-4 lg:px-10">
        <div className="border-x border-line px-5 pt-20 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-tiny text-muted">Start a conversation</p>
              <a href={CONTACT.mailto} className="group relative mt-5 flex h-[61px] max-w-[340px] items-center justify-between bg-card pl-[18px] pr-[5px]">
                <Corners />
                <span className="text-[14.4px] text-muted transition-colors duration-300 group-hover:text-white">{CONTACT.email}</span>
                <span className="relative grid h-[50px] w-[50px] place-items-center overflow-hidden bg-card">
                  <span aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-accent transition-[height] duration-500 ease-out-expo group-hover:h-full" />
                  <Corners />
                  <SwapArrow className="relative" />
                </span>
              </a>
              <p className="mt-10 text-tiny text-muted">/Socials/</p>
              <div className="mt-5 flex gap-[5px]">
                <Social href={CONTACT.whatsapp} label="WhatsApp" path={siWhatsapp.path} />
                <Social href={CONTACT.mailto} label="Email" path={siGmail.path} />
                <Social href={CONTACT.tel} label="Call" path={PHONE} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <nav aria-label="Footer">
                <p className="text-tiny text-muted">/Navigation/</p>
                <ul className="mt-5 flex flex-col gap-[10px]">
                  {NAV.map((n) => (
                    <li key={n.href}>
                      <a href={n.href} className="group text-[14.4px] font-medium uppercase">
                        <RollLetters text={n.label} />
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <div>
                <p className="text-tiny text-muted">/Contact/</p>
                <ul className="mt-5 flex flex-col gap-[10px]">
                  <li>
                    <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="group text-[14.4px] font-medium uppercase">
                      <RollLetters text="WhatsApp" />
                    </a>
                  </li>
                  <li>
                    <a href={CONTACT.mailto} className="group text-[14.4px] font-medium uppercase">
                      <RollLetters text="Email" />
                    </a>
                  </li>
                  <li>
                    <a href={CONTACT.tel} className="group text-[14.4px] font-medium uppercase">
                      <RollLetters text={CONTACT.phone} />
                    </a>
                  </li>
                  <li>
                    <a href="#top" className="group text-[14.4px] font-medium uppercase">
                      <RollLetters text="Back to top" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <BigWord />
          <div className="flex flex-col gap-2 pb-6 pt-4 text-tiny text-muted sm:flex-row sm:justify-between">
            <span>© {year} Onething Studio. Rapid digital product studio.</span>
            <span>Designed and built by Onething</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
