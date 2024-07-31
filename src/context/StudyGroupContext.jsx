import React, { createContext, useReducer, useEffect } from 'react';

// Initial State
const initialState = {
  user: localStorage.getItem('username') || null,
  groups: JSON.parse(localStorage.getItem('groups')) || [],
  users: JSON.parse(localStorage.getItem('users')) || [],
};

// Action Types
const SET_USER = 'SET_USER';
const ADD_GROUP = 'ADD_GROUP';
const ADD_SESSION = 'ADD_SESSION';
const REMOVE_GROUP = 'REMOVE_GROUP';
const REMOVE_SESSION = 'REMOVE_SESSION';
const ADD_USER = 'ADD_USER';
const REMOVE_USER = 'REMOVE_USER';

// Reducer
function studyGroupReducer(state, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case ADD_GROUP:
      return { ...state, groups: [...state.groups, action.payload] };
    case ADD_SESSION:
      return {
        ...state,
        groups: state.groups.map(group =>
          group.name === action.payload.groupName
            ? { ...group, sessions: [...group.sessions, action.payload.session] }
            : group
        ),
      };
    case REMOVE_GROUP:
      return { ...state, groups: state.groups.filter(group => group.name !== action.payload) };
    case REMOVE_SESSION:
      return {
        ...state,
        groups: state.groups.map(group =>
          group.name === action.payload.groupName
            ? { ...group, sessions: group.sessions.filter(session => session.name !== action.payload.sessionName) }
            : group
        ),
      };
    case ADD_USER:
      return { ...state, users: [...state.users, action.payload] };
    case REMOVE_USER:
      return { ...state, users: state.users.filter(user => user !== action.payload) };
    default:
      return state;
  }
}

// Context
export const StudyGroupContext = createContext(initialState);

// Provider Component
export function StudyGroupProvider({ children }) {
  const [state, dispatch] = useReducer(studyGroupReducer, initialState);

  // Use useEffect to write to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('username', JSON.stringify(state.user));
    localStorage.setItem('groups', JSON.stringify(state.groups));
    localStorage.setItem('users', JSON.stringify(state.users));
  }, [state]);

  return (
    <StudyGroupContext.Provider value={{ state, dispatch }}>
      {children}
    </StudyGroupContext.Provider>
  );
}
