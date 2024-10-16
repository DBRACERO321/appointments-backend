import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { Appointment } from './entities/appointment.entity';
import { AppointmentService } from './appointment.service';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';

@Controller('appointments')
export class AppointmentController {
  private readonly appointmentService = AppointmentService.getInstance();

  @Get()
  getAllApointmentList(): Appointment[] {
    return this.appointmentService.getAllAppointmentList();
  }

  @Post()
  createAppointment(@Body() dto: CreateAppointmentDto): Appointment {
    const id = Math.random().toString(36).substring(2);
    return this.appointmentService.createAppointment(new Appointment(id, dto.clientFirstName,dto.clientLastName, dto.date, dto.startTime,dto.endTime));
  }

  @Put(':id')
  updateAppointment(@Param('id') id: string, @Body() updateData: UpdateAppointmentDto): Appointment {
    return this.appointmentService.updateAppointment(id, updateData);
  }

  @Delete(':id')
  deleteAppointment(@Param('id') id: string): string {
    return  this.appointmentService.deleteAppointment(id);
  }
}
