/*function ToDo({ index, task, handleToggle, handleRemove }) {
    return (
        <li key={index}>
            <span
                onClick={() => handleToggle(index)}
                style={{ textDecoration: task.completed && 'line-through' }}>
                {task.taskName}
            </span>
            <button onClick={() => handleRemove(index)}>remove</button>
        </li>
    )
}

export default ToDo;*/

const ToDo = ({ index, task, handleToggle, handleRemove }) => {
    return (
        <li key={index}>
            <span
                onClick={() => handleToggle(index)}
                style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.taskName}
            </span>
            <button onClick={() => handleRemove(index)}>remove</button>
        </li>
    );
};

export default ToDo;
