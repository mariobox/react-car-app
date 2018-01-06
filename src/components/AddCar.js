import React, { Component } from 'react';

class AddCar extends Component {

    addNewCar(e) {
        e.preventDefault();
        var car = {
            model: this.model.value,
            picture: this.picture.value,
            blurb: this.blurb.value,
            engine: this.engine.value
        };
        this.props.addCar( car );
    }

    render() {
        return (
            <form className="car-form" onSubmit={(e) => this.addNewCar(e)}>
                <p>Add a Car</p>
                <input ref={(input) => this.model = input} type="text" placeholder="Model" />
                <input ref={(input) => this.picture = input} type="text" placeholder="Picture" />
                <input ref={(input) => this.engine = input} type="text" placeholder="Engine" />
                <textarea ref={(input) => this.blurb = input} placeholder="Description">
                </textarea>
                <button type="submit">Add Car</button>
            </form>
        );
    }
}

export default AddCar;