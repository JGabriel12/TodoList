import { Header } from './components/Header';
import { ToDoList } from './components/ToDoList';
import './global.css';

export function App() {

  return (
    <div>
      <Header />
      <main>
        <ToDoList />   
      </main>
    </div>
  );
}