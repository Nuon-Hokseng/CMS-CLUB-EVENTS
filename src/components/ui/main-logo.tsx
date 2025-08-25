import Image from "next/image"

export default function logo() {
  return (
    <div>
         <Image
                src="/logo.png"
                alt="My Logo"
                width={100}
                height={120}
              />
    </div>
  )
}

