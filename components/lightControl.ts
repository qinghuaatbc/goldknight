import { webSocket } from "https://deno.land/x/rxjs@v1.0.2/webSocket/index.ts";
import { Signal, signal } from "@preact/signals";
let a = 1

class WebS{
   

token:string = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJiMzBmMjJlNGQ0ZmE0ODI2OTY5Y2FjNzI1N2E3YzkxZCIsImlhdCI6MTY3MjM2NTE4MSwiZXhwIjoxOTg3NzI1MTgxfQ.Tg35yySpPSHPA7LysJE0b0Z0WVrxiBnd2Gt0Ek8XSDQ"
 subject = webSocket('ws://24.80.168.30:8123/api/websocket');
id:number =3
 text?: string

  constructor() {
//  console.log(a)
// this.subject.subscribe({
//   next: (msg: any )=> {console.log('message received: ' + JSON.stringify(msg))

//      this.text=JSON.stringify(msg)
//       }, // Called whenever there is a message from the server.
//   error: (err: any) => console.log(err), // Called if at any point WebSocket API signals some kind of error.
//   complete: () => console.log('complete') // Called when connection is closed (for whatever reason).
//  });

 this.subject.next(
    {
        "type": "auth",
        "access_token": this.token
      }
 )


  this.id++
  this.subject.next(
    {
        "id": this.id,
        "type": "subscribe_events",
        // Optional
        "event_type": "state_changed"
      }

  )

  

   this.id++

   this.subject.next(
    {
        "id": this.id,
        "type": "subscribe_events",
        // Optional
        "event_type": "entity_registry"
      }

  )

  

    this.id++
    
    this.subject.next(
      {
          "id": this.id,
          "type": "get_states",
        
        }
   )
 
    this.id++


    
}

 toggle(entity_id:string){

     this.subject.next(
        {
            "id": this.id,
            "type": "call_service",
            "domain": "light",
            "service": "toggle",
            // Optional
            // "service_data": {
            //   "color_name": "beige",
            //   "brightness": "101",
            // }
            // Optional
            "target":
             {
              "entity_id": entity_id,
            }
          }
     )

      this.id++
 }

 getState(){
      
  this.subject.next(
     {
         "id": this.id,
         "type": "get_states",
       
       }
  )

   this.id++
}
  
setValue(entity_id?: string, value?: number) { 
  this.subject.next({
    "id": this.id,
    "type": "call_service",
    "domain": "light",
    "service": "turn_on",
    // Optional
    "service_data": {
      "brightness_pct": value
    },
    "target":{
      "entity_id" : entity_id

     
    }
  })
  this.id++
  
}


  

}

export const ww = new WebS()
export interface Light{
    
 name: string  
 entity_id: string
 
 top: number
 left: number
//  state : Signal<string> 
// image:  Signal<string> 
 

}

export async function getJson(filePath: string) { 

  return JSON.parse(await Deno.readTextFile(filePath))


}

export async function getUrlJson(fileUrl: string) { 

  const jsonResponse = await fetch(fileUrl);
  const jsonData = await jsonResponse.json();
  return jsonData

}

export async function getUrlJsonFirebase(fileUrl: string) { 

  const jsonResponse = await fetch(fileUrl);
  const jsonData = await jsonResponse.json();
  return Object.values(jsonData)

}