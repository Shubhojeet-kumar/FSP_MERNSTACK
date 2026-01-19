const http=require('http')
const fs=require('fs')

const server = http.createServer((req,res)=>{
  let filePath='';

  if(req.url === '/' || req.url === '/index'){
    filePath='index.html';
  }else if(req.url === '/about'){
    filePath='about.html';
  }else if(req.url === '/contact'){
    filePath='contact.html';
  }else{
    res.writeHead(404, { 'Content-Type':'text/plain'});
    return res.end('Page nhi mil rha');
  }

  fs.readFile(filePath,(err,data)=>{
    if(err){
      res.writeHead(500);
      return res.end('Server Error');
    }
    res.writeHead(200,{'content-type':'text/Html'});
    res.end(data);
  })
})

PORT=2026
server.listen(PORT,()=>{console.log(`Server started at http://localhost:${PORT}/`)})