import Image from 'next/image'

import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import {IoCodeDownload} from "react-icons/io5"

const Sidebar = () => {
  return (
    <>
        <img
          src='https://images.unsplash.com/photo-1640622300362-573446a17973?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80'
          alt='user pic'
          // layout='fill'
          // objectFit='cover'
          className='rounded-full w-32 h-32 mx-auto my-10'
        />
      <h3 className="my-10 text-3xl font-medium tracking-wider">
        <span>Maximiliano </span>
        Moscoso
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full mx-2">Web Developer</p>
      <a className="flex space-x-2 px-2 py-1 my-3 mx-2 bg-gray-200 rounded-full items-center justify-center" href="" download="name">
        <IoCodeDownload className="w-6 h-6 text-green-400"/>
        Download Resume
      </a>
      <div className='flex justify-around my-12 text-green-500 w-9/12 md:w-full'>
        <a href=""><AiFillYoutube className="w-8 h-8 cursor-pointer"/></a>
        <a href=""><AiFillLinkedin className="w-8 h-8 cursor-pointer"/></a>
        <a href=""><AiFillGithub className="w-8 h-8 cursor-pointer"/></a>
      </div>
      <button className="bg-gradient-to-r from-green-400 to-blue-400 w-8/12 rounded-full py-2 px-5 my-2 text-white focus:outline-none">Email me</button>
      <button className="bg-gradient-to-r from-green-400 to-blue-400 w-8/12 rounded-full py-2 px-5 my-2 text-white focus:outline-none">Toggle Theme</button>
    </>
  )
}

export default Sidebar
