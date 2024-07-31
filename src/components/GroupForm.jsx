import React, { useState, useContext } from 'react';
import { StudyGroupContext } from '../context/StudyGroupContext';

const GroupForm = ({ addGroup }) => {
  const [groupName, setGroupName] = useState('');
  const { dispatch } = useContext(StudyGroupContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (groupName) {
      dispatch({ type: 'ADD_GROUP', payload: { name: groupName, sessions: [] } });
      setGroupName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={groupName}
        onChange={(e) => setGroupName(e.target.value)}
        placeholder="Enter group name"
        className="border p-2 rounded w-full mb-2"
      />
      <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">
        Create Group
      </button>
    </form>
  );
};

export default GroupForm;
