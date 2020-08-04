import React from "react";
import { NavLink } from "react-router-dom";

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageTitle: "This is the about page.",
            pageContent: "Not much going on here. This page exists only to demonstrate routing in react"
        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <br />
                <NavLink to="/">Home &nbsp;</NavLink >
                <NavLink to="/about">About &nbsp;</NavLink >
                <br />
                <h3>{this.state.pageTitle}</h3>
                <h5>{this.state.pageContent}</h5>
            </div>
        );
    }
}

export default About