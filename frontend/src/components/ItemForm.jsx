import React, { useState, useEffect } from "react";

function ItemForm({ onSubmit, editItem }) {
    const [name, setName] = useState("");

    useEffect(() => {
        if (editItem) {
            setName(editItem.name);
        } else {
            setName("");
        }
    }, [editItem]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim()) return;

        onSubmit(name);
        setName("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button type="submit">
                {editItem ? "Update" : "Add"}
            </button>
        </form>
    );
}

export default ItemForm;
