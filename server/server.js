const expres = require('express');
const server = express();
let path = `favfoods`;

server.get(`/${path}`, function(request, response){
    response.send('data');
})

path = `names`;
server.get(`/${path}`, function(request, response){
    response.send('data');
})
server.listen(3000);
