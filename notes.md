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
res.render - render out template
pug templating lanuage use to called jade
templates goes in views folder

### 6 Template Helpers
helper file helper.js
helper library or data that is needed in every template
middleware

### 7 Controllers and MVC Pattern

### 8 Middleware and Error Handling