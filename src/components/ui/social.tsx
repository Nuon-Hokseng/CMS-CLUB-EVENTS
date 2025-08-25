// SocialLinks.tsx
import { Mail, Facebook, Instagram, Linkedin } from "lucide-react";

type Props = {
  size?: number;            
  gap?: string;              
  className?: string;          
  links?: {
    email?: string;            
    facebook?: string;         
    instagram?: string;        
    linkedin?: string;        
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
