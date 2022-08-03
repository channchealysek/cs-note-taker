const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// const db = require('./db/db.json');



const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));
app.use(express.static('db'));

// use apiRoutes
// app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
app.use('/api', apiRoutes)

// app.get('/api/notes', (req, res) => res.json(db));
// app.get('/api/notes', (req, res) => res.json(db));

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
});
