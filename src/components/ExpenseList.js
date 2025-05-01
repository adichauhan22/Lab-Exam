// src/components/ExpenseList.jsx
import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ expenses, onUpdate, onDelete }) => {
  return (
    <div className="list">
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expense={expense}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default ExpenseList;
