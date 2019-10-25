import React from 'react';
import './App.css';
import TodoListHeader from './TodoListHeader';
import TodoListTasks from './TodoListTasks';
import TodoListFooter from './TodoListFooter';

class App extends React.Component {

    state = {

        tasks: [
            { title: 'HTML', isDone: true, priority: 'Low' },
            { title: 'CSS', isDone: true, priority: 'Low' },
            { title: 'JS', isDone: true, priority: 'Medium' },
            { title: 'React', isDone: false, priority: 'High' }
        ],

        filterValue: 'All'

    };


    addTask = (newTitle) => {

        let newTask = {
            title: newTitle,
            isDone: false,
            priority: 'Low'
        };

        let newTasks = [...this.state.tasks, newTask];

        this.setState({
            tasks: newTasks
        })

    };


    changeFilter = (newFilterValue) => {

        this.setState({
            filterValue: newFilterValue
        })

    };
     changeTaskStatus = (task, isDone) => {
         let newTasks = this.state.tasks.map(t => {
             if(t !== task)
         {
             return t;
         } else {
                 return {...t, isDone: isDone}
         }
         });
         this.setState({
             tasks: newTasks
         })
     }

    render = () => {
        return (
            <div className="App">
                <div className="todoList">

                    <TodoListHeader
                        addTask={this.addTask}
                    />

                    <TodoListTasks
                        changeTaskStatus={this.changeTaskStatus}
                        tasks={this.state.tasks.filter(
                            (task) => {
                                if (this.state.filterValue === 'All') {
                                    return true;
                                }
                                if (this.state.filterValue === 'Active') {
                                    return !task.isDone;
                                }
                                if (this.state.filterValue === 'Completed') {
                                    return task.isDone;
                                }
                            }
                        )}
                    />

                    <TodoListFooter
                        filterValue={this.state.filterValue}
                        onChangeFilter={this.changeFilter}
                    />

                </div>
            </div>
        );
    };
};


export default App;