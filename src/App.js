



import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import Header from './components/Header/Header';
import TaskInput from './components/TaskInput/TaskInput';
import TaskList from './components/TaskList/TaskList';
import Search from './components/Search/Search';

function App() {
  const [showTaskInput, setShowTaskInput] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Provider store={store}>
      <div className="App">
        <Header onAddNewTask={() => setShowTaskInput(!showTaskInput)} />
        {showTaskInput && <TaskInput onClose={() => setShowTaskInput(false)} />}
         <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <TaskList searchQuery={searchQuery} />
      </div>
    </Provider>
  );
}

export default App;

