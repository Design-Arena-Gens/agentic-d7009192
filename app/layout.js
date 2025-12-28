import './globals.css'

export const metadata = {
  title: 'Rushabh Sanghavi - SEO Manager | Rajkot, Gujarat',
  description: 'Professional SEO Manager specializing in search engine optimization, digital marketing, and organic growth strategies.',
  keywords: 'SEO Manager, Digital Marketing, Rajkot, Gujarat, Search Engine Optimization, SEO Expert',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
