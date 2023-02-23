import { tw } from "twind";

import { useState } from "preact/hooks";


 const data1 = await fetch("https://customer-f29a1.firebaseio.com/customer.json")
 const data2 = await data1.json()
 const data3:any[] = Object.values(data2)

export default function Project() { 
  const [text, setText]=useState("")

  function onKeyUp(ev: KeyboardEvent) {
    // if (ev.code === "Enter") {
    //   const value = (ev.target as HTMLInputElement).value;
    // //  window.location.href = `/find/${value}`
    //   setText(value)
    // }
    const value = (ev.target as HTMLInputElement).value;
    //  window.location.href = `/find/${value}`
      setText(value)
  }
  
  let data4 = data3.filter(data => { return data.address.address.includes(text) })
  //alert(JSON.stringify(data4))
  const userLists = data4.map((user:any) => { 
    let i = 0
    const zoneLists = Object.values(user.alarm.zone).map((zone: any) => {
      // const [znumber, setZnumber] = useState(1)
      i++
      return (
       <div>
         
          <li  className={tw`text-2xl font-thin text-justify ml-20 `}>Zone-{i}--{zone}</li>
      </div>
      )
    })
   

      
    return (
      <div>
        <div class={tw`text-3xl  text-center`} >{ user.address.address}</div>
        <ul>{ zoneLists}</ul>

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


      { userLists}
      
      </div>
      
    </div>  
     

  )

}