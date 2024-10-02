'use client'
// import hero from '../public/images/pexels-ollivves-1078983.jpg'
import { useState } from "react";
import { GetServerSideProps } from "next";

// components
import Header from "./components/Header";
import Input from "./components/Input";
import Output from "./components/Output";


export default function Home() {
  const [prompt, setPrompt] = useState<string>('');

  // console.log(process.env.NEXT_PUBLIC_TEST + ' here');
  const submitHandler = (formData: any) => {
    setPrompt(`
      Give me a name of a place that best matches the criteria of what is listed 
      in the variable "a" below with only the name of the place for a vacation 
      (worldwide) followed by a 200 word description below it. make it something 
      in ${formData.get('distance')} distance to ${formData.get('location')}.
      
      a = ${formData.get('type')}, ${formData.get('temperature')}, ${formData.getAll('activities')}
      distance
    `)
    console.log(prompt);
  }

  return (
    <div className=" bg-white w-full 
    bg-[url('../public/images/pexels-ollivves-1078983.jpg')] bg-cover bg-no-repeat bg-center bg-fixed">
      <Header />
      <main className="container w-full bg-backgroundFilm bg-opacity-60">
        <div className="flex flex-col items-center lg:mt-20">
          <div className="">
            <h1 className="text-3xl text-accent p-4 lg:mb-10">Time For Something New...</h1>
          </div>
          <div className="w-full flex flex-col justify-around lg:flex-row">
            <Input submitHandler={submitHandler} />
            <Output prompt={prompt} />
          </div>
        </div>
      </main>
    </div>
  );
}
