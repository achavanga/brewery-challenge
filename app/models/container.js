const Beer = require('../models/beer.js');
const chalk = require('chalk');

module.exports = class Container {
    constructor(name, temperature, beer) {
        this.name = name;
        this.beer = beer
        this.temperature = temperature;
    }
    getContainerName() {
        return this.name;
    }
    getTemperature() {
        return this.temperature;
    }

    getBeer() {
        return this.beer;
    }
    //Check the container temperature details against the beer recommendation
    checkTemperature() {
        let validationMessage = this.validateValues();
        if (validationMessage == '') {
            if (this.getBeer().getMinTemperature() > this.getTemperature()) {
                return chalk.bgRed('Temperature is lower than the required (' + this.getBeer().getMinTemperature() + '°C - ' + this.getBeer().getMaxTemperature() + '°C)');
            } else if (this.getBeer().getMaxTemperature() < this.getTemperature()) {
                return chalk.bgRed('Temperature is higher than the required (' + this.getBeer().getMinTemperature() + '°C - ' + this.getBeer().getMaxTemperature() + '°C)');
            } else {
                return chalk.green('Temperature is in the required range (' + this.getBeer().getMinTemperature() + '°C - ' + this.getBeer().getMaxTemperature() + '°C)');
            }
        } else {
            return validationMessage;
        }
    }
    //validate beer and container temperature data
    validateValues() {
        if (this.getBeer() == undefined) {
            return chalk.bgRed('Error reading beer details');
        } else if (this.getTemperature() == undefined) {
            return chalk.bgRed('Error reading container temperature');
        } else if (this.getBeer().getMinTemperature() == undefined && this.getBeer().getMaxTemperature() == undefined) {
            return chalk.bgRed('Error reading beer temperature');
        } else {
            return '';
        }
    }
}
