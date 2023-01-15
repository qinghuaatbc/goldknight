import { tw } from "twind";

import { useState } from "preact/hooks";

interface ManulPdf { 
  name: string,
  url :string
} 

let manuals: ManulPdf[] = [
{ 
  name: "Vaadin 14",
  url:"https://firebasestorage.googleapis.com/v0/b/customer-f29a1.appspot.com/o/Book%20of%20Vaadin%2014.pdf?alt=media&token=847bf9a5-eb57-41d4-87db-831a76d0440a"
},

{ 
  name: "Vista-20P ",
  url:"https://firebasestorage.googleapis.com/v0/b/customer-f29a1.appspot.com/o/manual%2Fvista20Po.pdf?alt=media&token=b187fa7e-6d6b-4db4-ac2c-4122590b7152"
  },
  {
    name: "DSC1832",
    url: "https://firebasestorage.googleapis.com/v0/b/customer-f29a1.appspot.com/o/manual%2Fdsc1616.pdf?alt=media&token=efeb6b95-7b40-4a01-be95-5953e9965e29"
  },    
]

export default function Manual() { 
  const [text, setText]=useState("")

  function onKeyUp(ev: KeyboardEvent) {
    if (ev.code === "Enter") {
      const value = (ev.target as HTMLInputElement).value;
    //  window.location.href = `/find/${value}`
      setText(value)
    }
  }
  let man:ManulPdf[] = manuals.filter(data => { return data.name.includes(text) })
  //alert(JSON.stringify(data4))
  const manualLists = man.map((man:ManulPdf) => { 
    return (
      <div>
        <div class={tw`text-3xl  text-center`} ><a href={man.url }>{ man.name}</a></div>


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


      { manualLists}
      
      </div>
      
    </div>  
     

  )

}