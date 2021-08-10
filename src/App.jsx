import React , {Component} from 'react'
import './App.css';
import { calcService } from './service/calcService';
export class App extends Component{

  state = {
    strExercise : '',
    solution: 0
  }

  setExercise(ev){
    const value = ev.target.value;
    this.setState({strExercise : value})
  }

  calcValue(){
    const {strExercise} = this.state
    const solution = calcService.calculator(strExercise);
    this.setState({solution: solution})
  }
  render(){
    const {solution} = this.state
    return (
      <div className="App">
        <input type="text" placeholder="Insert Exercise:" onChange={(ev)=>{this.setExercise(ev)}}/>
        <button onClick={()=>this.calcValue('12*45')}>Calc</button>
        <h1>{solution}</h1>
      </div>
    );
  }
}

