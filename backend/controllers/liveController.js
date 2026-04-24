import LiveSession from "../models/LiveSetion.js";

export const createLiveSession = async (req, res, next) => {
  try {
    const { course, title, scheduledAt } = req.body;

    if (!course || !title) {
      return res.status(400).json({ message: "course and title are required" });
    }

    const session = await LiveSession.create({
      course,
      title,
      scheduledAt,
      instructor: req.user.id,
    });

    res.status(201).json(session);
  } catch (error) {
    next(error);
  }
};

export const getLiveSessions = async (req, res, next) => {
  try {
    const sessions = await LiveSession.find({ course: req.params.courseId }).sort({
      scheduledAt: 1,
    });

    res.json(sessions);
  } catch (error) {
    next(error);
  }
};

export const startLiveSession = async (req, res, next) => {
  try {
    const session = await LiveSession.findOneAndUpdate(
      { _id: req.params.id, instructor: req.user.id },
      { status: "live" },
      { new: true }
    );

    if (!session) {
      return res.status(404).json({ message: "Live session not found" });
    }

    res.json(session);
  } catch (error) {
    next(error);
  }
};

export const endLiveSession = async (req, res, next) => {
  try {
    const session = await LiveSession.findOneAndUpdate(
      { _id: req.params.id, instructor: req.user.id },
      { status: "ended" },
      { new: true }
    );

    if (!session) {
      return res.status(404).json({ message: "Live session not found" });
    }

    res.json(session);
  } catch (error) {
    next(error);
  }
};
