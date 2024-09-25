import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/mongodb";
import Reservation from "@/models/Reservation";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try{
    await dbConnect();

    const testReservation = new Reservation({
      name: 'test name',
      phone: '123-1234-1234',
      date: '2024-01-01',
      cardId: 1
    });

    await testReservation.save();

    res.status(200).json({ success: true, message: 'Data successfully inserted', testReservation });
  } catch (error) {
    console.error('Database connection or insertion failed', error);
    res.status(500).json({ success: false, message: 'Database connection or insertion failed', error });
  }
}