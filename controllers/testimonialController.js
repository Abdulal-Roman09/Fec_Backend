import Testimonial from "../models/Testmonial.js";

export const addTestimonial = async (req, res) => {
  try {
    const { clubId, userId } = req.params;
    const { message, rating } = req.body;

    // Create new testimonial
    const testimonial = await Testimonial.create({
      message,
      rating,
      clubId,
      userId,
    });

    return res.status(201).json({
      success: true,
      message: "Testimonial added successfully",
      data: testimonial,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server Error: " + error.message,
    });
  }
};
