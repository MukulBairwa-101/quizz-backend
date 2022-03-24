const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{

const data = fs.readFileSync(
    `${__dirname}/api/questionBank.json`,"utf-8", );



    if(req.url == "/"){
        res.end("quizz");
    }
    else if(req.url == "/questions"){
        res.writeHead(200, {"content-type": "application/json"});
        res.end(data);
    }
    else res.end('404');
})

const port = process.env.PORT || 3001

server.listen(port,()=>{ console.log(`listening on port ${port}`)});