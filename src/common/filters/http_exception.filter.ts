import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus, Logger } from "@nestjs/common";
import { Response, Request } from "express";
import { stringify } from "querystring";

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
    private readonly logger = new Logger(AllExceptionsFilter.name)

    catch(exception: unknown, host: ArgumentsHost): void{
        const ctx = host.switchToHttp()
        const response = ctx.getResponse<Response>()
        const request = ctx.getRequest<Request>()

        let status: number
        let message: string | object
        let error: string

        if(exception instanceof HttpException){
            status = exception.getStatus()
            const errorResponse = exception.getResponse()

            if(typeof errorResponse === 'string'){
                message = errorResponse
                error = exception.constructor.name
            }else{
                message = (errorResponse as any).message || errorResponse
                error = (errorResponse as any).error || exception.constructor.name
            }
        }else{
            status = HttpStatus.INTERNAL_SERVER_ERROR
            message = 'Internal server error'
            error = 'internal server error'

            this.logger.error(
                `Not controled error: ${exception}`,
                exception instanceof Error ? exception.stack : undefined
            )
        }

        const errorResponse ={
            statusCode: status,
            thimestamp: new Date().toISOString(),
            path: request.url,
            method: request.method,
            error: error,
            message: message
        }

        this.logger.error(
            `${request.method} ${request.url} - ${status} - ${JSON.stringify(message)}`
        )

        response.status(status).json(errorResponse)
    }
}