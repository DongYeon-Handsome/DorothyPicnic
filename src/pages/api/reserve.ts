import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/mongodb";
import Reservation, { IReservation } from "@/models/Reservation";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();

  if(req.method === 'POST') {
    const { date, cardId } = req.body;

    if(!date || !cardId) {
      return res.status(400).json({ success: false, message: 'Invaild request' });
    }
    
    try{
      const existingReservation = await Reservation.findOne({ date, cardId });
      if(existingReservation){
        return res.status(409).json({ success: false, message: 'Date already reserved' });
      }

      const newReservation: IReservation = new Reservation({ date, cardId });
      await newReservation.save();

      return res.status(200).json({ success: true, reservation: newReservation });
    } catch(error) {
      return res.status(500).json({ success: false, message: "Error reserving date" });
    }
  } else if(req.method === 'GET') {
    try{
      const reservations = await Reservation.find({});
      return res.status(200).json({ success: true, reservations });
    } catch(error) {
      return res.status(500).json({ success: false, message: "Error fetching reservations" });
    }
  } else{
    res.setHeader('Allow', ['POST', 'GET']);
    return res.status(405).json({ success: false, message: 'Method ${req.method} not allowed' });
  }
};