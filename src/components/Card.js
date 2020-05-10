import React, { Component } from 'react';
import '../styles/Card.css';

class Card extends Component {
    render() {
        const {name,username,email} = this.props;
        return (
            <div className="Card">
                <img src={`https://robohash.org/${username}`} alt="robot" />
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        );
    }
}

export default Card;
