// src/components/ExpenseItem.jsx
import React, { useState } from 'react';

const ExpenseItem = ({ expense, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedExpense, setEditedExpense] = useState({ ...expense });

  const handleChange = (e) => {
    setEditedExpense({ ...editedExpense, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onUpdate({ ...editedExpense, amount: parseFloat(editedExpense.amount) });
    setIsEditing(false);
  };

  return (
    <div className="card">
      {isEditing ? (
        <>
          <input name="title" value={editedExpense.title} onChange={handleChange} />
          <input name="amount" value={editedExpense.amount} type="number" onChange={handleChange} />
          <input name="category" value={editedExpense.category} onChange={handleChange} />
          <input name="date" value={editedExpense.date} type="date" onChange={handleChange} />
          <input name="paymentMethod" value={editedExpense.paymentMethod} onChange={handleChange} />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <h3>{expense.title}</h3>
          <p>Amount: ${expense.amount}</p>
          <p>Category: {expense.category}</p>
          <p>Date: {expense.date}</p>
          <p>Payment: {expense.paymentMethod}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
      <button onClick={() => onDelete(expense.id)}>Delete</button>
    </div>
  );
};

export default ExpenseItem;
