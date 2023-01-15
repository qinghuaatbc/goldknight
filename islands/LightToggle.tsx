import { tw } from "twind";

import { useState } from "preact/hooks";

import { Signal, signal } from "@preact/signals";

import { ww } from "../components/toggleL.ts";
 

 
 export interface Light{
    
    name: string  
    entity_id:string
    state : Signal<string> 
   image:  Signal<string> 
   

 }

 

   
export default function LightToggle(props:Light) {
   
  props.state = signal(" ")
  props.image= signal(" ") 
  


  // const [text,setText] =useState("hello")
  ww.subject.subscribe({
    next: (msg: any )=> {console.log('message received: ' + JSON.stringify(msg))
      let data1 = msg.type
        if (data1==="event")
           if(msg.event.data.entity_id ===props.entity_id)
          { let data2 =(msg.event.data.new_state.state)
             props.state.value = data2
             console.log((data2=="on"))
           //  console.log((data2==="on"))
             if((data2 ==="on"))
             { 
             props.image.value="/1.png"
             }

             else
             props.image.value="/2.png "
            // msgs[1].value=JSON.stringify(msg.event.data.entity_id)
        }
      //  else
     // props.state.value =JSON.stringify(data1)
      }, // Called whenever there is a message from the server.
    error: (err: any) => console.log(err), // Called if at any point WebSocket API signals some kind of error.
    complete: () => console.log('complete') // Called when connection is closed (for whatever reason).
   });
   
   return (
        <>
       <div>
               <div>{props.name} </div>
              <button onClick={()=>{
                 ww.toggle(props.entity_id)
               //  setText("hi again")
                
              }}>light toggle</button>
            
       </div>
       <div>{props.name}</div>
       <div>{props.entity_id}</div>
       <div>{props.state}</div>
       
       <image  src={(props.state.value ==='on') ?  "/1.png " : "/2.png"}/> 
        <div>{props.image}</div>
        <image  src={props.image.value}/>
      </>    
 
     )
   }
