import { useSelector, useDispatch } from "react-redux";
// import { toggleTodo } from "../../redux/actions/todoActions";
import { actions , getInitialState} from "../../redux/reducers/todoReducer";
import { todoSelector } from "../../redux/reducers/todoReducer";
import styles from "./ToDoList.module.css";
import {useEffect} from "react";
import axios from "axios";

function ToDoList() {

  const todos=useSelector(todoSelector);
  console.log(todos);
  const dispatch = useDispatch();

  // const todos= store.getState().todos;

  useEffect(() => {
    dispatch(getInitialState());
      // fetch("http://localhost:4100/api/todos")
      //   .then(res=>res.json())
      //     .then(parsedJson=>{
      //       console.log(parsedJson);
      //     })
      // axios.get("http://localhost:4100/api/todos")
      //   .then(res=>
      //       {
      //         console.log(res.data);
      //         dispatch(actions.setInitialState(res.data));
      //       }
      //     );
  }, []);


  return (
    <div className={styles.container}>
    <ul>
      {todos.map((todo,index) => (
        <li className={styles.item} key={index}>
          <span className={styles.content}>{todo.title}</span>
          <span className={todo.completed ? styles.completed:styles.pending}>{todo.completed ? 'Completed': 'Pending'}</span>
          <button className="btn btn-warning"
          onClick={()=>{
            // console.log("[LOG]: Todo - TOGGLE Action dispatched");
            dispatch(actions.toggle(index))}}
          >Toggle</button>
          </li>
      ))}
    </ul>
    </div>
  );
}

export default ToDoList;