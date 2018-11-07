# RESTIFY_CUSTOMER_API

### restify - 
A Node.js web service framework for RESTful web services.
very similar to how Express work. 
Just little ddifferent syntax. All mongoose codes are similar.


### Mongoose
mongodb object modeling for node.js
to create database models

### mLab
to mongodb deployment


# Steps
1. npm init -y //creating package.json, this include all dependencies//
2. npm i restify restify-errors mongoose mongoose-timestamp <br />
    retify-errors ==> handles errors elegently
3. npm i -D nodemon // -D for add as a developer dependency <br/>
                    // nodemon --> no need to restart everytime.
4. add scripts to package.json file --> start and dev
5. add index.js and config.js files to project
6. in config file --> set up environment variables (an object)
7. to create db, use mLab (hosts mongoDB databases)
8. bring resources to index.js file