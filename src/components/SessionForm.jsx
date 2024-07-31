import React, { useState } from 'react';
import { useContext } from 'react';
import { StudyGroupContext } from '../context/StudyGroupContext';

const SessionForm = ({ addSession }) => {
  const [sessionName, setSessionName] = useState('');
  const { dispatch } = useContext(StudyGroupContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (sessionName) {
      addSession({ name: sessionName });
      setSessionName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={sessionName}
        onChange={(e) => setSessionName(e.target.value)}
        placeholder="Enter session name"
        className="border p-2 rounded w-full mb-2"
      />
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
        Create Session
      </button>
    </form>
  );
};

export default SessionForm;
