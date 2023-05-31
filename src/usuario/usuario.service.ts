/* eslint-disable @typescript-eslint/no-unused-vars */
import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { usuarioDB } from 'src/DB/usuarioDB.entity';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

type user={
  username:string,
  password:string
}

@Injectable()
export class UsuarioService {
  constructor(@InjectRepository(usuarioDB) private usuarioRespository : Repository<usuarioDB>){}

  create(usuario) {
    const newProvider = this.usuarioRespository.create(usuario);
    return this.usuarioRespository.save(newProvider)
  }

  findAll() {
    return this.usuarioRespository.find();
  }

  findOne(id: number) {
    return this.usuarioRespository.findOne({
      where:{
        idusuario: id
      }
    });
  }

  update(id: number, provider: UpdateUsuarioDto) {
    return this.usuarioRespository.update({idusuario:id},provider) ;
  }

  remove(id: number) {
    return this.usuarioRespository.delete({idusuario:id})
  }

  signin(credentials:user,response){
    this.usuarioRespository.findOne({
      where:{
        userName:credentials.username,
        password:credentials.password
      }
    }).then((res)=>{
      if(res){
        
        return response.status(HttpStatus.CREATED).json({
          statusCode: 200,
          message:"usuario encontrado",
          user: res
        });
      }else{
        
        return response.status(HttpStatus.BAD_REQUEST).json({
          statusCode: 403,
          message: 'usuario o contraseña incorrecto'
        });
      }
      
    }).catch((err)=>{
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 500,
        message: 'Error de servidor'
      });
    })
  }
} 
