import React from 'react'
import { Dot, Facebook, Twitter, Instagram, Mail, MapPin } from 'lucide-react'

function Footer() {
  return (
    <div>
       <footer className="bg-pink-50 mt-20">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-pink-700">Contact Us</h3>
              <div className="flex items-center space-x-2 text-pink-600">
                <MapPin size={20} />
                <p>Jaipur, Rajasthan, India</p>
              </div>
              <div className="flex items-center space-x-2 text-pink-600">
                <Mail size={20} />
                <p>contact bagsounabh2003@gmail.com</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-pink-700">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-pink-600 hover:text-pink-800 transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-pink-600 hover:text-pink-800 transition-colors">
                  <Twitter size={24} />
                </a>
                <a href="#" className="text-pink-600 hover:text-pink-800 transition-colors">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-purple-200 mt-8 pt-8 text-center text-pink-600">
            <p>&copy; {new Date().getFullYear()} Speakssy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
