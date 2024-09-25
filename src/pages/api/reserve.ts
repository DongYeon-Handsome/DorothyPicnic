import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/mongodb";
import Reservation, { IReservation } from "@/models/Reservation";

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  try{
    await dbConnect();
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database connection error: ", error);
    return res.status(500).json({ success: false, message: 'Database connection error' });
  }

  if(req.method === 'POST') {
    const { name, phone, date, cardId } = req.body;
    console.log('Received data: ', { name, phone, date, cardId });

    if(!name || !phone || !date || !cardId) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }
    
    try{
      const existingReservation = await Reservation.findOne({ date, cardId });
      if(existingReservation){
        console.log('Reservation conflict found: ', existingReservation);
        return res.status(409).json({ success: false, message: 'Date already reserved' });
      }

      const newReservation = new Reservation({ name, phone, date, cardId });
      await newReservation.save();

      console.log('New reservation saved: ', newReservation);
      return res.status(200).json({ success: true, reservation: newReservation });
    } catch(error) {
      console.error('Error reserving date: ', error);
      return res.status(500).json({ success: false, message: "Error reserving date" });
    }
  } else if(req.method === 'GET') {
    try{
      const reservations = await Reservation.find({});
      console.log('Fetched reservations: ', reservations);
      return res.status(200).json({ success: true, reservations });
    } catch(error) {
      console.error('Error fetching reservations: ', error);
      return res.status(500).json({ success: false, message: "Error fetching reservations" });
    }
  } else{
    res.setHeader('Allow', ['POST', 'GET']);
    return res.status(405).json({ success: false, message: 'Method ${req.method} not allowed' });
  }
};