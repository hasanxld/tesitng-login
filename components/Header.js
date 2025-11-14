'use client'
import { useState } from 'react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'

export default function Header({ user }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    window.location.href = '/'
  }

  return (
    <>
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="font-bold text-xl">AuthSystem</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-black transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-black transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-black transition-colors">
                Contact
              </Link>
              
              {user ? (
                <div className="flex items-center space-x-4">
                  <Link 
                    href="/dashboard" 
                    className="bg-black text-white px-6 py-2 hover:bg-gray-800 transition-colors"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="text-gray-700 hover:text-black transition-colors"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  <Link 
                    href="/login" 
                    className="text-gray-700 hover:text-black transition-colors"
                  >
                    Login
                  </Link>
                  <Link 
                    href="/signup" 
                    className="bg-black text-white px-6 py-2 hover:bg-gray-800 transition-colors"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsSidebarOpen(true)}
            >
              <i className="ri-menu-line text-xl"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
          
          {/* Sidebar */}
          <div className="absolute right-0 top-0 h-full w-64 bg-white shadow-lg">
            <div className="p-4 border-b border-gray-100">
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg">Menu</span>
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="p-2"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>
              </div>
            </div>
            
            <nav className="p-4 space-y-4">
              <Link 
                href="/" 
                className="block py-2 text-gray-700 hover:text-black transition-colors"
                onClick={() => setIsSidebarOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="block py-2 text-gray-700 hover:text-black transition-colors"
                onClick={() => setIsSidebarOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="block py-2 text-gray-700 hover:text-black transition-colors"
                onClick={() => setIsSidebarOpen(false)}
              >
                Contact
              </Link>
              
              {user ? (
                <>
                  <Link 
                    href="/dashboard" 
                    className="block py-2 text-gray-700 hover:text-black transition-colors"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      handleSignOut()
                      setIsSidebarOpen(false)
                    }}
                    className="block w-full text-left py-2 text-gray-700 hover:text-black transition-colors"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link 
                    href="/login" 
                    className="block py-2 text-gray-700 hover:text-black transition-colors"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Login
                  </Link>
                  <Link 
                    href="/signup" 
                    className="block py-2 text-gray-700 hover:text-black transition-colors"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </nav>
          </div>
        </div>
      )}
    </>
  )
    }
