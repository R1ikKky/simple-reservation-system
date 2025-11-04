import { Body, Controller, Post } from '@nestjs/common';
import { CreateEventDto } from '../dtos/createEvent.dto';
import { eventService } from '../services/event.service';

@Controller("api/events")
export class EventController {
  constructor(private readonly eventService: eventService) {}

  @Post("create")
  createEvent(@Body() dto: CreateEventDto) {
    return this.eventService.createEvent(dto.name, dto.totalSeats);
  }

}
