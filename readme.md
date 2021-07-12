## About The Project
This is a simple API with json web token login, this project is for compfest selection. This project is about hospital that has a normal user (patient) and administrator (admin). User can register an account and login if they have an account, the password database is hash so it is secure. User can apply and cancel for an appointment, a user also can see all of his appointment. Admin can update, delete, and create a new doctor appointment. Admin can also see list of registered patient in an appointment.


## Built With:  
* [Express Js](https://expressjs.com)

## Getting Started
To get node server running locally:
### Prerequisites  
* [node](https://nodejs.org/en/download/)

### Installation
1. Clone the repo
```sh
git clone https://github.com/kucingapi/Hospital   
```
2. Install NPM packages
```sh
npm install
```
3. Create .env file that has a key uri and TOKEN_SECRET example:
```
uri='mongodb+srv://user:asdfjlsdjfkaklsj.aklfjdas.mongodb.net/database?'
TOKEN_SECRET='lkasdjfdalskjf'
```
   in the `~/` directory, the TOKEN_SECRET could be random, the uri has to be a real uri for mongodb database

### Running the server
1. Run the server.js
```sh
npm start
```

## Code Overview
### Dependencies
* [Express Js](https://expressjs.com) - The server for handling and routing HTTP requests
* [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) - For generating JWTs used by authentication
* [mongoose](https://moongosejs.com) - For modeling and mapping MongoDB data to javascript 
* [bcryptjs](https://github.com/dcodeIO/bcrypt.js) - For encrypt and decrypt password to the database
* [@hapi/joi](https://github.com/sideway/joi) - For validating request body
* [nodemon](https://nodemon.io/) - For realoading server (development environtment)

### Application Structure
* `server.js` - The entry point to our application. This file define express js server and connect to mongodb using mongoose.
* `validation.js` - validating the request body using joi 
* `models/` - Schema for mongodb that is using mongoose
* `routes/` - the routes of the api and handler for each routes
### Api endpoint
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/cf70c5dbc5fcf086b37f?action=collection%2Fimport)
### Default Url
localhost:3000
