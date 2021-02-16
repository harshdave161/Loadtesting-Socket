# Load-testing-Socket With Artillery !!

## After Git Clone follow The Step's

    cd Loadtesting-socket

    npm install 

    npm start (this will start the server for chat application your can listen the app on Localhost:8080)

![image](https://user-images.githubusercontent.com/40320848/108028834-75becd80-7052-11eb-8a7c-0dadfba4fd0e.png) 

#### Open New Terminal And move To Load-test Folder

    cd load-test

There you Can Find Two Files in That Folder

### custom.js (Contains Dummy Data Generator)
![image](https://user-images.githubusercontent.com/40320848/108027209-ce409b80-704f-11eb-8828-d875a699c147.png)
### SocketTest.yaml (Contains Artillery code)
![image](https://user-images.githubusercontent.com/40320848/108027321-fd570d00-704f-11eb-97d0-06d95476dab4.png)



## Options used in SocketTesting.yaml to configure test as per requirement !!

- `target:- Used For Setting the Socket Address (ws/wss) Type !!`

- `Ensure:- Goes with to otpn max (fail if max response time exceeds 500ms) and maxErrorRate (fail if error rate exceeds 1%) !!`

- `transports:- Here We Set Protocol So Be Set ["websocket"] For testing Socket !!`

- `processor:- Here We Mention the File Name Where we Want tho load dynamic scenario !!`

- `phases:- in this Optn We Have duration (time test Run's in Milliseconds), arrivalRate (onStart the User we Have), rampTo (Will ramp Up User gradually), name (Name For That Phase) !!`

- `scenarios:- Here We Define The Flow For Test case !!`

- `engine:- we Set engine To 'socketio' !!`

- `flow:- Here we Set Whole Test Flow` 

- `function (load function from custom.js Which get's Dummy Data)`

- `emit (Inside this we have Channel (Socket Channel) and Data (data to send in that event(channel)) otpn)`

- `think (do nothing for 5 seconds, then disconnect) !!`

## Command to Start Test
    artillery run -o makeResult.json SocketTesting.yaml 

#### (-o option will write output for result into makeResult.json and save it to json Format)'

Once You Run test You Will Start Getting New User on localhost:8080 and The Load on socket will increase !!!

### Refer this link to know more about artillery `https://artillery.io/docs/guides/guides/ws-reference.html#Overview`
