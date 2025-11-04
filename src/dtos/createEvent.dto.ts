import { IsInt, IsString, Length, Min } from "class-validator";

export class CreateEventDto {
    @IsString()
    @Length(1, 250)
    name!: string;

    @IsInt()
    @Min(1)
    totalSeats!: number;
}