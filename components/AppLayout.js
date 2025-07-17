import Footer from './Footer'
import Navigation from './Navigation'
 
export default function AppLayout({ children }) {
  return (
    <main className="dark text-foreground bg-background">
      <Navigation />
      <div className="page">{children}</div>
      <Footer />
    </main>
  )
}