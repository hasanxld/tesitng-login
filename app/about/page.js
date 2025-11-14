import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { createClient } from '@/lib/supabase'

export default async function About() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <div className="min-h-screen flex flex-col">
      <Header user={user} />
      
      <main className="flex-grow py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">About Us</h1>
          <div className="prose prose-lg">
            <p className="text-gray-600 mb-6">
              We are building the future of authentication systems with modern technologies 
              and best practices in security and user experience.
            </p>
            <p className="text-gray-600 mb-6">
              Our platform leverages Next.js 14, Supabase, and Tailwind CSS to deliver 
              a seamless authentication experience across all devices.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
