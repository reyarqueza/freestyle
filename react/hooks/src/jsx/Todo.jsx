//import cx from 'classnames';
import React, { useState, useEffect } from 'react';

export default function TodoList() {
  const [inputText, setInputText] = useState('');
  const [tasks, updateTasks] = useState([]);

  function handleTextInput(e) {
    setInputText(e.target.value);
  }

  function addToTasks() {
    if (!inputText) {
      //alert('Input cannot be empty.');
      return;
    }
    updateTasks([...tasks, {text: inputText, done: false}]);
    setInputText('');
  }

  function markTaskDone(index) {
    let updatedTasks = [...tasks];

    updatedTasks[index].done = updatedTasks[index].done === 'is-done' ? 'todo' : 'is-done';
    updateTasks([...updatedTasks]);
  }

  function isTaskDone(index) {
    return tasks[index].done === 'is-done' ? 'is-done' : 'todo';
  }

  return (
      <>
          <div>
              <h2>
                  Todo List
              </h2>
              <input type="text" value={inputText} onChange={handleTextInput} />
              <button onClick={addToTasks}>Add</button>
              <p>{tasks.filter(task => task.done !== 'is-done').length} remaining out of {tasks.length} tasks</p>
              <ul>
                {tasks.map((task, index) => <li className={`${isTaskDone(index)}`} onClick={() => markTaskDone(index)} key={index}>{task.text}</li>)}
              </ul>
          </div>
          <style>{`
              .is-done {
                  text-decoration: line-through;
              }
          `}</style>
      </>
  );
}
