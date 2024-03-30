'use client'
import courseData from '../data/music_courses.json'
import Link from 'next/link'
import { BackgroundGradient } from './ui/background-gradient'

import reactElementToJSXString from "react-element-to-jsx-string";
import { toast, Toaster } from "sonner";
import { ButtonsCard } from "./ui/tailwindcss-buttons";
interface Course{
        id: number,
        title: string,
        slug: string,
        description: string,
        price: number,
        instructor: string,
        isFeatured: boolean,
        

}

const buttons = [
    {
        name: "Shimmer",
        description: "Shimmer button for your website",
        showDot: false,
        component: (
          <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            Visit Near Showrom 
          </button>
        ),

    }
]

function FeaturedCourses() {
   const featuredCourses= courseData.courses.filter((course:Course)=>course.isFeatured)

//    const copy = (button: any) => {
//     if (button.code) {
//       copyToClipboard(button.code);
//       return;
//     }
//     let buttonString = reactElementToJSXString(button.component);
 
//     if (buttonString) {
//       const textToCopy = buttonString;
//       copyToClipboard(textToCopy);
//     }
//   };
 
//   const copyToClipboard = (text: string) => {
//     navigator.clipboard
//       .writeText(text)
//       .then(() => {
//         console.log("Text copied to clipboard:", text);
//         toast.success("Copied to clipboard");
//       })
//       .catch((err) => {
//         console.error("Error copying text to clipboard:", err);
//         toast.error("Error copying to clipboard");
//       });
//   };
  return (
    <div>
      <div className='py-12 bg-gray-900'>
        <div>
            <div className='text-center'>
                <h2 className="text-base text-teal-600 font-semibold tracking-wide upercase">FEATURED MODELS</h2>
                <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text--white sm:txt-4xl'>Explore World With Us</p>
            </div>
        </div>
        <div className='mt-10 '>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
                {
                    featuredCourses.map((course:Course)=>(
                        <div key={course.id} className='flex justify-center'>
                                 <BackgroundGradient className='flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm'>
                                    <div  className='p-4 sm:p-6 flex flex-col items-center text-center flex-grow'>
                                        <p className='text-lg sm:txt-xl text-black mt-4 mb-2 dark:text-neutral-200'>{course.title}</p>
                                        <p className='text-sm text-neutral-600 dark:text-neutral-400 flex-grow'>{course.description}</p>
                                        <Link href={`/course/${course.slug}`} className='mt-4'>
                                        Price ${course.price}
                                        </Link>
                                    </div>
                                 </BackgroundGradient>
                        </div>
                    ))
                }
            </div>
        </div>
        <div className='mt-20 text-center'>
                <Link href={"https://g.co/kgs/WFZYNjQ"} className='px-4 py-2 '> 
                <div >
        {buttons.map((button, idx) => (
          <ButtonsCard key={idx} onClick={() => ""}>
            {button.component}
          </ButtonsCard>
        ))}
      </div>
                </Link>
        </div>
      </div>
    </div>
  )
}

export default FeaturedCourses
