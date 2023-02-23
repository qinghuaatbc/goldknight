import { tw } from "twind";

import { useState } from "preact/hooks";

import { Signal, signal } from "@preact/signals";

import { ww } from "../components/toggleL.ts";
 

 
 export interface Light{
    
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
  
 
  const [state,setState] = useState('off')
  const [imageOn, setImageOn] = useState("display")
  const [imageOff,setImageOff] =useState("display:none")

  ww.subject.subscribe({
    next: (msg: any) => {
      console.log('message received: ' + JSON.stringify(msg))
      let data1 = msg.type
        if (data1==="event")
           if(msg.event.data.entity_id ===props.entity_id)
          { let data2 =(msg.event.data.new_state.state)
             setState(data2)
             console.log((data2=="on"))
           //  console.log((data2==="on"))
             if ((data2 === "on")) {
               setImageOn("display ")
               setImageOff("display: none")
             }

             else {
               setImageOn('display: none')
               setImageOff('display')
             }
            // msgs[1].value=JSON.stringify(msg.event.data.entity_id)
           }
      if (data1 == "result")
      {
       console.log(JSON.stringify(msg))
       }
      //  else
     // props.state.value =JSON.stringify(data1)
      }, // Called whenever there is a message from the server.
    error: (err: any) => console.log(err), // Called if at any point WebSocket API signals some kind of error.
    complete: () => console.log('complete') // Called when connection is closed (for whatever reason).
   });
   
   return (
        < div style ={{position: 'absolute', top: props.top, left: props.left }}>
       <div  >
               <div>{props.name} </div>
              <button onClick={()=>{
           ww.getState()
           ww.toggle(props.entity_id)
               //  setText("hi again")
                
              }}>get state</button>
            
       </div>
       {/* <div>{props.name}</div> */}
       {/* <div>{props.entity_id}</div>
       <div>{state}</div> */}

       {/* <img  src={(state==='on') ?  "/1.png " : "/2.png"}/>  */}
       {/* <div>{imageOn}</div> */}
       {/* <img src={image} /> */}
        {/* position: 'absolute', top: 200, left: 100  */}
       <img 
         style={imageOn}

         onClick={() => {
                 ww.toggle(props.entity_id)
               //  setText("hi again")
                
              }}
        src="light-on60x60.png" /> 
       <img style={ imageOff}
         onClick={() => {
         ww.toggle(props.entity_id)
         //  setText("hi again")
       }}
         src="light-off60x60.png" /> 


      </div>    
 
     )
   }
