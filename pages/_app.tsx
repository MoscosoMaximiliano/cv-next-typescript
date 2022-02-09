import '../styles/globals.css'
import { AppProps } from 'next/app'

import Sidebar from '../components/Sidebar'
import Navbar from "../components/Navbar"

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <div className='grid grid-cols-12 gap-6 px-5 lg:px-48 py-48 h-screen sm:px-20 md:px-32'>
      <div className='col-span-12 text-center lg:content-around bg-white lg:col-span-3 rounded-2xl'>
        <Sidebar />
      </div>
      <div className='col-span-12 bg-white lg:col-span-9 rounded-2xl flex flex-col'>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
