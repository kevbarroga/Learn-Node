# Learn Node Notes

## Introduction and Setup

### 1 Getting Setup
- Download and install [Node] <= v7.6.x
  - Introduced async/await which makes writing node code way easier
- Install npm dependencies
- Install [Jade] to view pug files, a template engine used to generate html files
- Install [Babel] for JavaScript

### 2 Setting up Mongo DB
- Create [mLab]/[Mongo DB Atlas] account to use as Database as a Service (DBaaS) or
  install and setup [local instance of Mongo DB]
- Setup Mongo connection string in `variables.env`

### 3 Starter Files and Environmental Variables
- Build app on node framework [Express]
- Environmental variables used to store sensitive information(usernames, passwords, important settings, keys strings, and tokens)

[Node]: http://www.hostingadvice.com/how-to/install-nodejs-ubuntu-14-04/#node-version-manager
[Jade]: https://packagecontrol.io/packages/Jade
[Babel]: https://packagecontrol.io/packages/Babel
[mLab]: https://mlab.com/
[Mongo DB Atlas]: https://www.mongodb.com/cloud/atlas
[local instance of Mongo DB]: https://www.digitalocean.com/community/tutorials/how-to-install-and-secure-mongodb-on-ubuntu-16-04
[Express]: https://expressjs.com/

## Core Concepts

### 4 Routing
- (req)uest - has all information
- (res)ponse - has all methods for sending data back
- res.query - get query parameters
- res.params - used to access params in url

More information on [req and res methods]

[req and res methods]: https://expressjs.com/en/4x/api.html

### 5 Templating
- res.render - render out template
- pug templating lanuage use to called jade
- templates goes in views folder

### 6 Template Helpers
- helper file helper.js
- helper library or data that is needed in every template
- middleware

### 7 Controllers and MVC Pattern
**M** : Model => Interacts with fetching data from database
**V** : View => Templates(pug files)
**C** : Controller => Gets data and put it into a template

### 8 Middleware and Error Handling
- Middleware is fundamental to express, almost how all express plugins work.
  - request is data that comes in
  - response is data that comes out

Work done between the request and response is handled with middleware.
Ex:
- call db
- data normalization
- uploading of a file

## Datebase Storage

### 9 Creating our Store Model
- Keep MongoDB strict. Need to define models first.
- Mongoose package used to interface with MongoDB
- slug package used to help make url friendly slugs
- *Do all data normalization as close to model as possible*
- slug field is auto generated

### 10 Saving Stores and using Mixins
- Mixin sort of like a function in JavaScript
- Pass mixin some data and it returns some HTML to be displayed onto the page
- interpolation => #{<var>}
- syntax equals => tag= var

## Control Flow

### 11 Using Async Await
### 12 Flash Messages
### 13 Querying our Database for Stores
### 14 Creating an Editing Flow for Stores