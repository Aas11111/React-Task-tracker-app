import "./Lists.css";

function Lists({ list, onDeleteItem, onToggleLists }) {
  return (
    <li>
      <input
        type="checkbox"
        value={list.completed}
        onChange={() => onToggleLists(list.id)}
      />
      <span style={list.completed ? { textDecoration: "line-through" } : {}}>
        {list.name} {list.task} {list.date}
      </span>
      <button onClick={() => onDeleteItem(list.id)}>❌</button>
    </li>
  );
}

export default Lists;
