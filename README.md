# Tasks NodeMongoose API
[![Discord](https://img.shields.io/discord/463752820026376202.svg?label=&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2)](https://discord.gg/mFUY4sT)

This project is a REST API for managmenent Tasks. Develped using:
* Nodejs
* Express
* Mongodb
* Mongoose
* Babel (ES6+)

The idea is to use this example in frontend applications.

# Endpoints
GET	api/tasks	get all Tasks
GET	api/tasks/:id	get Task by id
POST	api/tasks	add new Task
PUT	api/tasks/:id	update Task by id
DELETE	api/tutorials/:id	remove Task by id
DELETE	api/tutorials	remove all Tasks
GET	api/tutorials/published	find all published Tasks
GET	api/tutorials?title=[kw]	find all Tasks which title contains 'kw'

# Run the Project
In development
```
npm run dev
```