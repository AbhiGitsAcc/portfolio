import Link from 'next/link'
export default function Navbar() {
    return (
        <>
            <div className='fixed top-0 left-0 z-10 text-backgroud-primary bg-primary-text/50 w-full'>
                <ul className='flex justify-center items-center gap-[10px] md:gap-[15px] p-5'>
                    <li><Link href='/resume' className='text-lg hover:text-slate-400'>Resume</Link></li>
                    <li><Link href='/about' className='md:text-xl hover:text-slate-400'>About</Link></li>
                    <li><Link href='/' className='md:text-2xl hover:text-slate-400'>Home</Link></li>
                    <li><Link href='/contact' className='md:text-xl hover:text-slate-400'>Contact</Link></li>
                    <li><Link href='/works' className='md:text-lg hover:text-slate-400'>Works</Link></li>
                </ul>
            </div>
        </>
    )
}