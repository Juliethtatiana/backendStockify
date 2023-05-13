import { Controller, Get } from '@nestjs/common';

@Controller('inventario')
export class InventarioController {
  @Get()
  helloworld() {
    return 'hellow';
  }
}
