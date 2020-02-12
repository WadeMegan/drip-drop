# Foodies on Foot

## Live App

A live version of the app can be accessed [here]().

To demo Drip Drop, log in with:
* Email: test@gmail.com
* Password: password

## Summary

Drip Drop is a web application that reminds users to water their houseplants. Users can select the plants they have from a list of common houseplants. Each day, Drip Drop will check to see if any of the user's plants will need to be watered. If so, Drip Drop will send the user a sms message as a reminder. The goal of Drip Drop is to make it easier for users to remember when they should be watering their plants, in order to prevent fewer houseplant deaths caused by over or under watering.

### Landing Page: 
![landing page mobile](https://i.imgur.com/wYWEp4G.png)

### Sign In Page: 
![sign in page mobile](https://i.imgur.com/Rw7ESe4.png)

### User's Plants Page: 
![user's page mobile](https://i.imgur.com/7ZAaSh5.png)

### The Sms Messages
![sms](https://i.imgur.com/TG2s96F.png)

## Technologies Used

### Front End: 
* ReactJS
* CSS

### Back End: 
* Node.js
* Express
* PostgreSQL

### APIs:
* Twilio

## Associated Repositories

This is the repository for Drip Drop's client. The repository for Drip Drop's server can be found [here](https://github.com/WadeMegan/drip-drop-api). A third repository, which holds the files responsible for sending sms messages, can be found [here](https://github.com/WadeMegan/drip-drop-send-sms). These repositories are outlined below: 

### [drip-drop-api](https://github.com/WadeMegan/drip-drop-api)



### [drip-drop-send-sms](https://github.com/WadeMegan/drip-drop-send-sms)

drip-drop-send-sms is built using Node. The file send-sms.js, uses the node-fetch package to make a GET request to the Drip Drop API sms endpoint. It then iterates through the sms list to check if the reminder date is equal to the current date. If so, it uses the Twilio API to send a reminder message to the user. If a text is sent, the reminder date is updated so that the user will recieve another message when the plant needs to be watered again. drip-drop-send-sms is deployed on Heroku and using Heroku's built in scheduler, send-sms.js is run once per day every day.


