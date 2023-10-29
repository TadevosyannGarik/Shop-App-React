import React, { Component } from "react"
import { FaTrash } from "react-icons/fa"

export class Order extends Component {
    render() {
        return (
            <div className='item'>
                <img src={"./img/" + this.props.item.image} alt="" />
                <p>{this.props.item.title}</p>
                <b>{this.props.item.price}$</b>
                <FaTrash className="delete-icon" onClick={() => this.props.onDelete(this.props.item.id)}/>
            </div>
        )
    }
}

export default Order