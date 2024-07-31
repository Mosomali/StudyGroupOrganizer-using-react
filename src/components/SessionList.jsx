import React, { useContext } from 'react';
import { StudyGroupContext } from '../context/StudyGroupContext';

const SessionList = ({ group }) => {
  const { dispatch } = useContext(StudyGroupContext);

  const handleRemoveSession = (sessionName) => {
    dispatch({
      type: 'REMOVE_SESSION',
      payload: { groupName: group.name, sessionName },
    });
  };

  return (
    <div>
      <h4 className="text-lg font-semibold mt-4">Session List for {group.name}</h4>
      <ul className="list-disc pl-5">
        {group.sessions.map((session, index) => (
          <li key={index} className="flex justify-between items-center">
            {session.name}
            <button
              onClick={() => handleRemoveSession(session.name)}
              className="bg-red-500 text-white py-1 px-2 rounded"
            >
              Remove Session
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SessionList;
