<p align="center"> <img src="logo.jpg" <p>

## Description :
This is a project in fullstack. We developed an ionic4 food application using REST api callbacks with Angular and Mongo database. 
basic functionality of our IONIC application: 
- A totally secure login and registration system where the data is anonymized and encrypted.
- An administrator page that allows you to easily add recipes from our Mongo database.
- Users can see recipes proposed by the administrator but also unlock new recipes with a level system
- Users can post an opinion on the proposed recipes

## how to use it

### Prerequisite :
1. We use Mongodb (NoSql) as database https://www.mongodb.com/ (link to install mongodb).
2. Download and install NodeJS https://nodejs.org/en/.
3. if you want to make requests and be able to use the application form you have to install. Download and install CORS https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en (to let your navigator acces to your DB).

### To run the app :
1. Clone the git
2. Go to the folder to execute the following command to install all packages
```sh
npm install
```
3. Run the following to inisialize MongoDB
```sh
mkdir data
mongod --dbpath ./data
```

## Our data format : 
### recipies :

id : int

name : string

ingredients : list of ids

realisation : string

steps : list of Strings

level : int

exp : int

picture : this is like meals/id.png

### ingredient :

id : int

name : string

benefits : string

things_to_know : string

picture : this is like ingredient/id.png
