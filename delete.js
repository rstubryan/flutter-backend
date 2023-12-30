const kodeMatakuliah = '10004';

fetch(`http://localhost:3000/matakuliah/${kodeMatakuliah}`, {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));