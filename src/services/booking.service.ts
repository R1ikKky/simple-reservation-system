import { BadRequestException, Injectable } from '@nestjs/common';
import { BookingEntity } from '../entities/booking.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EventEntity } from '../entities/event.entity';

@Injectable()
export class bookingService {
  constructor(
    @InjectRepository(BookingEntity) private readonly bookingRepo: Repository<BookingEntity>,
    @InjectRepository(EventEntity) private readonly eventRepo: Repository<EventEntity>,
  ) {}

  async bookUser(eventId: number, userId: string) {
    
    const event = await this.eventRepo.findOne({ where: { id: eventId } })
    if (!event) throw new BadRequestException("event doesnt exists, create event on api/events/reserve")

    const exist = await this.bookingRepo.findOne({ where: { userId, event: { id: eventId } }})
    if (exist) throw new BadRequestException("booking already exists")

    const totalBookings = await this.bookingRepo.count({ where: { event: { id: eventId } } })
    if (totalBookings >= event!.totalSeats) throw new BadRequestException("no more seats available")

    return await this.bookingRepo.save({
      userId,
      event: { id: eventId } as EventEntity
    }) 
  }
}
