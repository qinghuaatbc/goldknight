import { tw } from "twind";

import { useState } from "preact/hooks";

interface SongInt { 
  name: string,
  url :string
} 

let songs: SongInt[] = [
  {
    name: "一阵恼人的秋风",
    url: "https://firebasestorage.googleapis.com/v0/b/customer-f29a1.appspot.com/o/song%2F%E8%B4%B9%E7%BF%94%20-%20%E4%B8%80%E9%98%B5%E6%81%BC%E4%BA%BA%E7%9A%84%E7%A7%8B%E9%A3%8E.mp3?alt=media&token=850a42fc-e17a-4e23-82f0-b3699276d71a"
  },
  {
    name: "呢喃",
    url: "https://firebasestorage.googleapis.com/v0/b/customer-f29a1.appspot.com/o/song%2F%E8%B4%B9%E7%BF%94%20-%20%E5%91%A2%E5%96%83.mp3?alt=media&token=717c603c-d699-476a-b786-e25cae5319ca"
  },

  {
    name: "女孩",
    url: "https://firebasestorage.googleapis.com/v0/b/customer-f29a1.appspot.com/o/song%2F%E8%B4%B9%E7%BF%94%20-%20%E5%A5%B3%E5%AD%A9%E5%A5%B3%E5%AD%A9.mp3?alt=media&token=74fd9e4b-059c-4895-9a34-38ecfa07b8bb"
  },  
]

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