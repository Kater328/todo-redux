import React from "react";

class FooterButton extends React.Component {

    render() {
        return (
            <li>
                <a href="#/" 
                    className={this.props.isActive ? "selected" : ""} 
                    onClick={() => this.props.onClick(this.props.item.id)}>
                    {this.props.item.title}
                </a>
            </li>
        );
    }
}

export default FooterButton;