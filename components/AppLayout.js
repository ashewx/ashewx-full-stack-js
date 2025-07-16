import Footer from './Footer'
import Navigation from './Navigation'
 
export default function AppLayout({ children }) {
  return (
    <body className="bg-gradient-to-r from-gray-200 to-zinc-800">
      <Navigation />
      <main>{children}</main>
      <Footer />
    </ body>
  )
}