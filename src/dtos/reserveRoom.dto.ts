import { IsNumber, IsString } from "class-validator";

export class ReverseBookingDto {
    @IsNumber() eventId!: number;
    @IsString() userId!: string;
}