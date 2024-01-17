import { useRef } from "react";
import Lists from "./Lists";

import "./TaskLists.css";

function TaskLists({ lists, onDeleteItem, onToggleLists, setLists }) {
  const sortedLists = [...lists].sort((a, b) => a.completed - b.completed);

  const dragTask = useRef(0);
  const dragOverTask = useRef(0);

  function handleSort() {
    const taskClone = [...lists];
    const temp = taskClone[dragTask.current];
    taskClone[dragTask.current] = taskClone[dragOverTask.current];
    taskClone[dragOverTask.current] = temp;
    setLists(taskClone);
  }

  return (
    <div className="tasklists">
      <ul>
        {sortedLists.map((list, index) => (
          <div
            key={list.id}
            draggable
            onDragStart={() => (dragTask.current = index)}
            onDragEnter={() => (dragOverTask.current = index)}
            onDragEnd={handleSort}
            // onDragOver={(e) => e.preventDefault()}
          >
            <Lists
              list={list}
              onDeleteItem={onDeleteItem}
              onToggleLists={onToggleLists}
            />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default TaskLists;
