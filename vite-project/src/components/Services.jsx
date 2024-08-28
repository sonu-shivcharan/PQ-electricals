import React from 'react'

function Services() {
  return (
    <section id="services">
        <h2>Services</h2>
        <div className='mx-auto'>
            <div className='flex  flex-wrap items-center justify-center gap-8' data-aos="fade-up">
              <div className='img-container' style={{
                backgroundImage:"url(./residential.avif)"
              }} data-aos="fade-up">

              </div>
              <div className='content p-7'  data-aos="fade-up">
                <h3 className='text-2xl font-bold text-orange-400'>Residential</h3>
                <div>
                  <p>We offer a wide range of residential electrical services, including:</p>
                  <ul>
                    <li>New construction wiring</li>
                    <li>Electrical panel upgrades</li>
                    <li>Lighting installavdgtion</li>
                    <li>Outlet and switch installation</li>
                    <li>Troubleshooting and repair</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='bg-orange-100/20 flex flex-wrap items-center justify-center my-7 gap-8'>
              <div className='content p-7' data-aos="fade-up">
                <h3 className='text-2xl font-bold text-orange-400'>Commercial</h3>
                <div>
                  <p>We offer a wide range of residential electrical services, including:</p>
                  <ul>
                    <li>New construction wiring</li>
                    <li>Electrical panel upgrades</li>
                    <li>Lighting installation</li>
                    <li>Outlet and switch installation</li>
                    <li>Troubleshooting and repair</li>
                  </ul>

                </div>
                
              </div>
              <div className='img-container' style={{
                backgroundImage:"url(./commercial.avif)"
              }}  data-aos="fade-up">

              </div>
            </div>
            <div className='flex  flex-wrap items-center justify-center gap-8'>
              <div className='img-container' style={{
                backgroundImage:"url(./residential.avif)"
              }} data-aos="fade-up">

              </div>
              <div className='content p-7'>
                <h3 className='text-2xl font-bold text-orange-400'>Residential</h3>
                <div  data-aos="fade-up">
                  <p>We offer a wide range of residential electrical services, including:</p>
                  <ul>
                    <li>New construction wiring</li>
                    <li>Electrical panel upgrades</li>
                    <li>Lighting installation</li>
                    <li>Outlet and switch installation</li>
                    <li>Troubleshooting and repair</li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
</section>
  )
}

export default Services