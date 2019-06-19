# PragmaBrewery Code Challenge

### About
The solution was developed by Abel Chavanga using Nodejs to fulfil the requirements of the PragmaTeam recruitment process.

I experiment with robotjs and the code is working fine but was not happy with how it was working hence I had to comment it out. I used the console screen to output the results of project when running it.

### Prerequisites
Make sure you have [Node](https://nodejs.org/en/download/) installed on you pc. 

I have used two producation dependencies for the project namely:
- [Chalk](https://www.npmjs.com/package/chalk). Used to add some color on my table output so that is easy to see where the temperature issues are.
- [cli-table3](https://www.npmjs.com/package/cli-table3). Used to show my temperetaure output on a nice table.

I also used development dependencies namely
- [chai](https://www.chaijs.com/guide/installation/#nodejs). Used for unit testing.
- [istanbul](https://www.npmjs.com/package/istanbul). Used for code coverage report.
- [mocha](https://mochajs.org/). Used for unit testing.
- [robotjs](https://www.npmjs.com/package/robotjs). Current not used in this project as I commented out the code.
- [sinon](https://www.npmjs.com/package/sinon). Use the the robojs testing code.

### How to run
Clone this github repository ($ git clone https://github.com/achavanga/brewery-challenge.git ) to you local machine and run command(s):
```
npm install
```
After the above script is completed, please run the script below if you want to check code coverage/ unit testing report. My approach was to make sure that I cover most of the possible scenarios that can happen in my application. The test helped me to refactor and fix some validation issues in method checkTemperature() in Container class that can cause exceptions if handled incorrectly. The instanbul coverage report also helps to show if all the line are covered. You can also view this report for the project folder **/coverage/lcov-report/index.html** .
```
npm run test
```
To run the application use the command below:
```
npm run start
```
The application will ask Shane to enter the number of times to show the notification on screen.The following question will be shown on the screen : <br/>
 ***How many notification do you want to get after every second?*** <br/>
Once Shane have entered the number, the application will show the results in a table for the Beer Container temperature. The ones highlighted in Red show that the temperature is either higher or lower that required. The screen will refresh after every 2 seconds.

### Assumption
I made the following assumption:
1. A container will only have one type of beer.
2. The container temperatue checks should be done every 2 minutes.
3. Shane can determine the number of times he wants to get the notifications. I real live scenario the system should always run to check temperature.
4. I assume in this project that we only have 6 containers.

### Highlights of my logic/code writing style?
I was focusing on making sure that :
1. I write code which was easy to follow.
2. I archive 100% test coverage and that functionality is tested.
3. With test unit testing I was able to refactor my code without affecting function and my testing was not breaking.
4. I applied Clean code principles in making sure that my methods are smaller.
5. I also made sure the the result are well presented to Shane by adding a table with colours.
6. I tried by all means to investigate better ways of writting a simple application that archives the requirements.


### Questions to clarify
I had the following question during development:
1. Can a container hold different types of beer?. What happens if we have different beers in a container?
Answer. I think the container should only hold one type of beer for ease of alerting the driver.
2. Can rasberry pi be used to monitor the temperature of the container as in this scenario I was randomly generating the temperature.
Answer. I will use a divice like rasberry pi to monitor and alert to the driver as it has some build it temperture sensors.
3. How did we determine the different beer temperature values?
Answer. This is be supplied by the beer manufacturer.
4. What happen if the temeprature is out of range? 
Answer. We can a function to auto adjust once its out of range.
5. Can Shane change the value of beer recommended temperetaure?
Answer. No, a drive shouldn't be allowed to change the temperature as the beer temperature is determine by the manufacture.
6. How many contaier can a truck carry?
7. Is the truck container temperature monitor by someone at the office as well?
Answer. This should be in order to monitor if we have issue with the containers.
8. How will Shane identify the container if there is an issue.
Answer. Put so digfital tag on each container.
9. How will Shane get the notification?
Answer. Shane can use a monitor/tablet on the truck that will show him all the alerts.

### Features to include into version 2.0
1. Using Rest API that can alert the driver application console and the Controller at the head office.
2. Introduce Rasberry PI to monitor the Container temperature and to publish the results to the rest services.
3. Using the same Rest API to develop a mobile application so that anyone within the company can get the alerts.
4. Be able to coonect multiple devices.
5. Add a Database layer to store the container data.
6. Use the database for analysing data it to determine if there are issue with the container.
7. To build some report usinf database data. 
8. Complete the RobotJS testing automation so that a can perform test and random.
9. Add the project into the CI/CD pipeline so that each time we change code test are executed and code quality is checked and if everything is fine then deploy to testing environment.
10. Add code review before merging tha code into master/development branch.

### Conclusion

The challange gave me a opportunity to research more on components that I can use to improve on my Nodejs skills.