import Club from "../models/Club.js";
import Event from "../models/Event.js";
import Achivement from "../models/Achivement.js";
import Committee from "../models/Committee.js";

export const createClub = async (req, res) => {
  try {
    const club = await Club.create(req.body);
    res.status(201).json(club);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
export const getallclub = async (req, res) => {
  try {
    const result = await Club.find();

    res.status(200).json({
      success: true,
      message: "Clubs fetched successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch clubs",
      error: error.message,
    });
  }
};

export const getAllclubs = async (req, res) => {
  try {
    let { search, page, limit } = req.query;

    page = parseInt(page) || 1;
    limit = parseInt(limit) || 8;

    const query = {};

    if (search && search.trim() !== "") {
      query.$or = [
        { clubName: { $regex: search, $options: "i" } },
        { clubSortName: { $regex: search, $options: "i" } },
        { clubCategory: { $regex: search, $options: "i" } },
      ];
    }

    const skip = (page - 1) * limit;

    const total = await Club.countDocuments(query);
    const totalPage = Math.ceil(total / limit);

    const clubs = await Club.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    res.status(200).json({
      message: "Clubs fetched successfully",
      total,
      page,
      totalPage,
      limit,
      clubs,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getSingleClubs = async (req, res) => {
  try {
    const { id } = req.params;
    const clubs = await Club.findById(id);
    if (!clubs) {
      return res.status(404).json({ message: "club is not found" });
    }
    return res.status(200).json({
      success: true,
      data: clubs,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteClub = async (req, res) => {
  try {
    const { id } = req.params;

    // Check id
    if (!id) {
      return res
        .status(400)
        .json({ success: false, message: "Club ID not found" });
    }

    // First delete club
    const club = await Club.findByIdAndDelete(id);

    if (!club) {
      return res.status(404).json({
        success: false,
        message: "Club not found",
      });
    }

    // Delete all related data
    await Promise.all([
      Event.deleteMany({ clubId: id }),
      Achivement.deleteMany({ clubId: id }),
      Committee.deleteMany({ clubId: id }),
    ]);

    return res.status(200).json({
      success: true,
      message: "Club and all related data deleted successfully",
      data: club,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server Error: " + error.message,
    });
  }
};

export const getFilterClubs = async (req, res) => {
  try {
    // Extract query params (with defaults)
    const {
      category,
      search = "", // default: empty string
      sortBy = "createdAt",
      order = "desc",
      page = 1,
      limit = 10,
    } = req.query;

    // 1️⃣ Filter setup
    const filter = {};

    // Category filter (optional)
    if (category) {
      filter.clubCategory = category;
    }

    // Search filter (only if search has value)
    const trimmedSearch = search.trim();
    if (trimmedSearch) {
      filter.$or = [
        { clubName: { $regex: trimmedSearch, $options: "i" } },
        { clubDescription: { $regex: trimmedSearch, $options: "i" } },
      ];
    }

    // 2️⃣ Sorting setup
    let sortCondition = {};
    if (sortBy === "createdAt") {
      sortCondition = { createdAt: order === "asc" ? 1 : -1 };
    } else if (sortBy === "name") {
      sortCondition = { clubName: order === "desc" ? -1 : 1 };
    } else {
      // default sort: latest first + A–Z
      sortCondition = { createdAt: -1, clubName: 1 };
    }

    // 3️⃣ Pagination setup
    const pageNumber = parseInt(page, 10);
    const pageSize = parseInt(limit, 10);
    const skip = (pageNumber - 1) * pageSize;

    // 4️⃣ Execute queries (optimized)
    const [clubs, total] = await Promise.all([
      Club.find(filter).sort(sortCondition).skip(skip).limit(pageSize),
      Club.countDocuments(filter),
    ]);

    // 5️⃣ Send response
    res.status(200).json({
      success: true,
      total,
      count: clubs.length,
      currentPage: pageNumber,
      totalPages: Math.ceil(total / pageSize),
      data: clubs,
    });
  } catch (error) {
    console.error("Error fetching clubs:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch clubs.",
      error: error.message,
    });
  }
};
