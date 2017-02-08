import React, {Component} from 'react';
import './Chessboard.css'

class Chessboard extends Component {


  render() {
    var rows = [];

    for (var i=0; i< 64; i++)
    {
      rows.push(<div onClick={() => {this.logClick()}} key={i} id={i} className="Square" ></div>)

    }

    return (
      <div className="Board">
        {rows}
      </div>
    )
  }

  logClick(){
    console.log("Logged click on square " );
  }
}


export default Chessboard
