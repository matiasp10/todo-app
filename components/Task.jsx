import { useState } from 'react';
import Checkbox from './Checkbox';
import style from './Task.module.css';

const Task = ({ name, done, onToggle, onTrash, onRename }) => {
  const [editMode, setEditMode] = useState(false);
  return (
    <div className={`${style.task} ${done ? style.notDone : style.done}`}>
      <div className={style.wrapper}>
        <div className={style.container}>
          <Checkbox check={done} onClick={() => onToggle(!done)} />
        </div>
        {!editMode && (
          <div
            className={`${style.taskName}`}
            onClick={() => setEditMode((prev) => !prev)}
          >
            <span>{name}</span>
          </div>
        )}
        {editMode && (
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setEditMode(false);
            }}
          >
            <input
              type="text"
              value={name}
              onChange={(event) => onRename(event.target.value)}
            />
          </form>
        )}
      </div>
      <button className={style.trash} onClick={onTrash}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className={style.trashSVG}
        >
          <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
        </svg>
      </button>
    </div>
  );
};

export default Task;
