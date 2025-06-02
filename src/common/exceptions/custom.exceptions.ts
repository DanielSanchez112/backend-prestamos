import { HttpException, HttpStatus } from "@nestjs/common";

export class BusinessLogicException extends HttpException{
    constructor(message: string){
        super(message, HttpStatus.BAD_REQUEST)
    }
}

export class ResourceNotFoundException extends HttpException{
    constructor(resource: string, id?: string | number){
        const message = id
          ? `${resource} id: ${id} not found`
          : `${resource} not found`
        super(message, HttpStatus.NOT_FOUND)
    }
}

export class ValidationException extends HttpException{
    constructor(message: string){
        super(message, HttpStatus.UNPROCESSABLE_ENTITY)
    }
}