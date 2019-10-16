const Multiply = require('../models/multiply.model.js');

// Create and Save a new Note
exports.create = (req, res) => {
    Multiply.find()
    .then(calc => {
        if(calc.length == 0){
  // Create a calculation 
  const multiply = new Multiply({
    div1: req.body.div1 || "Untitled Note", 
    div2: req.body.div2 || "Untitled Note",
    result: req.body.result || "Untitled Note",
});

// Save Note in the database
multiply.save()
.then(data =>{
    res.send(data);
}).catch(err =>{
    res.status(500).send({
        message: err.message || 'Some error occurred'
    })
})
        }
        else {
            Multiply.findOneAndUpdate({},{ $set: { div1: req.body.div1,  div2: req.body.div2,result: req.body.result} },
            
            ).exec();
                res.send(calc);
        }
    
    })
    
  


};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    Multiply.find()
    .then(calc => {
        res.send(calc);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred"
        });
    });

};


// Update a note identified by the noteId in the request

