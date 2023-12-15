const createData = {
    nim : '202100411',
    nama: 'Renaldo',
    gender: 'L',
    prodi: 'SI',
    alamat: 'Cibadak'
};

fetch(`http://localhost:3000/mahasiswa`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(createData)
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));