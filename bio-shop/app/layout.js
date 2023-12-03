import Link from 'next/link'
import './globals.css'
export default function RootLayout() {
  return (
    <>
    <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div>
            <Link href="/" className="text-white font-bold text-xl">Home</Link>
          </div>
          <div>
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="text-white">Login</Link>
              </li>
              <li>
                <Link href="/about" className="text-white">Register</Link>
              </li>
              {/* Add more navigation links as needed */}
            </ul>
          </div>
        </div>
      </nav>
   </>
  )
}
