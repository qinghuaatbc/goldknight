const listener = Deno.listen({ port: 8889 })
for await (const conn of listener) { 
     conn.readable.pipeTo(conn.writable)
}