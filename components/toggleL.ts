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
  


}

export const ww = new WebS()
