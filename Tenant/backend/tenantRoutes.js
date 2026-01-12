const express = require("express");
const Tenant = require("./Tenant");
const router = express.Router();

// GET all
router.get("/", async (req, res) => {
  const tenants = await Tenant.find();
  res.json(tenants);
});

// POST create
router.post("/", async (req, res) => {
  const tenant = await Tenant.create(req.body);
  res.json(tenant);
});

// PUT update
router.put("/:id", async (req, res) => {
  const tenant = await Tenant.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(tenant);
});

// DELETE remove
router.delete("/:id", async (req, res) => {
  await Tenant.findByIdAndDelete(req.params.id);
  res.json({ message: "Tenant deleted" });
});

module.exports = router;