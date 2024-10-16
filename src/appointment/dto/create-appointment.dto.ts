import { IsDateString, IsNotEmpty, IsString, Length } from "class-validator";

export class CreateAppointmentDto {
    @IsString({ message: 'El nombre debe ser string' })
    @IsNotEmpty({message:'EL nombre es obligatorio'})
    clientFirstName: string;

    @IsString({ message: 'El apellido debe ser string' })
    @IsNotEmpty({message:'El apellido es obligatorio'})
    clientLastName: string;

    @IsDateString({}, { message: 'La fecha debe tener un formato válido (ISO).' })
    @IsNotEmpty({message:'La fecha es obligatoria'})
    date: string;

    @IsString({ message: 'La H.Inicio debe ser string'})
    @Length(5, 5,{message:'La H.Inicio debe de 5 caracteres en formato 00:00'})
    @IsNotEmpty({message:'La H.Inicio obligatoria'})
    startTime: string;
    
    @IsString({ message: 'La H.Salida debe ser string'})
    @Length(5, 5,{message:'La H.Salida debe de 5 caracteres en formato 00:00'})
    @IsNotEmpty({message:'La H.Salida obligatoria'})
    endTime: string;
  }