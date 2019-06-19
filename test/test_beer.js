const chai = require('chai');
const expect = chai.expect;;
const Beer = require('../app/models/beer.js');
const BeerName = require('../app/models/beerName');

describe('Beer Class Test cases', function () {

    describe("Test Beer with the right data", function () {
        let beer = new Beer(BeerName.PILSNER, 4.0, 6.0);       

        it('beer should be a Beer Class', () => {
            expect(beer).to.be.an.instanceof(Beer);
        });
        it('beer should have a name', () => {
            expect(beer).to.have.property('name', 'Pilsner');
        });
        it('getBeerName() should be Pilsner', () => {
            expect(beer.getBeerName()).to.be.equal('Pilsner');
        });
        it('beer should have a minTemperature', () => {
            expect(beer).to.have.property('minTemperature', 4);
        });
        it('beer should have a maxTemperature', () => {
            expect(beer).to.have.property('maxTemperature', 6);
        });

    });

    describe("Test Beer with the wrong data", function () {
        let beer = new Beer();       

        it('beer should be a Beer Class', () => {
            expect(beer).to.be.an.instanceof(Beer);
        });
        it('beer should not have a name', () => {
            expect(beer).to.have.property('name', undefined);
        });
        it('beer should not have a minTemperature', () => {
            expect(beer).to.have.property('minTemperature', undefined);
        });
        it('beer should not have a maxTemperature', () => {
            expect(beer).to.have.property('maxTemperature', undefined);
        });

    });


});
