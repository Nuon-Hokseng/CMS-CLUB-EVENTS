// SocialLinks.tsx
import { Mail, Facebook, Instagram, Linkedin } from "lucide-react";

type Props = {
  size?: number;               // icon size in px (default 16)
  gap?: string;                // tailwind gap class (default gap-2)
  className?: string;          // extra classes for the wrapper
  links?: {
    email?: string;            // e.g., "mailto:you@example.com"
    facebook?: string;         // e.g., "https://facebook.com/yourpage"
    instagram?: string;        // e.g., "https://instagram.com/yourhandle"
    linkedin?: string;         // e.g., "https://linkedin.com/in/yourprofile"
  };
};

export default function SocialLinks({
  size = 16,
  gap = "gap-2",
  className = "",
  links = {},
}: Props) {
  const items = [
    { href: links.email,    Icon: Mail,      label: "Email" },
    { href: links.facebook, Icon: Facebook,  label: "Facebook" },
    { href: links.instagram,Icon: Instagram, label: "Instagram" },
    { href: links.linkedin, Icon: Linkedin,  label: "LinkedIn" },
  ].filter(i => !!i.href);

  if (!items.length) return null;

  return (
    <nav className={`flex items-center ${gap} ${className}`} aria-label="Social links">
      {items.map(({ href, Icon, label }) => (
        <a
          key={label}
          href={href}
          target={href?.startsWith("http") ? "_blank" : undefined}
          rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
          aria-label={label}
          className="p-1 rounded-xl hover:opacity-80 focus:outline-none focus:ring "
        >
          <Icon width={size} height={size} aria-hidden="true" />
        </a>
      ))}
    </nav>
  );
}
