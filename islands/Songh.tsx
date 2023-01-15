import { tw } from "twind";

import { useState } from "preact/hooks";

interface SongInt { 
  name: string,
  url :string
} 

let songs: SongInt[] = [
  {
    name: "小雨来的正是时候",
    url: "https://firebasestorage.googleapis.com/v0/b/customer-f29a1.appspot.com/o/song%2F%E8%B4%B9%E7%BF%94%20-%20%E5%B0%8F%E9%9B%A8%E6%9D%A5%E7%9A%84%E6%AD%A3%E6%98%AF%E6%97%B6%E5%80%99.mp3?alt=media&token=6fb05107-347e-4fcc-8e2d-a3346b65f3de"
  },
{ 
  name: "在雨中 ",
  url:"https://firebasestorage.googleapis.com/v0/b/customer-f29a1.appspot.com/o/song%2F%E8%B4%B9%E7%BF%94%20-%20%E9%9B%A8%E4%B8%AD%E5%BE%98%E5%BE%8A.mp3?alt=media&token=63debe94-cf25-425a-9bb8-843bd57613de"
  },
  
]

export default function Songh() { 
  const [text, setText]=useState("")

  function onKeyUp(ev: KeyboardEvent) {
    if (ev.code === "Enter") {
      const value = (ev.target as HTMLInputElement).value;
    //  window.location.href = `/find/${value}`
      setText(value)
    }
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
        class={tw`transition  text-4xl px-3 py-4  relative w-full bg-white bg-white rounded border border-2 border-black-300 focus:border-blue-600 outline-none outline-none font-bold`} 
      />
    </div>
      <div>


      { songLists}
      
      </div>
      
    </div>  
     

  )

}