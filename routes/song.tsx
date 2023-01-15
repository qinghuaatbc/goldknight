
import Header from "../components/Header.tsx";
import { tw } from "twind";
import Songh from "../islands/Songh.tsx";



export default function Song() { 
  return (
   
    <div>
      <Header />

      <div className={tw`w-screen flex justify-center`}>
        <div className={tw`w-5/6 py-16`}>
          <h1 className={tw`text-6xl font-thin mb-6 text-center`}>
              Songs
          </h1>

        <Songh />
        </div>
    </div>
   </div>
  )


}