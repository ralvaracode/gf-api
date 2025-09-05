// card.controller.ts
import { Controller, Get, Param, NotFoundException, BadRequestException } from '@nestjs/common';
import { CardService } from './card.service';
import { Card } from './card.entity';

@Controller('cards')
export class CardController {
  constructor(private readonly cardService: CardService) {}

    @Get(':id')
    async getCardById(@Param('id') id: string): Promise<Card> {
      const cardId = parseInt(id, 10); // Convert the id to a number
      if (isNaN(cardId)) {
        throw new BadRequestException('Invalid card ID');
      }
      
      const card = await this.cardService.findById(cardId);
      
      if (!card) {
        throw new NotFoundException(`Card with ID ${cardId} not found`);
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
