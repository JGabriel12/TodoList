import { ClipboardText } from 'phosphor-react'

import style from './EmpyToDoList.module.css'


export function EmpyToDoList() {
  return (
    <div className={style.wrapper}>
      <ClipboardText className={style.clipBoard} size={50}/>
      <div className={style.gap}>
        <h4>Você ainda não tem tarefas cadastradas</h4>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    </div>
  )
}