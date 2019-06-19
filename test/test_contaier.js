const chai = require('chai');
const expect = chai.expect;
const Beer = require('../app/models/beer.js');
const Container = require('../app/models/container');
const BeerName = require('../app/models/beerName');

describe('Container Class Test cases', function () {

    describe("Test Container with the right data", function () {
        let beer = new Beer(BeerName.PILSNER, 4.0, 6.0);
        let container = new Container('pilsner', 5, beer);

        it('container should be a Container Class', () => {
            expect(container).to.be.an.instanceof(Container);
        });
        it('container should have a name', () => {
            expect(container).to.have.property('name', 'pilsner');
        });
        it('getContainerName() should be pilsner', () => {
            expect(container.getContainerName()).to.be.equal('pilsner');
        });
        it('container should have a beer', () => {
            expect(container).to.have.property('beer', beer);
        });

    });


    describe("Test with the wrong data", function () {
        let container = new Container();

        it('container should be a Container Class', () => {
            expect(container).to.be.an.instanceof(Container);
        });
        it('container should not have a name', () => {
            expect(container).to.have.property('name', undefined);
        });
        it('container should not have a beer', () => {
            expect(container).to.have.property('beer', undefined);
        });
        it('container should not have a temperature', () => {
            expect(container).to.have.property('temperature', undefined);
        });
        it('container should show error message when calling function checkTemperature if values are undefined', () => {
            expect(container.checkTemperature()).to.have.contains('Error reading beer details');
        });
        it('container should show error message when calling function checkTemperature if container value are undefined', () => {
            let beer = new Beer(BeerName.PILSNER, 4.0, 6.0);
            let container = new Container(undefined, undefined, beer);
            expect(container.checkTemperature()).to.have.contains('Error reading container temperature');
        });
        it('container should show error message when calling function checkTemperature if beer temperatue value are undefined', () => {
            let beer = new Beer(BeerName.PILSNER, undefined, undefined);
            let container = new Container(undefined, 5, beer);
            expect(container.checkTemperature()).to.have.contains('Error reading beer temperature');
        });
    });


    describe("Test temperature for the conatiner against the beer temperature", function () {

        it('checkTemperature() Container temperature suitable Pilsner container tamperature', () => {
            let beer = new Beer(BeerName.PILSNER, 4, 6);
            let container = new Container('pilsner', 5, beer);

            expect(container.checkTemperature()).to.have.contains('Temperature is in the required range');
        });
        it('checkTemperature() Container temperature should be lower Pilsner container tamperature', () => {
            let beer = new Beer(BeerName.PILSNER, 4, 6);
            let container = new Container('pilsner', 3, beer);
            expect(container.checkTemperature()).to.have.contains('Temperature is lower than the required');
        });
        it('checkTemperature() Container temperature should be higher Pilsner container tamperature', () => {
            let beer = new Beer(BeerName.PILSNER, 4, 6);
            let container = new Container('pilsner', 8, beer);
            expect(container.checkTemperature()).to.have.contains('Temperature is higher than the required');
        });
    });
});
