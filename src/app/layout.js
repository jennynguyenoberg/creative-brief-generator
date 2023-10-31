import { Syne } from 'next/font/google'
import './globals.css'

const syne = Syne({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideaspire | Fueling Your Creative Juice',
  description: 'Struggling for inspiration? Let Ideaspire guide you with creative briefs to fuel your imagination and ignite your innovative spark. Say goodbye to creative blocks and hello to limitless ideas!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={syne.className}>{children}</body>
    </html>
  )
}
