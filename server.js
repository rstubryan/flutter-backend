const express = require('express');
const bodyParser = require('body-parser');
const matakuliahController = require('./controllers/matakuliahController');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Endpoint matakuliah
app.use('/matakuliah', matakuliahController);

// Jalankan server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});