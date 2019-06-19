
module.exports = class Beer {

    constructor(name, minTemperature, maxTemperature) {
        this.name = name;
        this.minTemperature = minTemperature;
        this.maxTemperature = maxTemperature;
    }
    getBeerName() {
        return this.name;
    }
    getMinTemperature() {
        return this.minTemperature;
    }
    getMaxTemperature() {
        return this.maxTemperature;
    }
}
