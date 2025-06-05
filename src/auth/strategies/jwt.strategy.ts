import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { JwtPayload } from "../interface/jwt-payload.interface";
import { ConfigService } from '@nestjs/config';
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UsersService } from "src/users/users.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    
    constructor(
        //UsuarioRepository o db
        configService: ConfigService,
        private readonly userService: UsersService
    ) {
        super({
            secretOrKey: configService.get('JWT_SECRET') || 'default',
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
        })
    }

    async validate(payload: JwtPayload) {
        const { id } = payload;

        const user = await this.userService.findOne(+id);
                
        // Validar usuario
        
        return user;
    }
}