<p align="center"> <img src="logo.jpg" <p>

## Description :
This is a project in fullstack. We developed an ionic4 food application using REST api with Angular and Mongo database. 
basic functionality of our IONIC application: 
- A totally secure login and registration system where the data is anonymized and encrypted.
- An administrator page that allows you to easily add recipes from our Mongo database.
- Users can see recipes proposed by the administrator but also unlock new recipes with a level system.
- Users can post an opinion on the proposed recipes.

The application was created with the goal of cooking while having fun! We have created all kinds of recipes to satisfy a large number of people. Moreover in our application we find the nutritional facts of the food or dishes. 

## how to use it

### Prerequisite :
1. We use Mongodb (NoSql) as database https://www.mongodb.com/ (link to install mongodb).
2. Download and install NodeJS https://nodejs.org/en/.
3. If you want to make requests and be able to use the application form you have to install. Download and install CORS https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en (for google chrome users).

### To run the app :
1. Clone the git
2. Go to the folder to execute the following command to install all packages
```sh
npm install
```
3. Run the following to inisialize MongoDB.
```sh
mkdir data
mongod --dbpath ./data
```
4. Run the following commands to launch the API serve.
```sh
nodemon app.js
``` 
5. Now to launch the application you have to go to the app directory and run the command. (Don't forget to activate CORS in chrome)
```sh
ionic serve
``` 

 

#### Have fun!
David, Clement, Antonin


#### contact us
- David PETIT : david.petit@etu.univ-smb.fr
- Clement DECOOPMAN : clement.decoopman@etu.univ-smb.fr
- Antonin ROSA-MARTIN : antonin.martin.rosa@etu.univ-smb.fr
