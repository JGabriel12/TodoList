import { Trash } from 'phosphor-react'

import style from './Task.module.css'
import { useState } from 'react';

interface TaskContent  {
  taskTitle: string;
  onDeleteTask: (task: string) => void
  onChecked: (value: number) => void
}

export function Task({ taskTitle, onDeleteTask, onChecked}:TaskContent) {
  const [isChecked, setIsChecked] = useState(false) 


  function handleDeleteTask() {
    onChecked(-1)
    onDeleteTask(taskTitle)
  }

  function handleCheckedChange() {
    if(!isChecked ) {
      onChecked(1)
    } else {
      onChecked(-1)
    }

    setIsChecked(!isChecked)
  }

  return (
    <div className={style.taskList}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckedChange}
      />
      
      <p className={isChecked ? style.isChecked : style.checkedDefault}>
        {taskTitle}
      </p>
      <button onClick={handleDeleteTask}>
        <Trash size={24}/>
      </button>
    </div>
  )
}