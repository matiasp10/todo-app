import { useState } from 'react';
import styles from './TaskForm.module.css';

const TaskForm = ({ onAdd }) => {
  const [task, setTask] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    onAdd(task);
    setTask('');
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <button className={styles.btn}>+</button>
      <input
        className={styles.input}
        type="text"
        value={task}
        onChange={(event) => setTask(event.target.value)}
        placeholder="Your next task..."
      />
    </form>
  );
};

export default TaskForm;
