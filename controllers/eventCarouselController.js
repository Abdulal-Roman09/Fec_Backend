import EventCarousel from "../models/EventCarousel.js";

export const addEventCarousel = async (req, res) => {
  try {
    const event = req.body;

    const requiredFields = [
      "clubName",
      "eventTitle",
      "eventCategory",
      "status",
      "date",
      "eventTime",
      "registerStartDate",
      "registerEndDate",
      "description",
      "image",
    ];

    const missing = requiredFields.find((field) => !event[field]);
    if (missing)
      return res.status(400).json({ message: `${missing} is required.` });

    const existingEvent = await EventCarousel.findOne({
      clubName: event.clubName,
      eventTitle: event.eventTitle,
    });

    if (existingEvent) {
      return res.status(400).json({
        message: "This event already exists for this club.",
      });
    }

    const newEvent = await EventCarousel.create(event);

    res
      .status(201)
      .json({ message: "Event added successfully", event: newEvent });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
export const getAllEventCarousle = async (req, res) => {
  try {
    const events = await EventCarousel.find().sort({ date: -1 });

    res.status(200).json({
      message: "All events retrieved successfully",
      events,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const deletedEventCarousel = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedEvent = await EventCarousel.findByIdAndDelete(id);
    if (!deletedEvent) {
      return res.status(404).json({ message: "Event not found" });
    }

    res
      .status(200)
      .json({ message: "Event deleted successfully", event: deletedEvent });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
