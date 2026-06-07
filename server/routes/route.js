const express = require("express")
const router = express.Router()
const dataModelCopy = require('../models/dataModel')


// post data
router.post('/post', async (req, res) => {
  try {
    // Create new document using the request body directly
    const dataUser = new dataModelCopy({
      date: req.body.date,
      flight_operator: req.body.flight_operator,
      aircraft: req.body.aircraft,
      incident_location: req.body.incident_location,
      time_of_strike: req.body.time_of_strike,
      run_way_used: req.body.run_way_used,
      phase_of_flight: req.body.phase_of_flight,
      effect_on_flight: req.body.effect_on_flight,
      sky_condition: req.body.sky_condition,
      precipitation: req.body.precipitation,
      number_of_birds_seen: req.body.number_of_birds_seen,
      number_of_birds_struck: req.body.number_of_birds_struck,
      size_of_Birds: req.body.size_of_Birds,
      confirm_Birds: req.body.confirm_Birds,
      unconfirm_Birds: req.body.unconfirm_Birds
    });
    dataUser.save()
    .then(data =>{
        res.json(data)
    })
    .catch(e =>{
        res.json(e)
    })
    
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ error: error.message });
  }
});


// retrieve data
router.get('/post', async (req, res) => {
    const result = await dataModelCopy.find();
    res.send(result)
})


// get data for editing
router.get('/post/:id', async (req, res) => {
    const id = req.params.id
    const result = await dataModelCopy.findById({_id:id});
    res.status(200).json(result)
})


// post edited data
router.put('/post/:id', async (req, res) =>{
try{
    const dataId = req.params.id;
    // console.log(dataId)
    const result = await dataModelCopy.replaceOne({_id: dataId}, {
      date:req.body.date,
      flight_operator:req.body.flight_operator,
      aircraft:req.body.aircraft,
      incident_location:req.body.incident_location,
      time_of_strike:req.body.time_of_strike,
      run_way_used:req.body.run_way_used,
      phase_of_flight:req.body.phase_of_flight,
      effect_on_flight:req.body.effect_on_flight,
      sky_condition:req.body.sky_condition,
      precipitation:req.body.precipitation,
      number_of_birds_seen:req.body.number_of_birds_seen,
      number_of_birds_struck:req.body.number_of_birds_struck,
      size_of_Birds:req.body.size_of_Birds,
      confirm_Birds:req.body.confirm_Birds,
      unconfirm_Birds:req.body.unconfirm_Birds
    })
    res.send({updatedCount: result.modifiedCount})
    //
    }
    catch(err){
        // res.send.status(500).json({error: "something went wrong"})
        res.status(500).json({ error: "something went wrong"})
    }
})

// delete function
router.delete('/post/:id', async(req, res) => {
    try{
        const dataId = req.params.id;
        const result = await dataModelCopy.deleteOne({_id: dataId});
        res.json({deletedCount: result.deletedCount})
    }
    catch(err){
        // res.send.status(500).json({ error: "Something went wrong"})
        res.status(500).json({ error: "something went wrong"})
    }
})

module.exports = router
