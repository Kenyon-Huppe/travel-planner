'use client';
import { ChangeEvent, FormEvent, useState } from "react";

interface InputProps {
    submitHandler: (formData: any) => void;
}

// export const getServerSideProps = () => {
//     console.log(process.env.GEMINI_API_KEY + 'thisssss');

//     return {
//         props: {
//             hello: 'world'
//         }
//     }
// }

export default function Input({submitHandler}:InputProps) {

  return (
    <div className="flex flex-col items-center">
        <h3 className="text-2xl w-fit mb-4">Let's Make Some Memories</h3>
        <form action={submitHandler} className="flex flex-col items-center">
            <section className="flex flex-col flex-wrap justify-around">
                <div className="flex flex-col">
                    <h5 className="text-xl">Type of Trip</h5>
                    <label htmlFor="adventurous">
                        <input type="radio" name="type" id="adventurous" value="adventurous" />
                        <span>Adventurous</span>
                    </label>
                    <label htmlFor="relaxing">
                        <input type="radio" name="type" id="relaxing" value="laid back" />
                        <span>Laid Back</span>
                    </label>
                </div>
                <hr className="my-5 border" />
                <div className="flex flex-col">
                    <h5 className="text-xl">Temperature</h5>
                    <label htmlFor="hot">
                        <input type="radio" name="temperature" id="hot" value="hot" />
                        <span>Hot</span>
                    </label>
                    <label htmlFor="temperate">
                        <input type="radio" name="temperature" id="temperate" value="temperate" />
                        <span>Temperate</span>
                    </label>
                    <label htmlFor="cold">
                        <input type="radio" name="temperature" id="cold" value="cold" />
                        <span>Cold</span>
                    </label>
                </div>
                <hr className="my-5 border" />
                <div className="flex flex-col">
                    <h5 className="text-xl">Activities</h5>
                    <label htmlFor="beach">
                        <input type="checkbox" name="activities" id="beach" value="beach" />
                        <span>Hang at the beach</span>
                    </label>
                    <label htmlFor="ski">
                        <input type="checkbox" name="activities" id="ski" value="ski" />
                        <span>Skiing</span>
                    </label>
                    <label htmlFor="hiking">
                        <input type="checkbox" name="activities" id="hiking" value="hiking" />
                        <span>Hiking</span>
                    </label>
                    <label htmlFor="swimming">
                        <input type="checkbox" name="activities" id="swimming" value="swimming" />
                        <span>Swimming</span>
                    </label>
                    <label htmlFor="city">
                        <input type="checkbox" name="activities" id="city" value="city" />
                        <span>City life</span>
                    </label>
                </div>
                <hr className="my-5 border" />
                <div className="flex flex-col">
                    <h5 className="text-xl">Distance</h5>
                    <label htmlFor="short">
                        <input type="radio" name="distance" id="short" value="short" />
                        <span>Close</span>
                    </label>
                    <label htmlFor="medium">
                        <input type="radio" name="distance" id="medium" value="medium" />
                        <span>Medium</span>
                    </label>
                    <label htmlFor="far">
                        <input type="radio" name="distance" id="far" value="far" />
                        <span>Far</span>
                    </label>
                    <label htmlFor="location">Current location (country/state)</label>
                    <input type="text" name="distance" id="location" className="text-black px-1" />
                </div>
            </section>
            <button type="submit" 
            className="my-5 border-2 border-tertiary rounded-full p-2 bg-accent hover:border-accent hover:bg-tertiary hover:text-black
            focus:border-accent focus:bg-tertiary focus:text-black">Let's Go!</button>
        </form>
    </div>
  )
}
