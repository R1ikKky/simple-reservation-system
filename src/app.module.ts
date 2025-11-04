import { Module } from '@nestjs/common';
import { BookingController } from './controllers/booking.controller';
import { bookingService } from './services/booking.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingEntity } from './entities/booking.entity';
import { EventEntity } from './entities/event.entity';
import { EventController } from './controllers/event.controller';
import { eventService } from './services/event.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "postgres",
      port: 5432,
      username: "postgres",
      password: "postgres",
      database: "postgres",
      autoLoadEntities: true,
      synchronize: true
    }),
    TypeOrmModule.forFeature([BookingEntity, EventEntity])
  ],
  controllers: [BookingController, EventController],
  providers: [bookingService, eventService],
})
export class AppModule {}
