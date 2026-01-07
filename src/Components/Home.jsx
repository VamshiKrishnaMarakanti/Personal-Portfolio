import React from 'react'
import { ThemeToggle } from './ThemeToggle'
import StarBackground from './StarBackground'

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    {/* Theme Toggle */}
      <ThemeToggle />

    {/* Background effect */}
    <StarBackground />

    {/* NavBar */}

    {/* Main Content */}

    {/* Footer */}
    </div>
  )
}

export default Home
