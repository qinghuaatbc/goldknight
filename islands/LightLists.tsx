import { getUrlJsonFirebase, Light } from "../components/lightControl.ts";
import LightSlider from "./LightSlider.tsx";
import LightToggle from "./LightToggle.tsx";

const lights:Light[]= await getUrlJsonFirebase("https://customer-f29a1.firebaseio.com/HALight.json") as Light[]

export default function LightLists():any{ 
  
  const lightLists = lights.map((light) => {
    return (
      <div>
        <LightToggle top={light.top} left={light.left} entity_id={light.entity_id} name={light.name}></LightToggle>
        <LightSlider top={light.top + 80} left={light.left - 20} entity_id={light.entity_id} name="" ></LightSlider>
      </div>
    )
  })
  
  return (
  
    <div>
      {lightLists}
  </div>


)



}