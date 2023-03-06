interface Person { 
  name: string,
  age: number,
  
  onCall: (d: string) => void
  call?:(e:string)=>string
  
}
console.log("hello")

const  p: Person = {
  name: "wang qighua",
  age: 53,
  onCall: (d) => console.log(d),
  // call: function(t: string): string { 
  //   return t;
  // }
}
p.call = function (t): string{ 
  return t
}
console.log(p.name)
p.onCall("hello")