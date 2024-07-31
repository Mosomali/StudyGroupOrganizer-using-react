import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { StudyGroupProvider } from './context/StudyGroupContext';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import GroupForm from './components/GroupForm';
import GroupList from './components/GroupList';

function App() {
  return (
    <StudyGroupProvider>
      <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Study Group Organizer</h1>
        <nav>
          <ul className="flex space-x-4 mb-4">
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/groups">Groups</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/users" element={<><UserForm /><UserList /></>} />
          <Route path="/groups" element={<><GroupForm /><GroupList /></>} />
          <Route path="/" element={<h2>Welcome to Study Group Organizer</h2>} />
        </Routes>
      </div>
    </StudyGroupProvider>
  );
}

export default App;
