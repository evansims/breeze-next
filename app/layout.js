import { Inter } from '@next/font/google'
import '/styles/globals.css'

const inter = Inter()

export default function RootLayout({ children }) {
    return (
        <html lang="eng" className={inter.className}>
            <head>
                <title>Momentful</title>
            </head>
            <body>{children}</body>
        </html>
    )
}
