const mahasiswaNim = '20210044';
const updatedData = {
    nama: 'Renaldo',
    gender: 'L',
    prodi: 'SI',
    alamat: 'Cibadak'
};

fetch(`http://localhost:3000/mahasiswa/${mahasiswaNim}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedData)
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));