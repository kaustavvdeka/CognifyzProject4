const Item = require("../models/item")
// CREATE
exports.createItem = async (req, res) => {
    try {
        console.log("BODY RECEIVED:", req.body);

        const item = new Item(req.body);
        const saved = await item.save();

        res.json(saved);
    } catch (err) {
        console.error("ERROR:", err.message);
        res.status(500).json({ error: err.message });
    }
};
// READ
exports.getItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};

// UPDATE
exports.updateItem = async (req, res) => {
    try {
        const updated = await Item.findByIdAndUpdate(
            req.params.id,
            req.body,
            { returnDocument: 'after' }
        );
        res.json(updated);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};

// DELETE
exports.deleteItem = async (req, res) => {
    try {
        await Item.findByIdAndDelete(req.params.id);
        res.json({ message: "Deleted" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};