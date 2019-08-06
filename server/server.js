const express = require('express');
const cors = require('cors');
const server = express();

const names = [{
	"name": "Samantha"
}, {
	"name": "Jae"
}, {
	"name": "Nick"
}]

const food = [{
	"food": "pinot noir"
}, {
	"food": "hokkaido ramen"
}, {
	"food": "pinot noir"
}]


server.use( cors() );
// let path = `favfoods`;

server.get(`/favfoods`, function(request, response){
    response.send(food);
})

// path = `names`;
server.get(`/names`, function(request, response){
    response.send(names);
})
server.listen(3001, ()=>console.log('server has arrived!'));
