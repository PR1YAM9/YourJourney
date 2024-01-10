const mongoose = require('mongoose');
require('dotenv').config()
mongoose.connect(process.env.MONGO_URI).then(()=>console.log("DB connected"));
const bcrypt = require('bcrypt');


const UserSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    journeys: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Journey",
      },
    ],
  },
  {
    timestamps: true,
  }
)
const JourneySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required:true,
  },
})

UserSchema.pre('save', async function(next){
  try {
    const user = this;
    
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
    return next();

  } catch (error) {
    return next(error);
  }
})


const User = mongoose.model("User", UserSchema);
const Journey = mongoose.model("Journey", JourneySchema);

module.exports= {
    User,
    Journey
}