import { tw } from "twind";

import { useState } from "preact/hooks";


import { ww } from "../components/toggleL.ts";
 

 
 interface Light{
    
    name: string  
   entity_id: string
   
   top: string
   left: string
  //  state : Signal<string> 
  // image:  Signal<string> 
   

 }

 

   
export default function LightToggle(props:Light) {
   
 //  props.state = signal(" ")
 //  props.image= signal(" ") 
  
 
  const [value,setValue] = useState(0)
  
  ww.subject.subscribe({
    next: (msg: any) => {
      // console.log('message received: ' + JSON.stringify(msg))
      let data1 = msg.type
        if (data1==="event")
           if(msg.event.data.entity_id ===props.entity_id)
          { let data2 =(msg.event.data.new_state.state)
            
             let data5 = (msg.event.data.new_state.attributes.brightness)
             if (data5 == null)
             
               setValue(0)
             else
             setValue(data5 * 100 / 255) 
              
             console.log(data5 * 100 / 255)
            //    console.log(data5)
             
            // msgs[1].value=JSON.stringify(msg.event.data.entity_id)
           }
     
      }, // Called whenever there is a message from the server.
    error: (err: any) => console.log(err), // Called if at any point WebSocket API signals some kind of error.
    complete: () => console.log('complete') // Called when connection is closed (for whatever reason).
   });
   
  function setSliderValue(id: string, value: number) { 
    ww.setValue(id,value)

  }
   return (
        < div style ={{position: 'absolute', top: props.top, left: props.left }}>
       {/* <div  >
               <div>{props.name} </div>
           
       </div> */}
       <div>
         
         <input type="range" min="0" max="100" value={value}
           onChange={(e) => {
             let v1: number = parseInt((e.target as HTMLInputElement).value)
             
             ww.setValue(props.entity_id, v1)
           }}
        />
         
       </div>
       


      </div>    
 
     )
   }
