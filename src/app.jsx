import React, { Component } from 'react';



class App extends Component {


  constructor(props) {
    console.log(props);
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {};
 
    // this.state = {
    //   amountDue: 0,
    //   amountReceived: 0,
    //   twenties: 0,
    //   tens: 0,
    //   fives: 0,
    //   ones: 0,
    //   quarters: 0,
    //   dimes: 0,
    //   nickels: 0,
    //   pennies: 0
    // };
  }

  handleClick() {
    var due = $('#amountDue').val();
    var received = $('#amountReceived').val();
    var change = Math.round((received-due)*100)/100;
    
    var twenties = Math.floor(change/20);
    console.log(twenties);
    change = Math.round((change-twenties*20)*100)/100;
    var tens = Math.floor(change/10);
    change = Math.round((change-tens*10)*100)/100;
    var fives = Math.floor(change/5);
    change = Math.round((change-fives*5)*100)/100;
    var ones = Math.floor(change);
    change = Math.round((change-ones)*100)/100;
    var quarters = Math.floor(change/0.25);
    change = Math.round((change - quarters*0.25)*100)/100;
    var dimes = Math.floor(change/0.1);
    change = Math.round((change - dimes*0.1)*100)/100;
    var nickels = Math.floor(change/0.05);
    change = Math.round((change-nickels*.05)*100)/100;
    var pennies = Math.floor(change/0.01);
    change = Math.round((change - pennies*0.01)*100)/100;

    this.setState({amountDue: due, amountReceived: received,
    twenties: twenties, tens: tens, fives: fives, ones: ones,
    quarters: quarters, dimes: dimes, nickels: nickels, pennies: pennies});
  }

  render() {
    return (
      <div>
        <div className ="page-header"><h1>Change Calculator</h1></div>
        
        <div className="panel panel-default" id="inputs">
          <div className ="panel-heading">Enter Information</div>
          <div className = "panel-body">
              <div className ="form-group">
                <label> How much is due? </label>
                <input type="text" className="form-control" name="amountDue" id="amountDue"/>
              </div>
              <div className ="form-group">
                <label> How much was received? </label>
                <input type="text" className="form-control" name="amountReceived" id="amountReceived"/>
              </div>
          </div>
          <div className ="panel-footer">
             <button type="button" className="btn btn-primary" id = "calculateButton"
             onClick = {this.handleClick} >Calculate</button> 
          </div>
        </div>

        <div className = "row" className = "panel panel-default" id="calculations">
          <div className="alert alert-success" id="success">The total change due is ${Math.round((this.state.amountReceived-this.state.amountDue)*100)/100}</div>
            <div className ="well"  ><b>Twenties</b><br></br><p className = "lead">{this.state.twenties}</p></div>
            <div className ="well"  ><b>Tens</b><br></br><p className = "lead">{this.state.tens}</p></div>
            <div className ="well"  ><b>Fives</b><br></br><p className = "lead">{this.state.fives}</p></div>
            <div className ="well"  ><b>Ones</b><br></br><p className = "lead">{this.state.ones}</p></div>
            <div className ="well"  ><b>Quarters</b><br></br><p className = "lead">{this.state.quarters}</p></div>
            <div className ="well"  ><b>Dimes</b><br></br><p className = "lead">{this.state.dimes}</p></div>
            <div className ="well"  ><b>Nickels</b><br></br><p className = "lead">{this.state.nickels}</p></div>
            <div className ="well"  ><b>Pennies</b><br></br><p className = "lead">{this.state.pennies}</p></div>
          </div>

      </div>
    );
  }
}

export default App;
