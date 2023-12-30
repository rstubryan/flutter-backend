const express = require("express");
const router = express.Router();
const db = require("../models/db");

// GET /matakuliah
router.get("/", (req, res) => {
  db.query("SELECT * FROM matakuliah", (error, results) => {
    if (error) {
      console.error("Error fetching matakuliah:", error);
      res.status(500).json({ message: "Internal Server Error" });
    } else {
      res.json(results);
    }
  });
});

// GET /matakuliah/:kode
router.get("/:kode", (req, res) => {
  const kodeMatakuliah = req.params.kode;
  db.query(
    "SELECT * FROM matakuliah WHERE kode = ?",
    [kodeMatakuliah],
    (error, results) => {
      if (error) {
        console.error("Error fetching matakuliah:", error);
        res.status(500).json({ message: "Internal Server Error" });
      } else if (results.length === 0) {
        res.status(404).json({ message: "Matakuliah not found" });
      } else {
        res.json(results[0]);
      }
    }
  );
});

// POST /matakuliah
router.post("/", (req, res) => {
  const { kode, matkul, sks } = req.body;
  db.query(
    "INSERT INTO matakuliah (kode, matkul, sks) VALUES (?, ?, ?)",
    [kode, matkul, sks],
    (error) => {
      if (error) {
        console.error("Error creating matakuliah:", error);
        res.status(500).json({ message: "Internal Server Error" });
      } else {
        res.json({ message: "Matakuliah created successfully" });
      }
    }
  );
});

module.exports = router;
