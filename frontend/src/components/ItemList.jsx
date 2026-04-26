import React from "react";

function ItemList({ items, onEdit, onDelete }) {
    return (
        <ul>
            {items.map((item) => (
                <li key={item._id}>
                    {item.name}
                    <button onClick={() => onEdit(item)}>Edit</button>
                    <button onClick={() => onDelete(item._id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}

export default ItemList;