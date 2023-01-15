
import Header from "../components/Header.tsx";
import { tw } from "twind";
import Manual from "../islands/Manual.tsx";



export default function manual() { 
  return (
   
    <div>
      <Header />

      <div className={tw`w-screen flex justify-center`}>
        <div className={tw`w-5/6 py-16`}>
          <h1 className={tw`text-6xl font-thin mb-6 text-center`}>
              Manuals
          </h1>

        <Manual />
        </div>
    </div>
   </div>
  )


}