import { getUrlJsonFirebase, Light } from "../components/lightControl.ts";
import LightSlider from "../islands/LightSlider.tsx";
import LightToggle from "../islands/LightToggle.tsx";

//const lights:Light[]= await getUrlJsonFirebase("https://customer-f29a1.firebaseio.com/HALight.json") as Light[]
const lights:Light[]= await getUrlJsonFirebase("https://customer-f29a1.firebaseio.com/HALight.json") as Light[]

export default function LightLists() {

  
  const lightLists = lights.map((light) => {
    return (
      <div>
        {/* <LightToggle top={light.top} left={light.left} entity_id={light.entity_id} name={light.name}></LightToggle>
        <LightSlider top={light.top } left={light.left } entity_id={light.entity_id} name="" ></LightSlider> */}
      <LightToggle top={light.top} left={light.left} entity_id={light.entity_id} name={light.name}></LightToggle>
       <LightSlider top={String(parseInt(light.top) + 12)+"%"} left={String(parseInt(light.left) - 3.5)+"%"} entity_id={light.entity_id} name="" ></LightSlider>
      </div>
    )
  })
  
  return (
  
    <div>
      {lightLists}
  </div>


)



}