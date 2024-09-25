import mongoose, { Schema, Document, Model } from "mongoose";

export interface IReservation extends Document {
  name: string;
  phone: string;
  date: string;
  cardId: number;
}

const ReservationSchema: Schema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, require: true },
  date: { type: String, require: true },
  cardId: { type: Number, require: true },
});

const Reservation: Model<IReservation> = 
  mongoose.models.Reservation || mongoose.model<IReservation>('Reservaton', ReservationSchema);

export default Reservation;