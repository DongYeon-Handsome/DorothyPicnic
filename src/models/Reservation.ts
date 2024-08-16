import mongoose, { Schema, Document, Model } from "mongoose";

export interface IReservation extends Document {
  date: string;
  cardId: number;
}

const ReservationSchema: Schema = new Schema({
  data: { type: String, require: true },
  cardId: { type: Number, require: true },
});

const Reservation: Model<IReservation> = 
  mongoose.models.Reservation || mongoose.model<IReservation>('Reservaton', ReservationSchema);

export default Reservation;