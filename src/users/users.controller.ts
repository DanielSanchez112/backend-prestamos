import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags, ApiResponse, ApiCreatedResponse, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
  @ApiResponse({ status: 403, description: 'The record has been forbbiden.'})
  @ApiResponse({ status: 409, description: 'Conflict of existence.'})
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: UpdateUserDto,
  })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'The records have been successfully retrieved.'})
  @ApiResponse({ status: 404, description: 'No records found.'})
  @ApiResponse({ status: 403, description: 'The records have been forbbiden.'})
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'The record has been successfully retrieved.'})
  @ApiResponse({ status: 404, description: 'No record found.'})
  @ApiResponse({ status: 403, description: 'The record has been forbbiden.'})
  @UseGuards(AuthGuard('jwt'))
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  @ApiResponse({ status: 200, description: 'The record has been successfully updated.'})
  @ApiResponse({ status: 404, description: 'No record found.'})
  @ApiResponse({ status: 403, description: 'The record has been forbbiden.'})
  @UseGuards(AuthGuard('jwt'))
  update(@Param('id',ParseIntPipe) id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 204, description: 'The record has been successfully deleted.'})
  @ApiResponse({ status: 404, description: 'No record found.'})
  @ApiResponse({ status: 403, description: 'The record has been forbbiden.'})
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.usersService.remove(+id);
  }

  @Patch(':id/activateStatus')
  @ApiResponse({ status: 200, description: 'The status has been successfully updated to active.'})
  @ApiResponse({ status: 404, description: 'No record found.'})
  @ApiResponse({ status: 403, description: 'The record has been forbbiden.'})
  @UseGuards(AuthGuard('jwt'))
  updateStatusUp(@Param('id', ParseIntPipe) id: string){
    return this.usersService.chageStatusTrue(+id)
  }

  @Patch(':id/deactivateStatus')
  @ApiResponse({ status: 200, description: 'The status has been successfully updated to inactive.'})
  @ApiResponse({ status: 404, description: 'No record found.'})
  @ApiResponse({ status: 403, description: 'The record has been forbbiden.'})
  @UseGuards(AuthGuard('jwt'))
  updateStatusDown(@Param('id', ParseIntPipe) id: string){
    return this.usersService.chageStatusFalse(+id)
  }
}
