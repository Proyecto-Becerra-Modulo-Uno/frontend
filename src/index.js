import server from "./server.js";

server.listen(server.get("port"), ()=>{
    console.log(`Ejecutandose en: http://localhost:${app.get("port")}`);
})