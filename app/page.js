import Header from '../components/Header'
import Footer from '../components/Footer'
import { createClient } from '../lib/supabase'

export default async function Home() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <div className="min-h-screen flex flex-col">
      <Header user={user} />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Modern Authentication
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600">
                  Made Simple
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Experience the future of user authentication with our secure, 
                scalable, and developer-friendly authentication system.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {user ? (
                  <a
                    href="/dashboard"
                    className="bg-black text-white px-8 py-4 hover:bg-gray-800 transition-colors inline-flex items-center justify-center"
                  >
                    Go to Dashboard
                    <i className="ri-arrow-right-line ml-2"></i>
                  </a>
                ) : (
                  <>
                    <a
                      href="/signup"
                      className="bg-black text-white px-8 py-4 hover:bg-gray-800 transition-colors inline-flex items-center justify-center"
                    >
                      Get Started Free
                      <i className="ri-arrow-right-line ml-2"></i>
                    </a>
                    <a
                      href="/login"
                      className="border border-gray-300 text-gray-700 px-8 py-4 hover:border-black hover:text-black transition-colors inline-flex items-center justify-center"
                    >
                      Sign In
                      <i className="ri-login-box-line ml-2"></i>
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose Our Auth System?
              </h2>
              <p className="text-gray-600 text-lg">
                Built with modern technologies for optimal performance and security
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-black flex items-center justify-center mx-auto mb-4">
                  <i className="ri-shield-check-line text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
                <p className="text-gray-600">
                  Enterprise-grade security with encryption and secure protocols to protect your data.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-black flex items-center justify-center mx-auto mb-4">
                  <i className="ri-smartphone-line text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">Mobile Friendly</h3>
                <p className="text-gray-600">
                  Perfectly optimized for all devices with responsive design and touch-friendly interfaces.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-black flex items-center justify-center mx-auto mb-4">
                  <i className="ri-flashlight-line text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
                <p className="text-gray-600">
                  Built with Next.js 14 for optimal performance and seamless user experience.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
                  }
