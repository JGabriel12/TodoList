import style from './ToDoList.module.css'
import { PlusCircle } from 'phosphor-react'
import { Task } from './Task'
import { ChangeEvent, FormEvent, useState } from 'react'


export function ToDoList() {

  const [tasks, setTasks] = useState<Array<string>>([])
  const [title, setTitle] = useState<string>('')
  const [checkedValue, setCheckedValue] = useState<number>(0)

  function handleCheckedValue(value: number){
    setCheckedValue(checkedValue + value)
  }

  function handleChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value)
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()
    setTasks([...tasks, title])
    setTitle('')
  }

  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeleteOne = tasks.filter(task => {
     return task !== taskToDelete
    })

    setTasks(tasksWithoutDeleteOne)
 }

  return (
    <div className={style.wrapper}>
      <form onSubmit={handleCreateNewTask}>
        <input
          onChange={handleChangeTitle}
          type="text"
          value={title}
          placeholder='Adicione uma nova tarefa'
          required
        />
        <button type='submit'>
          Criar 
          <PlusCircle size={32}/>
        </button>
      </form>

      <div className={style.tasksCount}>
        <div>
          <span className={style.createdTask}>Tarefas criadas</span>
          <span className={style.numberTask}>{tasks.length}</span>
        </div>
        <div>
          <span className={style.finishedTask}>Concluídas</span>
          <span className={style.numberTask}>{checkedValue} de {tasks.length}</span>
        </div>
      </div>

      <div>
        {tasks.map(task => {
          return (
            <Task 
              key={task}
              taskTitle={task}
              onDeleteTask={deleteTask}
              onChecked={handleCheckedValue}
            />
          )
        })}
      </div>
    </div>
  )
}