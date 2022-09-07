import { Controller, Get } from '@nestjs/common';
import { TagService } from './tag.service';

@Controller('tag')
export class TagController {
  constructor(private readonly tagsService: TagService) {}

  @Get('/')
  public findAll(): string[] {
    return this.tagsService.fetchAll();
  }
}
