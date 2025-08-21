import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Card } from './card.entity';

@Injectable()
export class CardService {
  constructor(
    @InjectRepository(Card)
    private readonly cardRepository: Repository<Card>,
  ) {}

  async findById(id: number): Promise<Card | null> {
    return this.cardRepository.findOne({ where: { id } });
    }
    
    async findByName(name: string): Promise<Card[] | null> {
      return this.cardRepository.find({ where: { Name:name } });
    }
}
