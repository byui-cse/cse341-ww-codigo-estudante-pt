module.exports = (mongoose) => {
  const schema = new mongoose.Schema(
    {
      temple_id: Number,
      name: String,
      description: String,
      location: String,
      dedicated: String,
      additionalInfo: mongoose.Schema.Types.Mixed,
    },
    { timestamps: true }
  );

  return mongoose.model('temples', schema);
};
