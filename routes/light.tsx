
import Header from "../components/Header.tsx";
import { tw } from "twind";
import LightToggle from "../islands/LightToggle.tsx";
import LightSlider from "../islands/LightSlider.tsx";
import LightLists from "../components/LightLists.tsx";
import { getUrlJson, getUrlJsonFirebase, Light } from "../components/lightControl.ts";


// let lights:Light[]= await getLights("./static/lights.json")
// const  lights:Light[]= await getUrlJson("https://jhqsoihgyovqunxunsep.supabase.co/storage/v1/object/sign/goldknight/json/lights.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJnb2xka25pZ2h0L2pzb24vbGlnaHRzLmpzb24iLCJpYXQiOjE2Nzc0NDQ0ODksImV4cCI6MTcwODk4MDQ4OX0.XjN5k7nm7-5UzSxYRi8Zwl2dWci3gNoQPHxxgnGigNE&t=2023-02-26T20%3A48%3A08.990Z") as Light[]
// const lights:Light[]= await getUrlJsonFirebase("https://customer-f29a1.firebaseio.com/HALight.json") as Light[]

// console.log(lights)
{/* <LightToggle top={light.top} left={light.left} entity_id={light.entity_id} name=""></LightToggle> */}
export default function light() { 
  
 
  return (
   
    <div>
      <Header />

      <div className={tw`w-screen flex justify-center`}>
        <div  style=" margin-right: auto; margin-left: auto; "

          className={tw`w-5/6 py-3 `}>
          <h1 className={tw`text-3xl font-thin mb-6 text-center`}>
              Lights
          </h1>
          <LightLists />
          <img style="display: block; margin-right: auto; margin-left: auto;width: 100%;height: auto;"
             src = "main1024X636.png"/> 
            {/* <LightToggle top="33%" left="30%" entity_id="light.hall_closet_ceiling_light" name="family" ></LightToggle>
            <LightToggle top= "65%" left= "65%" entity_id="light.shower_bathroom_shower_lights" name="washroom" ></LightToggle>
            */}
           {/* { lightLists}  */}
           {/* <LightLists></LightLists> */}
          {/* <LightSlider top="39%" left="45%" entity_id="light.hall_closet_ceiling_light" name="washroom" ></LightSlider>

            <LightSlider top= "71%" left= "80%" entity_id="light.shower_bathroom_shower_lights" name="washroom" ></LightSlider> */}


        </div>
    </div>
   </div>
  )


}