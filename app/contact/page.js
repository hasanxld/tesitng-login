import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { createClient } from '@/lib/supabase'

export default async function Contact() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <div className="min-h-screen flex flex-col">
      <Header user={user} />
      
      <main className="flex-grow py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
              <p className="text-gray-600 mb-6">
                Have questions about our authentication system? We're here to help.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <i className="ri-mail-line text-xl"></i>
                  <span>support@authsystem.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-phone-line text-xl"></i>
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 border border-gray-100 shadow-sm">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea rows="4" className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black"></textarea>
                </div>
                <button type="submit" className="w-full bg-black text-white py-3 hover:bg-gray-800 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
