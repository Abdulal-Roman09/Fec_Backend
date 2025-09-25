import mongoose from "mongoose";
import Event from "../models/Event.js";

export const addEvents = async (req, res) => {
  try {
    const clubId = req.params.id;
    const eventData = req.body;
    // Validation

    if (!clubId) {
      return res.status(400).json({ message: "clubId  are required" });
    }
    // Check if an event with the same title already exists for this club
    const eventExist = await Event.findOne({ clubId, title: eventData.title });
    if (eventExist) {
      return res
        .status(400)
        .json({ message: "Event already exists for this club" });
    }

    // Create new event
    const newEvent = new Event({ ...eventData, clubId });
    await newEvent.save();

    return res
      .status(201)
      .json({ message: "Event created successfully", event: newEvent });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getAllevents = async (req, res) => {
  try {
    const events = await Event.find();
    return res.status(200).json({ message: "Get all events", data: events });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getAllEventByClubId = async (req, res) => {
  try {
    const clubId = req.params.id;
    if (!clubId) {
      return res.status(400).json({ message: "clubId is required" });
    }
    const event = await Event.find({ clubId });
    return res.status(200).json({
      message: "All committee members retrieved successfully",
      data: event,
    });
  } catch (error) {
    console.error("Error in getFullCommitteeClub:", error);
    res.status(500).json({ message: error.message });
  }
};
export const deleteEvent = async (req, res) => {
  try {
    const { clubId, eventId } = req.params;

    const deletedEvent = await Event.findOneAndDelete({
      _id: eventId,
      clubId,
    });
    if (!deletedEvent)
      return res.status(404).json({ message: "Events not found in this club" });

    res
      .status(200)
      .json({ message: "Event deleted successfully", data: deletedEvent });
  } catch (error) {
    console.error("Error in deleteCommitteeMember:", error);
    res.status(500).json({ message: error.message });
  }
};
// export const eventDetiles = async (req, res) => {
//   try {
//     const { clubId, eventId } = req.params;
//     const event = await Event.find({
//       clubId: new mongoose.Types.ObjectId(clubId),
//       _id: new mongoose.Types.ObjectId(eventId),
//     });
//     if (!event)
//       return res.status(404).json({ message: "Event not found in this club" });

//     res
//       .status(200)
//       .json({ message: "Event details fetched successfully", data: event });
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };
export const eventDetails = async (req, res) => {
  try {
    const { clubId, eventId } = req.params;

    // Database query
    const event = await Event.findOne({
      _id: new mongoose.Types.ObjectId(eventId),
      clubId: new mongoose.Types.ObjectId(clubId),
    });

    if (!event) {
      return res.status(404).json({ message: "Event not found in this club" });
    }

    res.status(200).json({
      message: "Event details fetched successfully",
      data: event,
    });
  } catch (error) {
    console.error("Error in eventDetails:", error);
    return res.status(500).json({ message: error.message });
  }
};