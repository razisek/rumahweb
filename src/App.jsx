import './App.css';
import { useState } from 'react';
import Article from './component/Article';
import FormInput from './component/FormInput';
import Users from './component/Users';
import Auth from './component/Auth';

function App() {
  const [activeComponent, setActiveComponent] = useState('users');

  document.title = 'Rachma Azis - Rumahweb Test';

  return (
    <div className="container mx-auto mt-10">
      <nav className="mb-4">
        <ul className="flex space-x-4 items-center">
          <li>
            <button
              onClick={() => setActiveComponent('users')}
              className={`text-blue-500 hover:text-blue-700 ${activeComponent === 'users' ? 'font-bold' : ''}`}
            >
              Users
            </button>
          </li>
          <li className="text-gray-400">|</li>
          <li>
            <button
              onClick={() => setActiveComponent('form')}
              className={`text-blue-500 hover:text-blue-700 ${activeComponent === 'form' ? 'font-bold' : ''}`}
            >
              Form Input
            </button>
          </li>
          <li className="text-gray-400">|</li>
          <li>
            <button
              onClick={() => setActiveComponent('articles')}
              className={`text-blue-500 hover:text-blue-700 ${activeComponent === 'articles' ? 'font-bold' : ''}`}
            >
              Articles
            </button>
          </li>
          <li className="text-gray-400">|</li>
          <li>
            <button
              onClick={() => setActiveComponent('auth')}
              className={`text-blue-500 hover:text-blue-700 ${activeComponent === 'auth' ? 'font-bold' : ''}`}
            >
              Authentication
            </button>
          </li>
        </ul>
      </nav>
      {activeComponent === 'users' && <Users />}
      {activeComponent === 'form' && <FormInput />}
      {activeComponent === 'articles' && <Article />}
      {activeComponent === 'auth' && <Auth />}
    </div>
  );
}

export default App;