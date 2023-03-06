import { tw } from "twind";

import { useState } from "preact/hooks";
import { getUrlJsonFirebase } from "../components/lightControl.ts";

interface Movie{ 
 
  name: string
  url:string
}



// let songs: SongInt[] = await getUrlJson("https://raw.githubusercontent.com/qinghuaatbc/json/main/songs.json")
export default function VideoPlayer({name, url}:Movie) { 
  const [text, setText]=useState("")

  
  //alert(JSON.stringify(data4))
  

  return (
   <div>
      
      <video controls src={ url} />
      
    </div>  
     

  )

}