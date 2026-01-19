const http=require('http')
const fs=require('fs')
const url=require('url')

const server=http.createServer((req,res)=>{
  const parseUrl=url.parse(req.url,true);
  const path=parseUrl.pathname;
  const method=req.method;

  if(path === '/' && method==='GET'){
    res.writeHead(200,{'content-type':'text/html'});
    res.end('<h1>Home Page</h1>');
  }else if(path === '/about' && method==='GET'){
    res.writeHead(200,{'content-type':'text/html'});
    res.end('<h1>About Page</h1>');
  }else if(path==='/users' && method === 'GET'){
    const id=parseUrl.query.id;
    res.writeHead(200,{'content-type':'application/json'});
    if(id){
      res.end(JSON.stringify({id:id, name:`User ${id}`}))
    }else{
      res.end(JSON.stringify([
        {id:1, name:'Demo name'},
        {id:2, name:'Udharan naam'}
      ]));
    }
  }else if(path==='/data' && method==='POST'){
    let body='';
    req.on('data',chunk=> body+=chunk);
    req.on('end',()=>{
      let parsedBody;
      try{
        parsedBody=JSON.parse(body);
      }catch{
        parsedBody={raw:body};
      }
      res.writeHead(201,{ 'Content-Type':'appliction/json'});
      res.end(JSON.stringify({message:'Data recieved',data:parsedBody}));
    });
  }else{
    res.writeHead(404,{'Content-Type':'text/plain'});
    res.end('404 Not Found');
  }
});

PORT=2020
server.listen(PORT,()=>{console.log(`Server started at http://localhost:${PORT}/`)})