import './Task.css';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const Task = ({ id, title, completed, setTasks }) => {
    const {attributes, listeners, setNodeRef, transform, transition} = useSortable({ id });

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    }

    const handleCompleted = () => {
      console.log("チェックボックス押されたよ");
      setTasks(prevTasks =>
        prevTasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed }: task
        )
      );
    }

  return (
    <div ref={setNodeRef} {...attributes} {...listeners} style={style} className='task'>
        <input type="checkbox" className='checkbox' checked={completed} onChange={handleCompleted} onPointerDown={e => e.stopPropagation()} />
        {title}
    </div>
  )
}

export default Task