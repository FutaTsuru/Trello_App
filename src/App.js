import { useState, useEffect } from 'react';
import './App.css';
import InputField from './components/Input/InputField';
import { closestCorners, DndContext} from '@dnd-kit/core';
import Column from './components/Column/Column';
import { arrayMove } from '@dnd-kit/sortable';

function App() {
  const [tasks, setTasks] = useState([
    {id: 1, title: "Reactの勉強", completed: false},
    {id: 2, title: "TypeScriptの勉強", completed: false},
    {id: 3, title: "UFJのWebテスト受験", completed: false},
  ]);

  useEffect(() => {
    console.log("🔥 tasks updated:", tasks);
  }, [tasks]);

  const getTaskPos = id => tasks.findIndex(task => task.id === id);

  const handleDragEnd = event => {
    const {active, over} = event;

    if(active.id === over.id) return;
    setTasks(tasks =>{
      const originalPos = getTaskPos(active.id);
      const newPos = getTaskPos(over.id);
      console.log("PosInfo", originalPos, newPos);
      return arrayMove(tasks, originalPos, newPos)
    })
  }

  return (
    <div className='App'>
      <h1>My Tasks ☑️</h1>
          <InputField tasks={tasks} setTasks={setTasks}/>
          <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
            <Column tasks={tasks} setTasks={setTasks} />
          </DndContext>
    </div>
  );
}

export default App;
