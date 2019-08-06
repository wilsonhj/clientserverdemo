$(document).ready(startApp);
let jsonFile = ``;

function startApp(){
    getFoodData();
    getNameData();
}

function getFoodData(){
    // jsonFile = 'getfood';
    $.ajax({
        // url: `../server/${jsonFile}.json`,
        url: 'http://localhost:3001/favfoods',
        method: 'GET',
        dataType: 'json',
        success: handleFoodDataFromServer
    })
}

function getNameData(){
    $.ajax({
        url: 'http://localhost:3001/names',
        method: 'GET',
        dataType: 'json',
        success: handleNameDataFromServer
    })
}

function handleFoodDataFromServer(response){
    console.log(response);
    for(let i = 0; i < response.length; i++){
        let foodDiv = $("<div>").text(response[i].food);
        $('body').append(foodDiv);
    }
}
function handleNameDataFromServer(response){
    console.log(response);
    for (let i = 0; i<response.length; i++){
        let nameDiv = $('<div>').text(response[i].name);
        $('body').append(nameDiv);
    }
}

function addDataToServer(request, response){
    const dataPush = {
        food: request.query.food,
    }
    response.send('done');
}