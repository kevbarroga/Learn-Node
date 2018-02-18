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
- JavasScript asynchronous by default
- Promise is like an IOU note
- Async Await does away with Promise chaining and catch
- Composition - function wrapper to catch errors
- object destructuring

### 12 Flash Messages
- pre= h.dump(locals) - useful to dump JSON to page. pl;ace in layout.pug file, in block messages.

### 13 Querying our Database for Stores
- mongo db by default will assign a unique id to every document that stored in the database

### 14 Creating an Editing Flow for Stores
- (:<value>) in the router route, ex: `router.get('/stores/:id/edit', catchErrors(storeController.editStore));` :id is like a wildcard variable that is accessible on the request object called params

## Geolocation

### 15 Saving Lat and Lng for each store
- create schema for geolocation ex. coordinates and address

### 16 Geocoding Data with Google Maps
- find lng and lat with google maps api
- lng and lat is discovered via reveres lookup from address

### 17 Quick Data Visualization Tip
- update storeController.js to set the location data to be a point whenever the store is edited

## File Handling and Image Resizing

### 18 Uploading and Resizing Images with Middleware
- Add ability to upload a photo when creating a new store
  - modify form to accept file uploads
  - add middleware to upload the file and resize before creating store
- change form to handle multipart type data. set enctype="multipart/form-data"
- file mimetype describes the type of the file, file extension is not always true.

### 19 Routing and Templating Single Stores
- complete single store layout
- setup new route in index.js
- add controller for new route in storeController.js
- render 'store' template with params

## Custom Quereis and Hooks

### 20 Using Pre-Save hooks to make Unique Slugs
- use regex to do a fuzzy search to find stores with the same name

### 21 Custom Mongo DB Aggregations
- creating tags page
  - list of possible tags with the number of stores related to tag
  - filter for all stores with specific tag
- offload aggregation from node to mongo db because DB's specialize in preforming complex queries. Save node from using too much resources to do aggregation
- aggregate function similar to reduce function to JavaScript

### 22 Multiple Query Promises with Async:Await
- Promise.all() used to await multiple promises

## User Accounts and Authentication

### 23 Creating User Accounts


### 24 Saving Registered Users to the Database
- update start.js to import User.js

### 25 VIrtual Fields, Login:Logout middleware and Protecting Routes


### 26 Creating a User Account Edit Screen


### 27 Password Reset Flow

## Advanced - Email and Permissions

### 28 Sending email with Nodejs
- create account with [mailtrap.io]
- create transport interface

[mailtrap.io]: https://mailtrap.io/

### 29 Locking down our application with User Permissions
- create author property to link users and stores
- .populate('<property>') to fill in document info

## Ajax REST API 1

### 30 Loading Sample Data

### 31 JSON endpoints and creating MongoDB Indexes
- indexes makes queries fast

### 32 Creating an Ajax Search Interface

## Ajax REST API 2

### 33 Creating a Geospatial Ajax Endpoint

### 34 Plottting Stres on a Custom Google Map

## Ajax REST API 3

### 35 Pushing User Data to our API

### 36 Displaying out Hearted Stores