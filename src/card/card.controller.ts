// card.controller.ts
import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { CardService } from './card.service';
import { Card } from './card.entity';

@Controller('cards')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Get(':id')
  async getCardById(@Param('id') id: string): Promise<Card> {
    const card = await this.cardService.findById(id);
    if (!card) {
      throw new NotFoundException(`Card with ID ${id} not found`);
    }
    return card;
    }
    
    @Get('name/:name')
    async getCardByName(@Param('name') name: string): Promise<Card[]> {
      const cards = await this.cardService.findByName(name);
      if (!cards) {
        throw new NotFoundException(`Cards with name ${name} not found`);
      }
      return cards;
    }
}
