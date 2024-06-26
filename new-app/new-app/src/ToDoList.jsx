/*import { Component } from 'react'
import ToDo from './Todo'

class ToDoList extends Component {
    state = {
        input: '',
        tasks: JSON.parse(localStorage.getItem('tasks')) || []
    }

    handleAdd = () => {
        if (!this.state.input) return

        this.setState({ tasks: [...this.state.tasks, { taskName: this.state.input, completed: false }] })
    }

    handleRemove = (index) => {
        const tasks = [...this.state.tasks]

        tasks.splice(index, 1)

        this.setState({ tasks })
    }

    handleChange = (event) => {
        this.setState({ input: event.target.value })
    }

    handleToggle = (index) => {
        const tasks = [...this.state.tasks]

        tasks[index].completed = !tasks[index].completed

        this.setState({ tasks })
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (this.state.tasks !== prevState.tasks) {
            localStorage.setItem('tasks', JSON.stringify(this.state.tasks))
        }
    }

    render() {
        return (
            <div>
                <input value={this.state.input} onChange={this.handleChange} />
                <button onClick={this.handleAdd}>add</button>

                <ul>
                    {this.state.tasks.map((task, index) => {
                        return (
                            <ToDo 
                                key={index}
                                index={index}
                                task={task}
                                handleToggle={this.handleToggle}
                                handleRemove={this.handleRemove}
                            />
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default ToDoList;*/
import React, { useState, useEffect } from 'react';
import ToDo from './Todo';

const ToDoList = () => {
    const [input, setInput] = useState('');
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);

    const handleAdd = () => {
        if (!input) return;
        setTasks([...tasks, { taskName: input, completed: false }]);
        setInput('');
    };

    const handleRemove = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    const handleChange = (event) => {
        setInput(event.target.value);
    };

    const handleToggle = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
    };

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    return (
        <div>
            <input value={input} onChange={handleChange} />
            <button onClick={handleAdd}>add</button>

            <ul>
                {tasks.map((task, index) => (
                    <ToDo
                        key={index}
                        index={index}
                        task={task}
                        handleToggle={handleToggle}
                        handleRemove={handleRemove}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;


