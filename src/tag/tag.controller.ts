import { Controller, Get } from '@nestjs/common';
import { TagService } from './tag.service';
import { TagEntity } from '@app/tag/tag.entity';

@Controller('tags')
export class TagController {
  constructor(private readonly tagsService: TagService) {}

  @Get('/')
  public async findAll(): Promise<{ tags: string[] }> {
    const tags: TagEntity[] = await this.tagsService.fetchAll();

    return { tags: tags.map(({ name }) => name) };
  }
}
