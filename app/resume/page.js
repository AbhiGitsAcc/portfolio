import Navbar from '../component/navbar'
const Resume = () => {
  return (
    <>
    <Navbar />
    <div className='relative top-[72px] left-0 w-full'>
        <div className="bg-gray-100">
        <header className="bg-gray-800 text-white text-center py-8">
            <h1 className="text-4xl font-semibold">Abhishekh Ojha</h1>
            <p className="text-lg">Full Stack Developer | Web Development Enthusiast</p>
        </header>

        <section className="bg-white shadow-md rounded-lg my-8 mx-4 p-6">
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <p>Email: abhishekhojha45@gmail.com</p>
            <p>Phone: 8719830141</p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/abhishekh-ojha-10802b215/" className="text-blue-500 hover:underline">linkedin.com/in/abhishekh-ojha-10802b215</a></p>
        </section>

        <section className="bg-white shadow-md rounded-lg my-8 mx-4 p-6">
            <h2 className="text-2xl font-semibold mb-4">Summary</h2>
            <p className="text-lg">Full Stack Developer with a focus on Node.js, Next.js, Laravel, and React. B.Sc. graduate in Computer Science from Vikram University. Passionate about web development and dedicated to continuous learning. Collaborative problem solver with strong attention to detail.</p>
        </section>

        <section className="bg-white shadow-md rounded-lg my-8 mx-4 p-6">
            <h2 className="text-2xl font-semibold mb-4">Education</h2>
            <p className="text-lg">Bachelor of Science in Computer Science</p>
            <p>Vikram University, Madhya Pradesh | Graduated in 2022</p>
        </section>

        <section className="bg-white shadow-md rounded-lg my-8 mx-4 p-6">
            <h2 className="text-2xl font-semibold mb-4">Skills</h2>
            <ul className="list-disc pl-6">
            <li>Frontend: React, Next.js</li>
            <li>Backend: Node.js, Express.js, Laravel</li>
            <li>Languages: JavaScript, PHP</li>
            <li>Database: MySQL</li>
            <li>Version Control: Git</li>
            <li>Problem Solving</li>
            <li>Attention to Detail</li>
            <li>Collaboration and Teamwork</li>
            </ul>
        </section>

        <section className="bg-white shadow-md rounded-lg my-8 mx-4 p-6">
            <h2 className="text-2xl font-semibold mb-4">Experience</h2>
            <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Full Stack Developer - IT Geeks | August 2022- July 2023</h3>
            <p>Developing and maintaining web applications using React and Laravel.</p>
            <p>Collaborating within a team to deliver innovative solutions.</p>
            <p>Implementing and optimizing database structures.</p>
            <p>Conducting code reviews for improved performance.</p>
            </div>
            <div>
            <h3 className="text-xl font-semibold mb-2">WordPress Freelancer - Freelance | July 2021 - April 2022</h3>
            <p>Provided WordPress solutions to clients, developing themes and plugins.</p>
            <p>Customized websites according to client requirements.</p>
            <p>Directly collaborated with clients to ensure quality results.</p>
            </div>
        </section>

        <section className="bg-white shadow-md rounded-lg my-8 mx-4 p-6">
            <h2 className="text-2xl font-semibold mb-4">Projects</h2>
            <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Broyal.in - Shoes E-Commerce Website</h3>
            <p>Created an e-commerce platform using WordPress, focusing on user experience.</p>
            <p>Managed product listings, cart functionality, and order processing.</p>
            </div>
            <div>
            <h3 className="text-xl font-semibold mb-2">Uttamfacility.in - Cleaning Services Website</h3>
            <p>Developed a dynamic website for a cleaning services company using WordPress.</p>
            <p>Implemented user-friendly booking forms and service request features.</p>
            </div>
        </section>

        <section className="bg-white shadow-md rounded-lg my-8 mx-4 p-6">
            <h2 className="text-2xl font-semibold mb-4">Languages</h2>
            <ul className="list-disc pl-6">
                <li>English (Intermediate)</li>
                <li>Hindi (Fluent)</li>
            </ul>
        </section>
        </div>
    </div>
    </>
  );
};

export default Resume;
