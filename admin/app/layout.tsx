import './globals.css'
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'MARS commerce Admin',
  description: 'Admin Dashboard for MARS commerce application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
