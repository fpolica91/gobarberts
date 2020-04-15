import Appointment from '../Models/Appointment';
import AppointmentRepository from '../Repository/AppointmentRepository';

import { startOfHour } from 'date-fns';

interface RequestDTO {
  provider: string;
  date: Date;
}

/**
 * Dependecy Inversion(SOLID)
 * Each service has one responsibility
 */

class CreateAppointmentService {
  private appointmentRepository: AppointmentRepository;

  constructor(appointmentsRepository: AppointmentRepository) {
    this.appointmentRepository = appointmentsRepository;
  }
  public execute({ date, provider }: RequestDTO): Appointment {
    const appointmentDate = startOfHour(date);
    const booked = this.appointmentRepository.findByDate(appointmentDate);
    if (booked) {
      throw Error('this appointment is already booked');
    }
    const appointment = this.appointmentRepository.create({
      provider,
      date: appointmentDate
    });
    return appointment;
  }
}

export default CreateAppointmentService;
