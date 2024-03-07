const { Router } = require("express");
const router = Router();
const jwt = require("jsonwebtoken");
const { User, Journey } = require("../Db/index");
require("dotenv").config();
const {userMiddleware} = require('../middleware/userMiddleware')
const bcrypt = require('bcrypt')


router.post("/register", async (req, res) => {
  const { username, password ,email, city , bio} = req.body;

  const Existinguser = await User.findOne({ username });
  if (Existinguser) {
    res.json({
      message: "Username already exists",
    });
  }

  const user = new User({
    username,
    password,
    email,
    city,
    bio
  });
  await user.save();
  res.json({
    message: "User created succesfully",
  });
});

router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    try {
      const user = await User.findOne({ username });
  
      if (user) {
        const passwordMatch = await bcrypt.compare(password, user.password);
  
        if (passwordMatch) {
          const token = jwt.sign(username, process.env.JWT_SECRET);
  
          res.header("authorization", token).json({
            message: "Login Successful",
            token,
          });
        } else {
          res.status(401).json({
            message: "Invalid Credentials",
          });
        }
      } else {
        res.status(401).json({
          message: "Invalid Credentials",
        });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
});

// router.post("/logout", (req, res) => {});

router.post("/journey", userMiddleware, async (req, res) => {
    try {
      const { content, likes } = req.body;
      const  {user}  = req;
  
      user.journeys = Array.isArray(user.journeys) ? user.journeys : [];
      const newJourney = new Journey({
        content,
        likes,
        author: user._id
      });
  
      await newJourney.save();
    console.log(user)
  
      user.journeys = [...user.journeys, newJourney._id];
      await User.findOneAndUpdate({ _id: user._id }, { $set: { journeys: user.journeys, }});
  
      res.json({
        message: "journey added succesfully",
        user: user._id,
        journey : newJourney
      });
    } catch (error) {
      console.log(error);
      res.json({
        message: "error occurred",
      });
    }
  });

router.get('/journeys' , userMiddleware, async (req,res)=>{
    try {
        const allJourneys =await Journey.find({});
        res.json({
            journeys : allJourneys
        })
    } catch (error) {
        res.json({
            message: "Some error occured"
        }) 
    }  
})

router.get('/journeys:username', userMiddleware , async (req,res)=>{
    try {
        const {username} = req.params;
        const {user} = req;
        const arr = username.split(':')
        const newName = arr[1];


        const journeyUser = await User.findOne({ username: newName }).populate('journeys');
        if(!journeyUser){
            res.json({
                message: "user not found"
            })
        }

        const userJourneys = journeyUser.journeys;

        res.json({
            journeys: userJourneys
        })
    } catch (error) {
        res.json({
            error: "Something wrong happened"
        })
    }
})

router.get('/journey/:journeyid', userMiddleware, async (req, res) => {
    try {
        const { journeyid } = req.params;
        const jId = journeyid.split(':')[1]

        const journey = await Journey.findById(jId);

        if (journey) {
            res.json({
                journey: journey,
            });
        } else {
            res.status(404).json({
                message: "Journey not found",
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Internal Server Error",
        });
    }
});

router.put('/journey/:journeyid' ,userMiddleware , async (req,res)=>{
   try {
    const journeyId = req.params;
    const jId = journeyId.journeyid.split(':')[1];
    
    const {content} = req.body;
    const {user} = req;

    const journey = await Journey.findById(jId);
    
    if(journey){
        if(journey.author.equals(user._id)){
            await journey.updateOne({
                content: content
            })
            res.json({
                message: "Journey updated"
            })
        }
        else{
            res.json({
                message: "Invalid User"
            })
        }
    }else{
        res.json({
            message: "this journey does not exist"
        })
    }

   } catch (error) {
    res.json({
        error: error
    })
   }
})

router.delete('/journey/:journeyid', userMiddleware, async (req, res) => {
    try {
        const journeyId = req.params;
        const jId = journeyId.journeyid.split(':')[1];
        const { user } = req;

        const journey = await Journey.findById(jId);

        if (journey) {
            if (journey.author.equals(user._id)) {
                // User is the author, proceed with the deletion
                await Journey.deleteOne({ _id: jId });

                res.json({
                    message: "Journey deleted successfully",
                    deletedJourney: journey,
                });
            } else {
                // User is not the author, return an unauthorized response
                res.status(401).json({
                    message: "Unauthorized: You are not the author of this journey",
                });
            }
        } else {
            res.status(404).json({
                message: "Journey not found",
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Internal Server Error",
        });
    }
});


module.exports = router;