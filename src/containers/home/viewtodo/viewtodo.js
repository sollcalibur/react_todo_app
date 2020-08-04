import React from "react";
// use when passing a component in route as prop instead of as child
// import { withRouter } from 'react-router';
import { NavLink } from "react-router-dom";

class ViewTodo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
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
        }
    }

    componentDidMount() {
        console.log(this.props.match)
    }

    render() {
        const urlArg = Number(this.props.match.params.id);
        const item = this.state.todoItems.filter(item => item.id === urlArg);
        let conditionallyRenderedElement = null;

        if (item.length !== 0) {
            conditionallyRenderedElement =
                <div>
                    <h5>ID: {item[0].id}</h5>
                    <h5>Todo: {item[0].todo}</h5>
                </div>;
        } else {
            conditionallyRenderedElement =
                <div>
                    <h3>Item Not Found</h3>
                </div>;
        }
        return (
            <div>
                <br />
                {/* NavLink allows styling of router-router link */}
                <NavLink to="/">Home &nbsp;</NavLink >
                <NavLink to="/about">About &nbsp;</NavLink >
                <br />
                <h3>Todo Details</h3>
                {conditionallyRenderedElement}
            </div>
        );
    }
}
// export default withRouter(ViewTodo);

export default ViewTodo;

