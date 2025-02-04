import React, { useState, useContext } from 'react';
import { StudyGroupContext } from '../context/StudyGroupContext';

const UserForm = () => {
  const [username, setUsername] = useState('');
  const { dispatch } = useContext(StudyGroupContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username) {
      dispatch({ type: 'ADD_USER', payload: username });
      localStorage.setItem('username', username);
      setUsername('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your username"
        className="border p-2 rounded w-full mb-2"
      />
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
        Create User
      </button>
    </form>
  );
};

export default UserForm;
