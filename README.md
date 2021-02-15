Load-testing-Socket With Artillery !!

After Git Clone follow The Step's

1):- cd into Loadtesting-socket 👇

2):- npm install 📍

3):- npm start 🚀(this will start the server for chat application your can listen the app on Localhost:8080) 

After the Server is up And Running You can move to load-test folder In Which We Have Main File For Socket testing Which is written in yaml,that Is SocketTesting.yml 
There We Have Target Which is Set to ws://localhost:8080 which is an web socket address and where we will hit Your Request For Socket testing. The Chat App Which We Started above Will Handle All Request Which We Will be hitting that server which is ♦local♦ for now (running on localmachine♥)

We Also Have One More File custom.js which is used to create fake data (it uses an npm package name faker (Sounds cool😎 Should try To Create Dummy Data)) !! We load data from custom.js and send that dummy data to socket channels and create virtual users using artillery

Options used in SocketTesting.yaml to configure test 💎 as per requirement !!

1):- target:- Used For Setting the Socket Address (ws/wss) Type !!

2):- Ensure:- Goes with to otpn max (fail if max response time exceeds 500ms) and maxErrorRate (fail if error rate exceeds 1%) !!

3:- transports:- Here We Set Protocol So Be Set ["websocket"] For testing Socket !!

4:- processor:- Here We Mention the File Name Where we Want tho load dynamic scenario !!

5:- phases:- in this Optn We Have duration (time test Run's in Milliseconds), arrivalRate (onStart the User we Have), rampTo (Will ramp Up User gradually), name (Name For That Phase) !!

6:- scenarios:- Here We Define The Flow For Test case !!

7:- engine:- we Set engine To 'socketio' !!

8:- flow:- Here we Set Whole Flow What and which channel is hit While testing, we have three option function (load function from custom.js Which get's Dummy Data), emit (Inside this we have Channel (Socket Channel) and Data (data to send in that event(channel)) otpn), think (do nothing for 5 seconds, then disconnect) !!

Now after we understand all this details we can run artillery to start testing socket
Command for that is artillery run -o <filename> where you want output <file Name> where it should load yaml !!

=> artillery run -o makeResult.json SocketTesting.yaml 

(-o optn will write output for result into makeResult.json and save it to json Format)

Once You Run test You Will Start Getting New User on localhost:8080 and Load on socket will increase !!

Refer this link to know more about artillery https://artillery.io/docs/guides/guides/ws-reference.html#Overview
