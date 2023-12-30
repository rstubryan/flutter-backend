const express = require('express');
const bodyParser = require('body-parser');
const mahasiswaController = require('./controllers/mahasiswaController');
const matakuliahController = require('./controllers/matakuliahController');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Endpoint mahasiswa
app.use('/mahasiswa', mahasiswaController);

// Endpoint matakuliah
app.use('/matakuliah', matakuliahController);

// Jalankan server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});