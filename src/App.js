// src/App.jsx
import React, { useState, useEffect } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [expenses, setExpenses] = useState([]);

  // Load from local storage
  useEffect(() => {
    const data = localStorage.getItem('expenses');
    if (data) {
      setExpenses(JSON.parse(data));
    }
  }, []);

  // Save to local storage
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: uuidv4() }]);
  };

  const updateExpense = (updatedExpense) => {
    setExpenses(
      expenses.map((exp) => (exp.id === updatedExpense.id ? updatedExpense : exp))
    );
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((exp) => exp.id !== id));
  };

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <ExpenseForm onSave={addExpense} />
      <ExpenseList
        expenses={expenses}
        onUpdate={updateExpense}
        onDelete={deleteExpense}
      />
    </div>
  );
};

export default App;
