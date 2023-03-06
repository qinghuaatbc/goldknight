const listener = Deno.listen({ port: 8888 })
for await (const conn of listener) { 
      console.log("please say something")
     conn.readable.pipeTo(conn.writable)
      console.log(conn.readable.locked)
}