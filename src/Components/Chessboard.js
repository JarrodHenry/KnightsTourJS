import React, {Component} from 'react';
import cboard from './cb'
import './Chessboard.css';


class Chessboard extends Component {
  constructor(props) {
    super(props);
    //this.cb = new cboard();
    this.state = {cb: new cboard()}
    this.startTour = this.startTour.bind(this);
  }

  render() {
    var rows = [];

    for (var i=0; i< 64; i++)
    {
      let classId = "";


      if (i === this.state.cb.getCurrentSquare())
      {
        classId = "CurrentSquare";
      }
      else if (this.state.cb.isCurrentSquareVisited(i))
      {
        classId= "VisitedSquare";
      }
      else
      {
        classId = "Square";
      }
      rows.push(<div key={i} id={i} className={classId} ></div>)

    }

    return (
      <div className="Board">
        {rows}
        <button onClick={this.startTour}>Next Square</button>
      </div>
    )
  }

  startTour() {
    console.log(this.cb);
    this.state.cb.makeNextMove();
    this.setState({cb: this.state.cb})

  }
}


export default Chessboard
