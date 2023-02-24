
import Header from "../components/Header.tsx";
import { tw } from "twind";
import LightToggle from "../islands/LightToggle.tsx";
import LightSlider from "../islands/LightSlider.tsx";



export default function light() { 
  return (
   
    <div>
      <Header />

      <div className={tw`w-screen flex justify-center`}>
        <div  
          className={tw`w-5/6 py-3 `}>
          <h1 className={tw`text-3xl font-thin mb-6 text-center`}>
              Lights
          </h1>
          <img style="display: block; margin-right: auto; margin-left: auto; width:90%; height:90%"
             src = "main1024X636.png"/> 
            <LightToggle top="33%" left="30%" entity_id="light.hall_closet_ceiling_light" name="family" ></LightToggle>
            <LightToggle top= "65%" left= "65%" entity_id="light.shower_bathroom_shower_lights" name="washroom" ></LightToggle>
           
          
            <LightSlider top="39%" left="35%" entity_id="light.hall_closet_ceiling_light" name="washroom" ></LightSlider>

            <LightSlider top= "71%" left= "70%" entity_id="light.shower_bathroom_shower_lights" name="washroom" ></LightSlider>


        </div>
    </div>
   </div>
  )


}