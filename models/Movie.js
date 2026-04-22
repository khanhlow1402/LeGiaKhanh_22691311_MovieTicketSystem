import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  // mã phim (custom id)
  movieId: {
    type: String,
    required: true,
    unique: true,
  },

  // tên phim
  title: {
    type: String,
    required: true,
  },

  // thể loại
  genre: {
    type: String,
    required: true,
  },

  // thời lượng (phút)
  duration: {
    type: Number,
    required: true,
  },

  // ngày phát hành
  releaseDate: {
    type: Date,
    required: true,
  },

  // đạo diễn
  director: {
    type: String,
  },

  // diễn viên (array)
  cast: {
    type: [String],
    default: [],
  },

  // mô tả
  description: {
    type: String,
  },

  // poster (link ảnh)
  posterUrl: {
    type: String,
  },

  // trạng thái
  status: {
    type: String,
    enum: ["NOW_SHOWING", "COMING_SOON"],
    default: "COMING_SOON",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Movie", movieSchema);
