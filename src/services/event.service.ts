import { BadRequestException, Injectable } from '@nestjs/common';
import { BookingEntity } from '../entities/booking.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EventEntity } from '../entities/event.entity';

@Injectable()
export class eventService {
  constructor(
    @InjectRepository(EventEntity) private readonly eventRepo: Repository<EventEntity>,
  ) {}

  async createEvent(name: string, totalSeats: number) {
    
    return await this.eventRepo.save({
      name,
      totalSeats: totalSeats
    }) 
  }
}
