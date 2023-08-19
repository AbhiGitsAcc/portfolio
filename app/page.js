import Image from 'next/image'
import Link from 'next/link'
import Navbar from './component/navbar'
import Slide from './component/slider'
export default function Home() {
  
  return (
    <main className="flex flex-col">
      <Navbar />
      <div id="header" className='header relative top-0 left-0 w-full'>
        <div className='h-full px-5 md:fixed top-[72px] md:flex-row flex-col-reverse relative left-0 flex w-full justify-around items-center'>
          <Image alt='' src="/header1.jpg" width={1920} className='absolute top-0 left-0 w-full h-full object-cover z-[-1]' height={1080} />
          <div className='absolute top-0 left-0 w-full h-full bg-[#000516e6] z-[0]'></div>
          <div className='z-[1] text-backgroud-primary md:max-w-[50%] grid gap-2 mb-[73px]'>
          <div className="wrapper nine">
              <div className='flex flex-wrap gap-[10px] items-baseline'>
                  <h3 className="rotate">
                      <span className='text-4xl text-red-500'>C</span>
                      <span className='text-4xl text-white'>O</span>
                      <span className='text-4xl text-red-500'>D</span>
                      <span className='text-4xl text-white'>I</span>
                      <span className='text-4xl text-red-500'>N</span>
                      <span className='text-4xl text-white'>G</span>
                  </h3>
                  <h1 className='text-backgroud-primary text-2xl'>The Future</h1>
              </div>
          </div>
            <h2 className='text-lg'>Join me on the Path of Web Development Excellence</h2>
            <p className='text-base text-slate-400'>Welcome to the world of web development! I'm Abhishekh, a skilled web developer proficient in React, Laravel, and Node.js. Let's create captivating digital experiences and bring your ideas to life!</p>
            <button className='px-4 py-2 bg-backgroud-primary text-primary-text my-2 flex gap-2 max-w-[165px] hover:gap-3 duration-250	transition-all'>
              Know More... <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </button>
          </div>
          <div className='z-[1]'>
            <Image src="/me.png" alt='' width={750} height={750} className='md:max-w-[400px] md:max-h-[400px] border-b-4 border-red-500'/>
          </div>
        </div>
      </div>
      <div className='relative bg-backgroud-primary py-6'>
        <div className='container mx-auto'>
          <h2 className='text-center text-primary-text p-5 text-3xl uppercase'>Projects</h2>
          <div className='grid md:grid-cols-2 justify-between items-center p-4' >
            <div>
              <h2 className='text-2xl text-primary-text'>Explore Our Web Development Projects: A Glimpse into Our Journey</h2>
              <p className='pt-2 text-slate-500'>Take an enthralling tour through our web development projects! Discover cutting-edge designs driven by React, Laravel,Wordpress, and Node.js. Discover the enchantment of flawless user interfaces and strong functionalities. Join us as we demonstrate our love of creating digital wonders. Welcome to our presentation of web development! </p>
              <Link href='/works' className='px-4 inline-block py-2 bg-primary-text text-backgroud-primary my-4 flex gap-2 max-w-[155px] hover:gap-3 duration-250	transition-all'>
                See More.. <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </Link>
            </div>
            <div className='flex justify-end flex-col'>
              <Slide />
              {/* <Image alt='' src="/1689849832230.png" width={1080} className='object-cover w-full max-w-lg' height={1080} /> */}
            </div>
          </div>
        </div>
      </div>
      <div className='z-[3] bg-primary-text gap-[15px] p-3 social flex justify-center'>
        <div className='text'>
          <h3 className='text-xl text-backgroud-primary'>Connect with me on :</h3>
        </div>
        <div className='icons flex gap-[15px]'>
          <img src='instagram.svg' />
          <img src='linkedin.svg' />
        </div>
      </div>
    </main>
  )
}
