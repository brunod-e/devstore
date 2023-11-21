import Link from "next/link"
import { Search } from "lucide-react"
import Image from "next/image"
import { CartWidget } from "./cart-widget"

export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          devstore_
        </Link>

        <form className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700">
          <Search className="w-5 h-6 text-zinc-500" size={24} />
          <input
            type="text"
            placeholder="Buscar produtos..."
            className="flex-1 bg-transparent outline-none text-sm outine-none placeholder:text-zinc-500"
          />
        </form>
      </div>
      <div className="flex items-center gap-4">
        <CartWidget />

        <div className="w-px h-4 bg-zinc-700" />

        <Link href="/" className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Account</span>
          <Image
            src="https://github.com/brunod-e.png"
            className="h-6 w-6 rounded-full"
            width={24}
            height={24}
            alt="Imagem do usuário"
          />
        </Link>
      </div>
    </div>
  )
}