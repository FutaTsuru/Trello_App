import React from 'react'
import './Column.css';
import Task from '../Task/Task';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';

const Column = ({ tasks, setTasks }) => {
  return (
    <div className='column'>
        <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
            {tasks.map(task => (
                <Task key={task.id} id={task.id} title={task.title} completed={task.completed} setTasks={setTasks} />
            ))}
        </SortableContext>
    </div>
  )
}

export default Column;;