import React, { useContext } from 'react';
import { StudyGroupContext } from '../context/StudyGroupContext';

const UserList = () => {
  const { state, dispatch } = useContext(StudyGroupContext);

  const handleRemoveUser = (user) => {
    dispatch({ type: 'REMOVE_USER', payload: user });
  };

  return (
    <div>
      <h2 className="text-xl font-bold mt-6">User List</h2>
      <ul className="list-disc pl-5">
        {state.users.map((user, index) => (
          <li key={index} className="flex justify-between items-center">
            {user}
            <button
              onClick={() => handleRemoveUser(user)}
              className="bg-red-500 text-white py-1 px-2 rounded"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
