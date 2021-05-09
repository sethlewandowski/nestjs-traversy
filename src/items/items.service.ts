import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '35236236378342114',
      name: 'Bose Headphones',
      quantity: 25,
      description: 'Bose quiet comfort 25',
    },
    {
      id: '35236236352678342114',
      name: 'Sony Headphones',
      quantity: 22,
      description: 'Sony noise cancelling headphones.',
    },
  ];

  findAll(): Item[] {
    return this.items;
  }

  findOne(id: string): Item {
    return this.items.find((item) => item.id === id);
  }
}
