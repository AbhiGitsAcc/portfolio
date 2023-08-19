import Navbar from '../component/navbar'
export default async function work() {
    // api/project/9
    let res = await fetch('http://portfolio-qz5zk3a6g-abhigitsacc.vercel.app/api/project');
    let data = await res.json();
    data = JSON.parse(data.data)
    return (
        <>
            <Navbar />
            <div className='relative top-[72px] left-0 w-full'>
                <div className="container my-10 mx-auto px-6">
                    <section className="mb-32 text-center lg:text-left">
                        <h2 className="mb-12 text-center text-3xl text-backgroud-primary capitalize font-bold"> Projects </h2>
                        <div className="md:grid-cols-2 grid gap-[20px]">
                            {data?
                                data.map((work)=>{
                                    return(<div className="mb-12 lg:mb-0 min-w-[50%]">
                                        <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]" >
                                            <a href={"https://"+work.title} target="_blank">
                                                <img src={work.images} className="w-full h-full" />
                                            </a>
                                        </div>
                                        <a href={"https://"+work.title} target="_blank">
                                            <h5 className="mb-4 text-lg text-backgroud-primary uppercase font-bold">{work.title}</h5>
                                        </a>
                                        <p className="text-neutral-500 dark:text-neutral-300"> {work.description} </p>
                                    </div>)
                                })
                            :""}
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}