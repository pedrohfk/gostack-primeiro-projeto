import { Router } from 'express';
import { startOfHour, parseISO } from 'date-fns';
import AppontmentsRepository from '../repositories/AppointmentsRepository';

const appointmentsRouter = Router();
const appontmentsRepository = new AppontmentsRepository();

appointmentsRouter.post('/', (request, response) => {
    const { provider, date } = request.body;

    const parseDate = startOfHour(parseISO(date));

    const findAppointmentInSameDate = appontmentsRepository.findByDate(
        parseDate,
    );

    if (findAppointmentInSameDate) {
        return response
            .status(400)
            .json({ message: 'This appointment is already bossoked' });
    }

    const appointment = appontmentsRepository.create(provider, parseDate);

    return response.json(appointment);
});

export default appointmentsRouter;
