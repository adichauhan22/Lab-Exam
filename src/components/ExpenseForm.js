// src/components/ExpenseForm.jsx
import React, { useState } from 'react';

const initialFormState = {
  title: '',
  amount: '',
  category: '',
  date: '',
  paymentMethod: '',
};

const ExpenseForm = ({ onSave }) => {
  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...formData, amount: parseFloat(formData.amount) });
    setFormData(initialFormState);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
      <input name="amount" type="number" placeholder="Amount" value={formData.amount} onChange={handleChange} required />
      <input name="category" placeholder="Category" value={formData.category} onChange={handleChange} required />
      <input name="date" type="date" value={formData.date} onChange={handleChange} required />
      <input name="paymentMethod" placeholder="Payment Method" value={formData.paymentMethod} onChange={handleChange} required />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
