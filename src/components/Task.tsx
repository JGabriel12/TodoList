import { Trash } from 'phosphor-react'

import style from './Task.module.css'

interface TaskContent  {
  taskTitle: string;
  onDeleteTask: (task: string) => void
}

export function Task({ taskTitle, onDeleteTask }:TaskContent) {

  function handleDeleteTask() {
    onDeleteTask(taskTitle)
  }

  return (
    <div className={style.taskList}>
      <input type="checkbox"/>
      <p>{taskTitle}</p>
      <button onClick={handleDeleteTask}>
        <Trash size={24}/>
      </button>
    </div>
  )
}