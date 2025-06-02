import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import * as bcrypt from 'bcrypt';
import { CreateUserDto, LoginUserDto } from './dto';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interface';

@Injectable()
export class AuthService {

  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService
  ) {}
  create(createAuthDto: CreateAuthDto) {

    //obtener la contraseña enviada por el usuario y encriptarla
    //const passhashed = bcrypt.hashSync(createUserDto.password, +process.env.SALT); // ! Descomentar configurar el .env
    // Reemplazar la contraseña en texto plano por la encritada al crear el usuario
    return 'This action adds a new auth';
  }

  // ? Login
  async login(loginUserDto: LoginUserDto) {
    const { email, password } = loginUserDto;
    const user = await this.userService.findByEmail(email);
    //obtener contraseña encriptada en db
    if (!bcrypt.compareSync(password, user.contrasena!))
      throw new UnauthorizedException('Credentials are not valid');

      return {
      ...user,
      token: this.getJwtToken({id: `${user.id}`})
    };
  }

  private getJwtToken( payload: JwtPayload) {
    const token = this.jwtService.sign(payload);
    return token;
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
