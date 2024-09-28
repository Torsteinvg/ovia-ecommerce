import { Metadata } from "next"
import "styles/globals.css"
import { Barlow } from "next/font/google";
import localFont from "next/font/local"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
}

const c = localFont({src: "../../public/font/cloveris-cloveris-400.ttf", variable:"--Cloveris"})
const barlow = Barlow({ subsets: ["latin"], weight: ["300","400", "500", "700"]});

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <body className={`${c.variable} ${barlow.className}`}>
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
