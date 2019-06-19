const Table = require('cli-table3');

const Beer = require('../models/beer.js');
const Container = require('../models/container.js');
const BeerName = require('../models/beerName.js');



exports.getContainerTemperatureReport = () => {
    //table configuration
    var table = new Table({
        head: ['Beer', 'Container Temperature', 'Status'],
        colWidths: [15, 25, 100]
    });
    //add Container item into the table for dsiplay to user
    for (let value of containerStetup()) {
        table.push([value.name, value.temperature+'°C', value.checkTemperature()]);
    }
    return(table);

}

//create beer
function beerSetUp() {
    let beer = [];
    beer.push(new Beer(BeerName.PILSNER, 4.0, 6.0));
    beer.push(new Beer(BeerName.IPA, 5.0, 6.0));
    beer.push(new Beer(BeerName.LAGER, 4.0, 7.0));
    beer.push(new Beer(BeerName.STOUT, 6.0, 8.0));
    beer.push(new Beer(BeerName.WHEAT_BEER, 3.0, 5.0));
    beer.push(new Beer(BeerName.PALE_ALE, 4.0, 6.0));
    return beer;
}

//Set Up Container by adding beer and container temperature
function containerStetup() {
    let containers = [];
    for (let item of beerSetUp()) {
        containers.push(new Container(item.name, generateTemperature(), item));
    }
    return containers;
}

//generate random temperature values
function generateTemperature() {
    return Math.floor((Math.random() * 3) + 5);
}