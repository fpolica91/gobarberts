import { Router } from 'express';
import { parseISO } from 'date-fns';
const appointmentRouter = Router();
import AppointmentRepository from '../Repository/AppointmentRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';
const apptsRepo = new AppointmentRepository();

appointmentRouter.post('/', (req, res) => {
  try {
    const { provider, date } = req.body;
    const parsedDate = parseISO(date);
    const createAppointmentService = new CreateAppointmentService(apptsRepo);
    const appointment = createAppointmentService.execute({
      date: parsedDate,
      provider
    });
    return res.json(appointment);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

appointmentRouter.get('/', (req, res) => {
  const appointments = apptsRepo.all();
  return res.json(appointments);
});

export default appointmentRouter;
