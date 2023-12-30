const kodeMatakuliah = "10003"; 
const updateData = {
  matkul: "Datatutu",
  sks: 4,
};

fetch(`http://localhost:3000/matakuliah/${kodeMatakuliah}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(updateData),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
