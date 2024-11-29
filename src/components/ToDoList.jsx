import {useToDoStore} from '../store/todo-store'

function ToDoList() {
    const toDoList = useToDoStore((state) => state.toDolist);
    const message = 'No ToDo';
    
    return (
        <div>
            <h4>ToDo list:</h4>
                <ul>
                    {toDoList.map((el,index)=>{
                        return(
                            <li key={index}>
                                <h3>Title: {el.title}</h3>
                                <p>Task: {el.task}</p>
                            </li>
                        )
                    })}
                </ul>
            
        </div>
        
    )
}

export default ToDoList