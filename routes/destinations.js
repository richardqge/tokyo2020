var express = require("express");
var router  = express.Router();
var destination = require("../models/destination");
var middleware = require("../middleware");

var NodeGeocoder = require('node-geocoder');
 
var options = {
  provider: 'google',
  httpAdapter: 'https',
  apiKey: process.env.GEOCODER_API_KEY,
  formatter: null
};
 
var geocoder = NodeGeocoder(options);


//INDEX - show all destinations
router.get("/", function(req, res){
    // Get all destinations from DB
    destination.find({}, function(err, alldestinations){
       if(err){
           console.log(err);
       } else {
          res.render("destinations/index",{destinations:alldestinations, page:'destinations'});
       }
    });
});

//CREATE - add new destination to DB
router.post("/", middleware.isLoggedIn, function(req, res){
    // get data from form and add to destinations array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username
    }
    geocoder.geocode(req.body.location, function (err, data) {
        // if (err || !data.length) {
        if (err || !data.length) {
        req.flash('error', 'Invalid address');
        return res.redirect('back');
      }
      var lat = data[0].latitude;
      var lng = data[0].longitude;
      var location = data[0].formattedAddress;
      var newdestination = {name: name, image: image, description: desc, author:author, location: location, lat: lat, lng: lng};
      // Create a new destination and save to DB
      destination.create(newdestination, function(err, newlyCreated){
          if(err){
              console.log(err);
          } else {
              //redirect back to destinations page
              console.log(newlyCreated);
              res.redirect("/destinations");
          }
      });
    });
  });

//NEW - show form to create new destination
router.get("/new", middleware.isLoggedIn, function(req, res){
   res.render("destinations/new"); 
});

// SHOW - shows more info about one destination
router.get("/:id", function(req, res){
    //find the destination with provided ID
    destination.findById(req.params.id).populate("comments").exec(function(err, founddestination){
        if(err){
            console.log(err);
        } else {
            console.log("==============")
            console.log(founddestination)
            //render show template with that destination
            res.render("destinations/show", {destination: founddestination});
        }
    });
});

// EDIT destination ROUTE
router.get("/:id/edit", middleware.checkdestinationOwnership, function(req, res){
    destination.findById(req.params.id, function(err, founddestination){
        res.render("destinations/edit", {destination: founddestination});
    });
});

// UPDATE destination ROUTE
router.put("/:id", middleware.checkdestinationOwnership, function(req, res){
    geocoder.geocode(req.body.location, function (err, data) {
      if (err || !data.length) {
        req.flash('error', 'Invalid address');
        return res.redirect('back');
      }
      req.body.destination.lat = data[0].latitude;
      req.body.destination.lng = data[0].longitude;
      req.body.destination.location = data[0].formattedAddress;
  
      destination.findByIdAndUpdate(req.params.id, req.body.destination, function(err, destination){
          if(err){
              req.flash("error", err.message);
              res.redirect("back");
          } else {
              req.flash("success","Successfully Updated!");
              res.redirect("/destinations/" + destination._id);
          }
      });
    });
  });

// DESTROY destination ROUTE
router.delete("/:id",middleware.checkdestinationOwnership, function(req, res){
   destination.findByIdAndRemove(req.params.id, function(err){
      if(err){
          res.redirect("/destinations");
      } else {
          res.redirect("/destinations");
      }
   });
});


module.exports = router;

