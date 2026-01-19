PORT=3001
const http=require('http');
const url=require('url');

let server=http.createServer((req,res)=>{
  const {query}=url.parse(req.url,true);

  res.writeHead(200, {'content-type':'application/json'});
  res.end(JSON.stringify(query));
})

server.listen(PORT)