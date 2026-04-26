import React, { useEffect, useState } from "react";
import { getItems, createItem, updateItem, deleteItem } from "./api";

import ItemForm from "./components/ItemForm";  // ✅ FIXED
import ItemList from "./components/ItemList";
function App() {
  const [items, setItems] = useState([]);
  const [editItem, setEditItem] = useState(null);

  const fetchItems = async () => {
    const res = await getItems();
    setItems(res.data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleSubmit = async (name) => {
    if (editItem) {
      await updateItem(editItem._id, { name });
      setEditItem(null);
    } else {
      await createItem({ name });
    }
    fetchItems();
  };

  const handleEdit = (item) => {
    setEditItem(item);
  };

  const handleDelete = async (id) => {
    await deleteItem(id);
    fetchItems();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>CRUD App</h2>

      <ItemForm onSubmit={handleSubmit} editItem={editItem} />

      <ItemList
        items={items}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;