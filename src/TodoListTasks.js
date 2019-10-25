import React from 'react';
import './App.css';
import TodoListTask from "./TodoListTask";

class TodoListTasks extends React.Component {
    tasks;

    render = () => {
        let tasksElements = this.props.tasks.map(t => <TodoListTask
            task={t}
            changeTaskStatus={this.props.changeTaskStatus}
        />);

        return (
            <div className="todoList-tasks">
                {tasksElements}
            </div>
        );
    }
}

export default TodoListTasks;
