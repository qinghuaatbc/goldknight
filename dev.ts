#!/usr/bin/env -S deno run -A --watch=static/,routes/

import dev from "$fresh/dev.ts";

new Worker(new URL("./echo.ts", import.meta.url).href, { type: "module" })
// new Worker(new URL("./echo1.ts",import.meta.url).href, {type:"module"})

await dev(import.meta.url, "./main.ts");

