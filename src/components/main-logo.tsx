import Image from "next/image"

export default function TransparentHero() {
  return (
    <div>
         <Image
                src="/logo.png" // path from public/
                alt="My Logo"
                width={100}
                height={120}
              />
    </div>
  )
}

