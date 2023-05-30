import style from './ToDoList.module.css'
import { PlusCircle } from 'phosphor-react'
import { Task } from './Task'

export function ToDoList() {
  return (
    <div className={style.wrapper}>
      <form>
        <input type="text" placeholder='Adicione uma nova tarefa'/>
        <button>
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

      <div >
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
    </div>
  )
}