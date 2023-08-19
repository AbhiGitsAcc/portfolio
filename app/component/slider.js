'use client'
import Image from 'next/image'
import { useState } from 'react'
export default function Slide(){
    const [slide,setSlide] = useState(0);
    function sliderChange(e){
        if(e.target.getAttribute('type') == 'prev'){
            if(slide>0){
                setSlide(slide-1);
            }else{
                setSlide(2)
            }
        }else if(e.target.getAttribute('type') == 'next'){
            if(slide<2){
                setSlide(slide+1);
            }else{
                setSlide(0)
            }
        }
    }
    function data(params) {
        fetch('http://localhost:3000/api/project/9').then((res) =>{return res.json()}).then((data)=>{
          console.log(data)
        })
    }
    return(
        <>
            <div className="slider" onClick={data}>
                <div className="sliderImages flex justify-center">
                    <Image alt='' src="/1.jpeg" width={1179} className={slide!== 0?'hidden':'object-cover w-full max-w-lg'} height={561}/>
                    <Image alt='' src="/2.jpeg" width={1179} className={slide!== 1?'hidden':'object-cover w-full max-w-lg'} height={561}/>
                    <Image alt='' src="/3.jpeg" width={1179} className={slide!== 2?'hidden':'object-cover w-full max-w-lg'} height={561}/>
                </div>
            </div>
            <div className="sliderBtn flex justify-around p-8">
                <button className='px-5 py-2 cursor-pointer bg-primary-text' type="prev" onClick={sliderChange}>
                    <img src='/arrow-left.svg' type="prev" />
                </button>
                <button className='px-5 cursor-pointer py-2 bg-primary-text' type="next" onClick={sliderChange}>
                    <img src='/arrow-right.svg' type="next" />
                </button>
            </div>
        </>
    )
}