const controller = require('./app/controllers/controller');
const readline = require('readline');
const chalk = require('chalk');

const readlineInterface = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
})

var count = 0;


function askForInput() {
	//Initial command input readline
	readlineInterface.question("How many notification do you want to get after every two seconds? ", function (answer) {
		if (isNaN(answer)) {
			closeWithErrors(`Please try again, your input of { ${answer} } is not a valid number`);
		} else if (answer < 0) {
			closeWithErrors(`Please try again and enter a value which is greater than zero`);
		} else if (answer > 0) {
			temperatureTimer(answer);
		}
	});
}
askForInput();

//write error message to console
function closeWithErrors(errorMessage) {
	console.log(chalk.red(errorMessage));
	readlineInterface.close();
}
//Set Timmer to loop through after every 2sec for X number of time
function temperatureTimer(intervals) {

	var intervalObject = setInterval(function () {
		count++;
		readline.cursorTo(process.stdout, 0, 0)
		readline.clearScreenDown(process.stdout)
		console.log('Temperature Monitoring : \n' + controller.getContainerTemperatureReport().toString());
		if (count == intervals) {
			clearInterval(intervalObject);
			readlineInterface.close();
		}
	}, 2000);
}