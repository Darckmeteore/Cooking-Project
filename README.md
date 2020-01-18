<p align="center"> <img src="logo.png" <p>

## Description :
This is a fullstack project. We have developed an ionic4 food application using a REST api with the Angular framework and a Mongo database. 

Basic functionalities of our IONIC application: 
- A totally secure login and registration system where the data is anonymized and encrypted.
- An administrator page that allows you to easily add recipes into the database.
- Users can see recipes proposed by the administrator but also unlock new recipes with a level system (level system not yet implemented).
- Users can post an opinion on the proposed recipes (not yrt implemented).

The application was created with the goal of cooking while having fun! We have created all kinds of recipes to satisfy a large number of people. Moreover in our application we are able to find the nutritional facts of the meals and the ingredients. 

## How to use it

### Prerequisite :
1. We use Mongodb (NoSql) as the database https://www.mongodb.com/ (link to install mongodb).
2. Download and install NodeJS (and npm) https://nodejs.org/en/.
3. If you want to make requests and be able to use the application you have to install CORS. Download and install CORS https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en (for google chrome users).

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
node app.js
``` 
5. Now to launch the application you have to go to the app directory and run the following command. (Don't forget to activate CORS in chrome)
```sh
ionic serve
``` 

### How to create meals and ingredients for the application
1. First you need to create a new ingredient
2. Go to http://localhost:3000/page/createingredient
3. Fill the three fields and click submit
4. Do the same thing as many as you want
5. Next you need to create a new meal
6. Go to http://localhost:3000/page/createmeal
7. Fill the name, fill the realisation (usualy used as follow "x minutes - n persons")
8. Hit add new fields for new ingredients
9. Choose the needed ingredients with their quantity (or volume)
10. Add as many steps as you need
11. Hit the submit button
12. You now as a new meal made of new ingredients

#### Have fun!
David, Clement, Antonin


#### contact us
- David PETIT : https://github.com/Debzou/ - david.petit@etu.univ-smb.fr
- Clement DECOOPMAN : https://github.com/NanoClem - clement.decoopman@etu.univ-smb.fr
- Antonin ROSA-MARTIN : https://github.com/MrWormsy - antonin.rosa-martin@etu.univ-smb.fr
