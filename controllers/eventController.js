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
