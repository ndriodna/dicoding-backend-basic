import http from "http";

/*------------------------http server------------------------*/
/*const listenerServer = (req, response) => {
  response.setHeader("Content-Type", "text/html");

  response.statusCode = 200;
  response.end("<h1>Server bekerja</h1>");
};

const server = http.createServer(listenerServer);
const port = 5000;
const host = "localhost";

server.listen(port, host, () => {
  console.log(`Server Berjalan pada http://${host}:${port}`);
});
*/

/*------------------------http server with method/verb------------------------*/
// const listenerServer = (request, response) => {
//   response.setHeader('Content-Type', 'application/json');

//   response.statusCode = 200;
//   const { method } = request;
//   const { url } = request;

//   if (method === "GET") {
//     response.end(console.log(`ini ${method}`));
//   }

//   if (method === "POST") {
//     let body = [];
//     request.on("data", (chunk) => {
//       body.push(chunk);
//     });
//     request.on("end", () => {
//       body = Buffer.concat(body).toString();
//       const { name } = JSON.parse(body);
//       response.end(`${name}`);
//     });
//   }

//   if (method === "PUT") {
//     response.end(console.log(`ini ${method}`));
//   }

//   if (method === "DELETE") {
//     response.end(console.log(`ini ${method}`));
//   }
// };

// const server = http.createServer(listenerServer);
// const port = 5000;
// const host = "localhost";

// server.listen(port, host, () => {
//   console.log(`Server Berjalan pada http://${host}:${port}`);
// });

/*------------------------http server routing------------------------*/

/*const listenerServer = (request,response) =>{
  response.setHeader('Content-Type', 'application/json')
  response.statusCode = 200

  const {method} = request
  const {url} = request

  if (url === '/') {
    if (method === 'GET') {
      response.end(`ini adalah homepage`)
    }else{
      response.end(`tidak dapat diakses dengan ${method} request`)
    }
  }
  else if (url === '/about') {
    if (method === 'GET') {
      response.end(`Ini adalah halaman about`)
    }else if(method === 'POST'){
     let body = [];
     request.on("data", (chunk) => {
      body.push(chunk);
    });
     request.on("end", () => {
      body = Buffer.concat(body).toString();
      const { name } = JSON.parse(body);
      response.end(`Halo, ${name} ini adalah halaman about`);
    });
   }else{
    response.end(`halaman ini tidak dapat diakses dengan ${method} request`)
  }
}else{
  response.end(`Halaman tidak ada dek`)
}
}

const server = http.createServer(listenerServer);
const port = 5000;
const host = "localhost";

server.listen(port, host, () => {
  console.log(`Server Berjalan pada http://${host}:${port}`);
})*/


/*------------------------http server response status & response header------------------------*/
/*
const listenerServer = (request,response) =>{
  response.setHeader('Content-Type','application/json')
  response.setHeader('X-Powered-By','LELE')
  response.setHeader('ikan','LELE')

  const {method, url} = request

  if (url === '/') {
    if (method === 'GET') {
      response.statusCode = 200
      response.end('ini adalah homepage')
    }else{
      response.statusCode = 404
      response.end(`tidak dapat diakses dengan ${method} request`)
    }
  }

}

const createServer = http.createServer(listenerServer)

const port = 5000
const host = 'localhost'

createServer.listen(port,host, ()=>{
  console.log(`Server runnign at http://${host}:${port}`)
}
)*/


/*------------------response body------------------*/


const listenerServer = (request,response) =>{
  response.setHeader('Content-Type','application/json')

  const {method, url} = request

  if (url === '/') {
    if (method === 'GET') {
      response.statusCode = 200
      response.end(JSON.stringify({
        message:'ini home'
      }))
    }else{
      response.statusCode = 404
      response.end(JSON.stringify({
        message:`error tidak dapat dikases dengan ${method} request`
      }))
    }
  }

}

const createServer = http.createServer(listenerServer)

const port = 5000
const host = 'localhost'

createServer.listen(port,host, ()=>{
  console.log(`Server runnign at http://${host}:${port}`)
}
)