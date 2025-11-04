import { Body, Controller, Post } from '@nestjs/common';
import { bookingService } from '../services/booking.service';
import { ReverseBookingDto } from '../dtos/reserveRoom.dto';

@Controller("api/bookings")
export class BookingController {
  constructor(private readonly bookingService: bookingService) {}

  @Post("reserve")
  bookUser(@Body() dto: ReverseBookingDto) {
    return this.bookingService.bookUser(dto.eventId, dto.userId);
  }

}
