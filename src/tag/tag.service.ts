import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TagEntity } from '@app/tag/tag.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(TagEntity)
    private readonly tagRepository: Repository<TagEntity>,
  ) {}

  public async fetchAll(): Promise<TagEntity[]> {
    return await this.tagRepository.find();
  }
}
