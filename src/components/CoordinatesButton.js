// Code CoordinatesButton Component Here
import React from 'react'
class CoordinatesButton extends React.Component {
    handleClick = (e) =>{
        let coordinates = [e.clientX , e.clientY]
        return this.props.onReceiveCoordinates(coordinates);
    }
    render(){
        return(
            <div>
                <button onClick={this.handleClick}></button>
            </div>
        )
    }
}
export default CoordinatesButton