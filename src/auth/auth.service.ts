import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import * as bcrypt from 'bcrypt';
import { CreateUserDto, LoginUserDto } from './dto';

@Injectable()
export class AuthService {
  create(createUserDto: CreateUserDto) {

    //obtener la contraseña enviada por el usuario y encriptarla
    //const passhashed = bcrypt.hashSync(createUserDto.password, +process.env.SALT); // ! Descomentar configurar el .env
    // Reemplazar la contraseña en texto plano por la encritada al crear el usuario
    return 'This action adds a new auth';
  }

  // ? Login
  login(loginUserDto: LoginUserDto) {
    const { email, password } = loginUserDto;
    //obtener contraseña encriptada en db

    if (!bcrypt.compareSync(password, '[contraseña obtenida de db]'))
      throw new UnauthorizedException('Credentials are not valid');

    return;
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
