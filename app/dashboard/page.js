'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../../lib/supabase'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Dashboard() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        router.push('/login')
      } else {
        setUser(user)
        setLoading(false)
      }
    }

    getUser()
  }, [router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <i className="ri-loader-4-line animate-spin text-2xl"></i>
          <span>Loading...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header user={user} />
      
      <main className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
            <p className="text-gray-600 text-lg">
              Welcome back, {user?.email}!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Profile Card */}
            <div className="bg-white p-6 border border-gray-100 shadow-sm">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-black flex items-center justify-center">
                  <i className="ri-user-3-line text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold">Profile Information</h3>
                  <p className="text-gray-600 text-sm">Your account details</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <p><span className="font-medium">Email:</span> {user?.email}</p>
                <p><span className="font-medium">Status:</span> Verified</p>
                <p><span className="font-medium">Last Login:</span> Just now</p>
              </div>
            </div>

            {/* Security Card */}
            <div className="bg-white p-6 border border-gray-100 shadow-sm">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-black flex items-center justify-center">
                  <i className="ri-shield-keyhole-line text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold">Security</h3>
                  <p className="text-gray-600 text-sm">Account security settings</p>
                </div>
              </div>
              <div className="space-y-3">
                <button className="w-full text-left p-3 border border-gray-200 hover:border-black transition-colors">
                  Change Password
                </button>
                <button className="w-full text-left p-3 border border-gray-200 hover:border-black transition-colors">
                  Two-Factor Authentication
                </button>
              </div>
            </div>

            {/* Activity Card */}
            <div className="bg-white p-6 border border-gray-100 shadow-sm">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-black flex items-center justify-center">
                  <i className="ri-bar-chart-line text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold">Recent Activity</h3>
                  <p className="text-gray-600 text-sm">Your latest actions</p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center p-2 bg-gray-50">
                  <span>Signed in</span>
                  <span className="text-gray-500">Just now</span>
                </div>
                <div className="flex justify-between items-center p-2">
                  <span>Profile updated</span>
                  <span className="text-gray-500">2 hours ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
    }
