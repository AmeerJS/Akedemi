import express from "express";
const router = express.Router();

router.get("/stats", (req, res) => {
  res.json([
    { label: "Students", value: 932 },
    { label: "Teachers", value: 754 },
    { label: "Events", value: 40 },
    { label: "Foods", value: 32000 }
  ]);
});

export default router;