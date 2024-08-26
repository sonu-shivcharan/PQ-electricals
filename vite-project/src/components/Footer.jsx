import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
function Footer() {
  return (
    <div id='footer' className='bg-gray-100 p-2 min-h-[200px] flex items-center'>
      <div className='container flex flex-wrap justify-around items-center h-full mx-auto'>
        <h2 className='text-center text-xl font-bold text-orange-400 py-4 max-w-[300px]'>Professional and Qualified Electricals</h2>
        <div className='links flex justify-center flex-wrap gap-6'>
          <div>
            <h3 className='font-bold text-gray-800'>Contact</h3>
            <div className='flex flex-col text-gray-500'>
             <a href='tel:+918010096692'><FontAwesomeIcon icon={faPhone}/>&nbsp;+91 80100 96692</a> 
             <a href='mailto:pshivcharan@gmail.com'><FontAwesomeIcon icon={faEnvelope}/>&nbsp;pshivcharan@gmail.com</a> 
             <a href=''><FontAwesomeIcon icon={faLocationDot} />&nbsp;Wakad, Pune , Maharashtra</a> 
            </div>
          </div>
          <div>
            <h3 className='font-bold text-gray-800'>Services</h3>
            <div className='flex flex-col text-gray-500'>
             <a href='tel:+918010096692'><FontAwesomeIcon icon={faPhone}/>&nbsp;+91 80100 96692</a> 
             <a href='mailto:pshivcharan@gmail.com'><FontAwesomeIcon icon={faEnvelope}/>&nbsp;pshivcharan@gmail.com</a> 
             <a href=''><FontAwesomeIcon icon={faLocationDot} />&nbsp;Wakad, Pune , Maharashtra</a> 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer