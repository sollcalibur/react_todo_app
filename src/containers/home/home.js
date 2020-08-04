import React from "react";
import "./home.css";
import { Link, NavLink } from "react-router-dom";

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            homeData: "This is the home page",
            todoItems: [
                {
                    id: 1,
                    todo: "sample todo",
                },
                {
                    id: 2,
                    todo: "sample todo 2",
                },
                {
                    id: 3,
                    todo: "sample todo 3",
                }
            ],
            todoInput: ""
        }
    }

    componentDidMount() {
    }

    componentDidUpdate(prevState) {
        if (prevState.todoItems !== this.state.todoItems) {
        }
    }

    onClickDelete = (e) => {
        const id = Number(e.target.value)
        const list = this.state.todoItems.slice();
        const newList = list.filter(item => item.id !== id)
        this.setState({
            todoItems: newList
        })
    }

    onChangeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        // prevent reloading of the page upon clicking form submit button
        e.preventDefault();

        let todoInput = {
            id: this.state.todoItems.length + 1,
            todo: this.state.todoInput
        }

        const newList = this.state.todoItems
        newList.push(todoInput);

        this.setState({
            todoInput: "",
            todoItems: newList
        })
    }

    render() {
        return (
            <div>
                <br />
                {/* NavLink allows styling of router-router link */}
                <NavLink to="/">Home &nbsp;</NavLink >
                <NavLink to="/about">About &nbsp;</NavLink >
                <br />
                <h3>
                    {this.state.homeData}
                </h3>

                <form onSubmit={this.handleSubmit}>
                    <label>Todo: &nbsp;</label>
                    <input type="text" id="todoInput" name="todoInput" onChange={this.onChangeInput} value={this.state.todoInput} />&nbsp;
                    <input type="submit" value="Add" disabled={this.state.todoInput === ""} />
                </form>
                <br />
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Item</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.todoItems.map((todoItem, index) => (
                            <tr key={index}>
                                <td>{todoItem.id}</td>
                                <td>{todoItem.todo}</td>
                                <td>
                                    <Link to={"/viewtodo/" + todoItem.id}><button className="button">Details</button></Link>
                                    <button className="button" title="Delete" value={todoItem.id} onClick={this.onClickDelete} disabled={this.state.todoItems.length === 1}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Home;