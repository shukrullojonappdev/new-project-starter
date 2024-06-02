import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { TablesService } from './tables.service';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';

@Controller()
export class TablesController {
  constructor(private readonly tablesService: TablesService) {}

  @MessagePattern('createTable')
  create(@Payload() createTableDto: CreateTableDto) {
    return this.tablesService.create(createTableDto);
  }

  @MessagePattern('findAllTables')
  findAll() {
    return this.tablesService.findAll();
  }

  @MessagePattern('findOneTable')
  findOne(@Payload() id: number) {
    return this.tablesService.findOne(id);
  }

  @MessagePattern('updateTable')
  update(@Payload() updateTableDto: UpdateTableDto) {
    return this.tablesService.update(updateTableDto.id, updateTableDto);
  }

  @MessagePattern('removeTable')
  remove(@Payload() id: number) {
    return this.tablesService.remove(id);
  }
}
