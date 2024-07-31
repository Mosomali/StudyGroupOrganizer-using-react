import React, { useContext } from 'react';
import { StudyGroupContext } from '../context/StudyGroupContext';
import SessionManager from './SessionManager';

const GroupList = () => {
  const { state, dispatch } = useContext(StudyGroupContext);

  const handleRemoveGroup = (groupName) => {
    dispatch({ type: 'REMOVE_GROUP', payload: groupName });
  };

  return (
    <div>
      <h2 className="text-xl font-bold mt-6">Group List</h2>
      <ul className="list-disc pl-5">
        {state.groups.map((group, index) => (
          <li key={index} className="mb-4">
            <div className="flex justify-between items-center">
              {group.name}
              <button
                onClick={() => handleRemoveGroup(group.name)}
                className="bg-red-500 text-white py-1 px-2 rounded"
              >
                Remove Group
              </button>
            </div>
            <SessionManager group={group} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroupList;
