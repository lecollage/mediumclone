import { Injectable } from '@nestjs/common';

@Injectable()
export class TagService {
  public fetchAll(): string[] {
    return ['test1', 'test2', 'test3'];
  }
}
