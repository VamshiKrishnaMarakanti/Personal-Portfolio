import React from 'react'
import { ThemeToggle } from './ThemeToggle'
import StarBackground from './StarBackground'
import NavBar from './NavBar'
import HeroSection from './HeroSection'

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    {/* Theme Toggle */}
      <ThemeToggle />

    {/* Background effect */}
    <StarBackground />

    {/* NavBar */}
    <NavBar />

    {/* Main Content */}
    <main>
    <HeroSection/>

    </main>

    {/* Footer */}
    </div>
  )
}

export default Home
