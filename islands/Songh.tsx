import { tw } from "twind";

import { useState } from "preact/hooks";
import { getUrlJsonFirebase } from "../components/lightControl.ts";

interface SongInt { 
  name: string,
  url :string
} 



// let songs: SongInt[] = await getUrlJson("https://raw.githubusercontent.com/qinghuaatbc/json/main/songs.json")
const songs: SongInt[] = await getUrlJsonFirebase("https://customer-f29a1.firebaseio.com/Songs.json") as SongInt[]
export default function Songh() { 
  const [text, setText]=useState("")

  function onKeyUp(ev: KeyboardEvent) {
   
      const value = (ev.target as HTMLInputElement).value;
    //  window.location.href = `/find/${value}`
      setText(value)
    
  }
  let songPs:SongInt[] = songs.filter(data => { return data.name.includes(text) })
  //alert(JSON.stringify(data4))
  const songLists = songPs.map((song1:SongInt) => { 
    return (
      <div>
        <div class={tw`text-3xl  text-center`} ><a href={song1.url }>{ song1.name}</a></div>


       </div>
     )
    
  })

  return (
   <div>
      
      <div class={tw`w-1/2 pt-8 mx-auto`}>
      <input
        onKeyUp={onKeyUp}
        class={tw`transition  text-2xl px-3 py-4  relative w-full bg-white bg-white rounded border border-2 border-black-300 focus:border-blue-600 outline-none outline-none font-bold`} 
      />
    </div>
      <div>


      { songLists}
      
      </div>
      
    </div>  
     

  )

}