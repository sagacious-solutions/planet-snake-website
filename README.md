<h1>Planet Snake Web Interface</h1>

This is a React.JS front end to connect to <a href="https://github.com/sagacious-solutions/Planet-Snake-HardwareAPI">Planet Snake Hardware API.</a> The snake state page is fed from PSQL via <a href="https://github.com/sagacious-solutions/planet-snake-database">Planet Snake Database<a> which is currently running on the raspberry pi as well.

<img src="./documentation/images/sunMoonSwitch.gif" width="100%" />
This is the main landing page. The lights in the terrarium can be switched between Day and Night mode by hitting the sun and moon ying yang. It will rotate to show the current state of the terrarium when clicked. The right hand side has the current temperatures in the controlled areas as well as the ability to set the target temperature for those zones.
<img src="./documentation/images/spookyMode.gif" width="100%" />
This animation shows the projects Alexa integration. The dial on the page as well as the lighting and fogger is triggered by singing a line a line from A Nightmare Before Christmas to any available Alexa device connected to my account. This was done using a <a href="https://hubitat.com/">Hubitat Elevation.</a> Alexa tells the hubitat to trigger a virtual switch which then sends a get request to the hardware API. The website state updates once a second to pick up the flag changing on the hardware API. Depending on freetime, this wil be refactored into an <a href="https://developer.amazon.com/en-US/alexa/alexa-skills-kit">Alexa skill</a> to trigger lighting changes, increase humidity and get the current status of the Terrarium without the need to open the dashboard.

<img src="./documentation/images/runTimeGraph.png" width="100%" />
This was an example graph to show data from the database. The data is currently hardcoded while I build the database
<img src="./documentation/images/temperatureGraphs.png" width="100%" />
This was an another example graph to show data from the database. The data is currently hardcoded while I build the database
