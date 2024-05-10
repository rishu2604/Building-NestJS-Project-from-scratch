# NestJS

Well, usually whenever we create a Nest application, we make use of a tool called the _NEST CLI_.
This is a tool that we use from our terminal to generate a new project and run it.

_But let's create a Nest project from scratch._

### 1. Install these dependencies
`npm install @nestjs/common@7.6.17 @nestjs/core@7.6.17 @nestjs/platform-express@7.6.17 reflect-metadata@0.1.13 typescript@4.3.2`


`nestjs/common`: Contains vast majority of functions, classes etc. that we need from Nest

`nestjs/platform-express`: Nest uses ExpressJS for handling HTTP requests.
So internally, Nest itself does not handle incoming requests. Instead, Nest relies upon some outside implementation to handle HTTP requests for it.

We have mainly two types of HTTP implementation server:
1. Express: _the most popular one_
2. Fastify

`reflect-metadata`: helps make decorators work. 


### 2. Set up Typescript compiler settings
```
    {
        "compilerOptions": {
            "module": "commonjs",
            "target": "es2017",
            "experimentalDecorators": true,
            "emitDecoratorMetadata": true,
        }
    }
```


### 3. Create a Nest module and controller
Nest has tools that helps us to write the following:
- `Pipe`: validate data contained in the request.
- `Guard`: Make sure the user is authenticated.
- `Controller`: Route the request to a particular function.
- `Service`: Run some business logic.
- `Repository`: Access a database.


#### Decorator
`@Controller()` , `@Get()` , `@Module()`
- In our case, this decorator is telling Nest that we are trying to create a class that is going to serve as a controller inside of our application.
- It is a class that is going to handle and route incoming requests.
- We are going to use controller decorator to control some high level routing rules that are going to apply to all of the different route handlers that we set up inside this controller.
- _Example:_ `@Controller('/app')`

#### Get
- It is an another helper from the common library.
- This allows us to create route handlers that respond to incoming requests that have an HTTP method of Get.
- Now, in theory, if someone makes a request to our application, it will get routed to this method. We are going to return the response and nest is going to automatically take that and send it back to whoever made the request.

#### Module
- A module is going to wrap up a controller.
- Every application we create must have one module inside of it.
```
        @Module({
            controllers: [AppController]
        })
        class AppModule {}
```
- To create a module, we're going to create another class and apply a decorator to it.
- When we make use of the module decorator, we are expected to pass a configuration option or object to it.
- It is going to find all the controllers that are listed right here in the controllers array and it's going to automatically create an instance of all of our different controller classes.

### 4. Start the app!
Last thing we have to do is add in a function that is going to run anytime we start up our application.
