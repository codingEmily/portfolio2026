// import fonts
import { Outfit as OutfitFont, Ovo as OvoFont } from "next/font/google"

// implement fonts
const Outfit = OutfitFont({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const Ovo = OvoFont({
  subsets: ["latin"],
  weight: ["400"],
})

export const metadata = {
  title: "Full Stack Portfolio - Emily Carr",
  description: "Fullstack portfolio for Emily C. 2026",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${Outfit.className} ${Ovo.className}`}>{children}</body>
    </html>
  )
}
