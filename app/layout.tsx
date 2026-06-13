import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Playwrightハンズオン",
  description: "Next.js アプリのルートレイアウトです",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className={inter.className}>
      <body>
        <ul>
          <li>
            <a href="/">ホーム</a>
          </li>
          <li>
            <a href="/form">入力フォーム</a>
          </li>
        </ul>
        {children}
      </body>
    </html>
  )
}
