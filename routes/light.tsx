
import Header from "../components/Header.tsx";
import { tw } from "twind";
import LightToggle from "../islands/LightToggle.tsx";



export default function light() { 
  return (
   
    <div>
      <Header />

      <div className={tw`w-screen flex justify-center`}>
        <div className={tw`w-5/6 py-16`}>
          <h1 className={tw`text-6xl font-thin mb-6 text-center`}>
              Lights
          </h1>
            <img src = "main1024X636.png"/> 
            <LightToggle top="350px" left="300px" entity_id="light.hall_closet_ceiling_light" name="family" ></LightToggle>
            <LightToggle top= "680px" left= "600px" entity_id="light.shower_bathroom_shower_lights" name="washroom" ></LightToggle>
   
        </div>
    </div>
   </div>
  )


}