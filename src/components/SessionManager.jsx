import React, { useContext } from 'react';
import SessionForm from './SessionForm';
import SessionList from './SessionList';
import { StudyGroupContext } from '../context/StudyGroupContext';

const SessionManager = ({ group }) => {
  const { dispatch } = useContext(StudyGroupContext);

  const addSession = (session) => {
    dispatch({
      type: 'ADD_SESSION',
      payload: { groupName: group.name, session },
    });
  };

  return (
    <div>
      <h4 className="text-lg font-semibold mt-4">Session Manager for {group.name}</h4>
      <SessionForm addSession={addSession} />
      <SessionList group={group} />
    </div>
  );
};

export default SessionManager;
