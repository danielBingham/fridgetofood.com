# Fridge to Food 

Fridge to Food is a recipe sharing website to allow for easy searching of recipes collated and
curated from food blogs.

## Development

After pulling the github repo, you can run the development server by first running the MySql docker
container and then running nodemon and the react dev server.

From the root project directory, build the mysql docker container:

```
$ cd database
$ docker build -t food-sql .
```

Navigate back to the root directory and run the MySql docker container:

```
$ cd ..
$ docker run -d -p 3306:3306 --name food-sql food-sql
```

Run ``npm install`` to install project dependencies:

```
$ npm install
```

Run the development server for react and node to allow hot reloading while you develop:

```
$ npm run dev
```

When you're ready to test your project in a more production like context, kill the development
server and build the app docker container.

From the root project directory:

```
$ docker build -t food .
$ docker run -d -p 3000:3000 --name food food
```

When you're done, make sure to clean up the two docker containers:

```
$ docker stop food
$ docker stop food-sql
$ docker rm food
$ docker rm food-sql
```
