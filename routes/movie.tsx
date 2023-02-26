
import Header from "../components/Header.tsx";
import { tw } from "twind";
import Songh from "../islands/Songh.tsx";
import Movieh from "../islands/Movieh.tsx";



export default function Movie() { 
  return (
   
    <div>
      <Header />

      <div className={tw`w-screen flex justify-center`}>
        <div className={tw`w-5/6 py-3`}>
          <h1 className={tw`text-3xl font-thin mb-6 text-center`}>
              Songs
          </h1>

        <Movieh />
        </div>
    </div>
   </div>
  )


}