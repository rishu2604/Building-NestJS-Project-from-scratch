import { Controller, Get } from "@nestjs/common";

// In this case, this decorator is telling Nest that we are trying to create a class that is going to serve as a controller inside of our application.
// It is a class that is going to handle and route incoming requests.
@Controller('/app')
export class AppController{
    @Get('/')
    getRootRouter(){
        return 'hi there';
    }

    @Get('/bye')
    getByeThere(){
        return 'bye there';
    }
}