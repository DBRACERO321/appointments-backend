import { Injectable, NotFoundException } from '@nestjs/common';
import { Appointment } from './entities/appointment.entity';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';

@Injectable()
export class AppointmentService {
  private static serviceInstance: AppointmentService;
  private appointmentList: Appointment[] = [];

  private constructor() {}

  public static getInstance(): AppointmentService {
    if (!AppointmentService.serviceInstance) {
      AppointmentService.serviceInstance = new AppointmentService();
    }
    return AppointmentService.serviceInstance;
  }

  getAllAppointmentList(): Appointment[] {
    return this.appointmentList;
  }

  createAppointment(appointment: Appointment): Appointment {
    this.appointmentList.push(appointment);
    return appointment;
  }

  updateAppointment(id: string, updated: UpdateAppointmentDto): Appointment {
    const indexFound = this.appointmentList.findIndex(appointment => appointment.id === id);
    if (indexFound === -1) throw new NotFoundException('La cita no fué encontrada');
    this.appointmentList[indexFound] = { id, ...updated };
    return this.appointmentList[indexFound];
  }

  deleteAppointment(id: string): string {
    const indexFound = this.appointmentList.findIndex(appointment => appointment.id === id);
    if (indexFound === -1) throw new NotFoundException('La cita no fué encontrada');
    this.appointmentList.splice(indexFound, 1);
    return 'La cita fué eliminada';
  }
}