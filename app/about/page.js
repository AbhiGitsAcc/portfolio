"use client"
import { useEffect } from 'react'
import Navbar from '../component/navbar'
export default function work() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Navbar />
            <div className='relative top-[72px] left-0 w-full'>
            <h2 className="my-12 text-center text-3xl text-backgroud-primary capitalize font-bold"> About me </h2>
                <section className="flex items-center bg-stone-50 font-poppins dark:bg-gray-800 ">
                    <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
                        <div className="flex flex-wrap items-center ">
                            <div className="w-full px-4 m-auto lg:w-1/2 lg:mb-0">
                                <div className="lg:max-w-md">
                                    <h2 className="mt-4 mb-6 text-2xl font-bold dark:text-gray-300">Who Am I</h2>
                                    <p className="mb-10 text-gray-600 dark:text-gray-400 ">
                                    Hello there! I'm Abhishekh Ojha, a passionate and skilled web developer with a strong focus on creating dynamic and user-friendly web applications. With a diverse set of skills encompassing React, Laravel, and Node.js, I've spent years honing my craft and delivering top-notch solutions to clients and employers alike.</p>
                                </div>
                            </div>
                            <div className="w-full px-4 m-auto lg:w-1/2 lg:mb-0">
                                <div className="lg:max-w-md">
                                    <h2 className="mt-4 mb-6 text-2xl font-bold dark:text-gray-300">A Blend of Creativity and Technical Expertise</h2>
                                    <p className="mb-10 text-gray-600 dark:text-gray-400 ">As a web developer, I thrive on the balance between creativity and technical prowess. My journey into the world of web development began with my fascination for building interactive and visually appealing websites. Over time, I've transformed this passion into a full-fledged career, combining my creativity with solid programming knowledge to craft exceptional digital experiences.</p>
                                </div>
                            </div>
                            <div className="w-full px-4 m-auto lg:w-1/2 lg:mb-0">
                                <div className="lg:max-w-md">
                                    <h2 className="mt-4 mb-6 text-2xl font-bold dark:text-gray-300">Expertise in React, Laravel, and Node.js</h2>
                                    <p className="mb-10 text-gray-600 dark:text-gray-400 ">Having worked extensively with React, Laravel, and Node.js, I have the expertise to bring your ideas to life. React's component-based architecture allows me to create responsive and scalable front-end solutions that engage users and keep them coming back for more. On the back-end, I leverage the power of Laravel and Node.js to build robust and efficient server-side applications, ensuring seamless data management and overall system performance.</p>
                                </div>
                            </div>
                            <div className="w-full px-4 m-auto lg:w-1/2 lg:mb-0">
                                <div className="lg:max-w-md">
                                    <h2 className="mt-4 mb-6 text-2xl font-bold dark:text-gray-300">A Freelancer with a Proven Track Record</h2>
                                    <p className="mb-10 text-gray-600 dark:text-gray-400 ">For 6-7 months, I embraced the world of freelancing, collaborating with clients from various industries to turn their visions into reality. My dedication to delivering quality work within deadlines has earned me a reputation as a reliable and results-driven freelancer. Each project I undertake is an opportunity to add value and make a meaningful impact on businesses and their audiences.</p>
                                </div>
                            </div>
                            <div className="w-full px-4 m-auto lg:w-1/2 lg:mb-0">
                                <div className="lg:max-w-md">
                                    <h2 className="mt-4 mb-6 text-2xl font-bold dark:text-gray-300">1 Year of Professional Experience</h2>
                                    <p className="mb-10 text-gray-600 dark:text-gray-400 ">In addition to freelancing, I have 1 year of solid job experience in the web development industry. Working within a team environment, I've had the privilege of contributing to exciting projects and gaining valuable insights into the intricacies of the industry. This experience has allowed me to enhance my problem-solving abilities and refine my coding practices to ensure the highest standard of work.</p>
                                </div>
                            </div>
                            <div className="w-full px-4 m-auto lg:w-1/2 lg:mb-0">
                                <div className="lg:max-w-md">
                                    <h2 className="mt-4 mb-6 text-2xl font-bold dark:text-gray-300">Get in Touch</h2>
                                    <p className="mb-10 text-gray-600 dark:text-gray-400 ">If you're looking for a web developer who is not only technically skilled but also passionate about delivering exceptional results, I'd love to connect with you. Let's discuss your next project and embark on a journey of innovation and success.Thank you for visiting my website, and I'm excited about the opportunity to work with you!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}