<center>![alt text](logo.jpg)</center>

## Description :
This is a project in fullstack. We developed an ionic4 food application using REST api callbacks with Angular and Mongo database. 
basic functionality of our IONIC application: 
- A totally secure login and registration system where the data is anonymized and encrypted.
- An administrator page that allows you to easily add recipes from our Mongo database.
- Users can see recipes proposed by the administrator but also unlock new recipes with a level system
- Users can post an opinion on the proposed recipes



## Format de nos données
### Format d'une recette :

id : int

name : string

ingredients : list of ids

realisation : string

steps : list of Strings

level : int

exp : int

picture : this is like meals/id.png

### Format d'un ingredient

id : int

name : string

benefits : string

things_to_know : string

picture : this is like ingredient/id.png
