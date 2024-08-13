'use client'
// import hero from '../public/images/pexels-ollivves-1078983.jpg'

// components
import Header from "./components/Header";
import Input from "./components/Input";
import Output from "./components/Output";

export default function Home() {
  return (
    <div className=" bg-white w-full 
    bg-[url('../public/images/pexels-ollivves-1078983.jpg')] bg-cover bg-no-repeat bg-center bg-fixed">
      <Header />
      <main className="container w-full">
        <div className="flex flex-col items-center mt-20">
          <div className="">
            <h1 className="text-3xl text-accent p-4 mb-10">Time For Something New...</h1>
          </div>
          <div className="w-full flex flex-col justify-around lg:flex-row">
            <Input />
            <Output />
          </div>
        </div>
      </main>
    </div>
  );
}
