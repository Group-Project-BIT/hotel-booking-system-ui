import connectDb from "@/app/server/config/configDb";
import reservationModel from "@/app/server/model/reservationModel";

export default async function handler(req, res) {
  await connectDb();

  if (req.method === 'PUT') {
    const { reservation_id, reservation_status } = req.body;

    try {
      const reservation = await reservationModel.findById(reservation_id);
      if (!reservation) return res.status(404).json({ msg: 'Reservation not found' });

      reservation.reservation_status = reservation_status;
      await reservation.save();

      res.status(200).json(reservation);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}