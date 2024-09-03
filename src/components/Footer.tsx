import React from 'react' 
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4  flex justify-between items-center px-6 min-w-full"> 
          {/* social media icons */}
          <div className='flex flex-row gap-1 items-center'>
          <a>
          <svg className="h-5 w-5 text-white cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        </a>
        <p>+91 835946747963</p>
        </div>
            <div className="text-center">
            © 2024 Your Company. All rights reserved.
            </div>
              {/* social media icons */}
        <a>
          <svg className="h-5 w-5 text-white cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        </a>
        </footer>

    )
}

export default Footer