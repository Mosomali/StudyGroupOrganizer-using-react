import React, { useContext } from 'react';
import GroupForm from './GroupForm';
import GroupList from './GroupList';
import { StudyGroupContext } from '../context/StudyGroupContext';

const GroupManager = () => {
  const { state, dispatch } = useContext(StudyGroupContext);

  const addGroup = (group) => {
    dispatch({ type: 'ADD_GROUP', payload: group });
  };

  return (
    <div>
      <h2 className="text-xl font-bold mt-6">Group Manager</h2>
      <GroupForm addGroup={addGroup} />
      <GroupList />
    </div>
  );
};

export default GroupManager;
