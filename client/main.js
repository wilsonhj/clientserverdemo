$(document).ready(startApp);
let jsonFile = ``;
function startApp(){
    getData();
}

function getData(){
    jsonFile = 'getfood';
    $.ajax({
        url: `../server/${jsonFile}.json`,
        method: 'GET',
        dataType: 'json',
        success: handleDataFromServer
    })
}

function handleDataFromServer(response){
    console.log(response);
}
function addDataToServer(request, response){
    const dataPush = {
        food: request.query.food,
    }
    response.send('done');
}