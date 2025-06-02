import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class ExecuteSeedDto {
    @ApiProperty()
    @IsString()
    password: string;
}