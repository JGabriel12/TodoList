import style from './ToDoList.module.css'
import { PlusCircle } from 'phosphor-react'
import { Task } from './Task'
import { ChangeEvent, FormEvent, useState } from 'react'


export function ToDoList() {

  const [tasks, setTasks] = useState<Array<string>>([])
  const [title, setTitle] = useState<string>('')

  function handleChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value)
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()
    setTasks([...tasks, title])
  }

  return (
    <div className={style.wrapper}>
      <form onSubmit={handleCreateNewTask}>
        <input
          onChange={handleChangeTitle}
          type="text" 
          placeholder='Adicione uma nova tarefa'/>
        <button type='submit'>
          Criar 
          <PlusCircle size={32}/>
        </button>
      </form>

      <div className={style.tasksCount}>
        <div>
          <span className={style.createdTask}>Tarefas criadas</span>
          <span className={style.numberTask}>5</span>
        </div>
        <div>
          <span className={style.finishedTask}>Concluídas</span>
          <span className={style.numberTask}>2 de 5</span>
        </div>
      </div>

      <div>
        {tasks.map(task => {
          return (
            <Task 
              key={task}
              taskTitle={task}
            />
          )
        })}
      </div>
    </div>
  )
}