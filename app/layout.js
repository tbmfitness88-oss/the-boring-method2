
import './globals.css'

export const metadata = {
  title: 'The Boring Method',
  description: 'Hybrid Performance Coaching by Coach Chan',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
