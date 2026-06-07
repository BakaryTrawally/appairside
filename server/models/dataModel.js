const mongoose = require("mongoose");
const {connectBirdsStrikeDB} = require("../config/dbConnection");

const birdStrikeSchema = new mongoose.Schema(
  {
    date: { type: Date, required: true },

    flight_operator: { type: String, required: true, trim: true },

    aircraft: { type: String, required: true, trim: true },

    incident_location: {
      type: String,
      required: true,
      enum: ["Within The Airport", "Outside The Airport"],
    },

    time_of_strike: {
      type: String,
      required: true,
      enum: ["Dawn", "Day", "Dusk", "Night"],
    },

    run_way_used: {
      type: String,
      required: true,
      enum: ["14", "32"],
    },

    phase_of_flight: {
      type: String,
      required: true,
      enum: [
        "Park",
        "Taxi",
        "Take Off Run",
        "Climb",
        "En Route",
        "Descent",
        "Approach",
        "Landing",
      ],
    },

    effect_on_flight: {
      type: String,
      required: true,
      enum: [
        "None",
        "Aborted Take Off",
        "Precautionary Landing",
        "Engine Shutdown",
        "Other",
      ],
    },

    sky_condition: {
      type: String,
      required: true,
      enum: ["No Cloud", "Some Cloudy", "OverCast"],
    },

    precipitation: {
      type: String,
      required: true,
      enum: ["Fog", "Rain", "Snow", "None"],
    },

    number_of_birds_seen: { type: Number, required: true, min: 0 },

    number_of_birds_struck: { type: Number, required: true, min: 0 },

    size_of_Birds: {
      type: String,
      required: true,
      enum: ["Small", "Medium", "Large"],
    },

    confirm_Birds: { type: Number, required: true, min: 0 },

    unconfirm_Birds: { type: Number, required: true, min: 0 },
  },
  { timestamps: true }
);

module.exports = connectBirdsStrikeDB.model("BirdStrike", birdStrikeSchema);

