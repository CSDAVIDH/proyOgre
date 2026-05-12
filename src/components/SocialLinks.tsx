import SocialIcon from "@/components/SocialIcon";
import { socialLinks } from "@/data/socialLinks";

export default function SocialLinks() {
  return (
    <div className="mt-10">
<div className="mt-4 flex flex-wrap items-center justify-center gap-3">
        {socialLinks.map((social) => (
          <a
            key={social.key}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.label}
            className={`inline-flex h-12 w-12 items-center justify-center rounded-full border bg-[#111111] transition-all hover:scale-105 hover:text-black ${social.variantClass}`}
          >
            <SocialIcon iconKey={social.key} />
          </a>
        ))}
      </div>
    </div>
  );
}
