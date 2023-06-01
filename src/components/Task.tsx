import { Trash } from 'phosphor-react'

import style from './Task.module.css'

interface TaskContent  {
  taskTitle: string;
}

export function Task({ taskTitle }:TaskContent) {
  return (
    <div className={style.taskList}>
      <input type="checkbox"/>
        <p>{taskTitle}</p>
      <button>
        <Trash size={24}/>
      </button>
    </div>
  )
}