const Table = require('cli-table3');
const chai = require('chai');
const expect = chai.expect;
const controller = require('../app/controllers/controller');


describe('Controller Class Test cases', function () {

    describe("Validate getContainerTemperatureReport function", function () {

        it('getContainerTemperatureReport should be a Table Class', () => {
            expect(controller.getContainerTemperatureReport()).instanceOf(Table);
        });

        it('getContainerTemperatureReport() should have a length of 6 item', function () {
            expect(controller.getContainerTemperatureReport()).to.have.length(6);
        });

        it('getContainerTemperatureReport() should not be empty', () => {
            expect(controller.getContainerTemperatureReport()).to.not.be.empty;
        });
    });

    describe("Test all Beer name are returned", function () {
        it('getContainerTemperatureReport() result should have beer name called Pilsner', () => {
            expect(controller.getContainerTemperatureReport().toString()).to.contains("Pilsner");
        });

        it('getContainerTemperatureReport() result should have beer name called Pale Ale', () => {
            expect(controller.getContainerTemperatureReport().toString()).to.contains("Pale Ale");
        });

        it('getContainerTemperatureReport() result should have beer name called IPA', () => {
            expect(controller.getContainerTemperatureReport().toString()).to.contains("IPA");
        });

        it('getContainerTemperatureReport() result should have beer name called Lager', () => {
            expect(controller.getContainerTemperatureReport().toString()).to.contains("Lager");
        });

        it('getContainerTemperatureReport() result should have beer name called Wheat beer', () => {
            expect(controller.getContainerTemperatureReport().toString()).to.contains("Wheat beer");
        });

        it('getContainerTemperatureReport() result should have beer name called Stout', () => {
            expect(controller.getContainerTemperatureReport().toString()).to.contains("Stout");
        });
    });
    describe("Test if the Table has got correct data", function () {
        it('getContainerTemperatureReport() table result should have header Container Temperature', () => {
            expect(controller.getContainerTemperatureReport().toString()).to.contains("Container Temperature");
        });
        it('getContainerTemperatureReport() table result should have Stout beer tamperature of (6°C - 8°C)', () => {
            expect(controller.getContainerTemperatureReport().toString()).to.contains("(6°C - 8°C)");
        });
        it('getContainerTemperatureReport() table result should have all beer names', () => {
            const bearName = [];
            controller.getContainerTemperatureReport().forEach(function (value) {
                bearName.push(value[0]);
            });
            expect(bearName.toString()).to.equal('Pilsner,IPA,Lager,Stout,Wheat beer,Pale Ale');  
        });
    });
});
