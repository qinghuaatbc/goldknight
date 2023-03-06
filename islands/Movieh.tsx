import { tw } from "twind";

import { useState } from "preact/hooks";
import { getUrlJsonFirebase } from "../components/lightControl.ts";
import VideoPlayer from "./VideoPlayer.tsx";

interface Movie { 
  name: string,
  url :string
} 



// let songs: SongInt[] = await getUrlJson("https://raw.githubusercontent.com/qinghuaatbc/json/main/songs.json")
const movies: Movie[] = await getUrlJsonFirebase("https://customer-f29a1.firebaseio.com/Movies.json") as Movie[]
export default function Movieh() { 
  const [text, setText]=useState("")
  const [url, setUrl]=useState("")

  function onKeyUp(ev: KeyboardEvent) {
   
      const value = (ev.target as HTMLInputElement).value;
    //  window.location.href = `/find/${value}`
      setText(value)
    
  }
  const  movie1s:Movie[] = movies.filter(data => { return data.name.includes(text) })
  //alert(JSON.stringify(data4))
  const movieLists = movie1s.map((movie1:Movie) => { 
    return (
      <div>
        {/* <div class={tw`text-3xl  text-center`} ><a href={movie1.url }>{ movie1.name}</a></div> */}
        <img src="https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg"
          onClick={() => { 
              setUrl(movie1.url)

          }}/>
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

      <VideoPlayer url={url} name="" />

        {movieLists}

      
      </div>
      
    </div>  
     

  )

}