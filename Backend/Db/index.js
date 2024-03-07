const mongoose = require('mongoose');
require('dotenv').config()
mongoose.connect(process.env.MONGO_URI).then(()=>console.log("DB connected"));
const bcrypt = require('bcrypt');


const UserSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    bio: {
      workExperience: {type: String},
      education: {type: String},
      linkedIn: {type: String},
      github: {type: String},
      profilePicture: {type: String},
    }
  },
  {
    timestamps: true,
  }
)

const JourneySchema = new mongoose.Schema({
  content:{
    title: {type: String, required: true},
    body: {type: String, required: true},
    tags: {type: String, required: true},
    image: {type: String, required: true},
  },
  likes: {
    type: Number,
    default: 0,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
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