module.exports = (app) => {
    const calculate = require('../controllers/multiply.controller.js');

    // Create a new Note
    app.post('/saveData', calculate.create);

    // Retrieve all Notes
    app.get('/getData', calculate.findAll);

    // // Update a Note with noteId
    // app.put('/notes/:noteId', notes.update);

}