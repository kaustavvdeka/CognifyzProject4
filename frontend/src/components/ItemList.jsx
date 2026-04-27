import React from "react";

function ItemList({ items, onEdit, onDelete }) {
    return (
        <ul>
            {items.map((item) => (
                <li key={item._id}>
                    {item.name}
                    <button onClick={() => onEdit(item)}>Edit Name</button>
                    <button onClick={() => onDelete(item._id)}>Dele</button>
                </li>
            ))}
        </ul>
    );
}

export default ItemList;
