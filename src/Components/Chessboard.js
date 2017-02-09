import React, {Component} from 'react';
import cboard from './cb'
import './Chessboard.css';


class Chessboard extends Component {
  constructor(props) {
    super(props);
    //this.cb = new cboard();
    this.state = {cb: new cboard()}
    this.startTour = this.startTour.bind(this);
    this.resetTour = this.resetTour.bind(this);
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
        <button onClick={this.startTour}>Start Tour</button>
        <button onClick={this.resetTour}>Reset</button>
      </div>
    )
  }

  sleep(ms) {
    return new Promise(resolve=>setTimeout(resolve, ms));
  }
  async startTour() {
    console.log(this.cb);
    while (this.state.cb.moves <= 64)
    {
    this.state.cb.makeNextMove();
    await this.sleep(300);
    this.setState({cb: this.state.cb})
    }
  }
  resetTour() {
    this.state.cb.resetTour();
    this.setState({cb:this.state.cb});

  }

}


export default Chessboard
