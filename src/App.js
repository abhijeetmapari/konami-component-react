import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Konami from './components/Konami'

class App extends Component {
  constructor() {
    super();
    this.state={
      activated :false
    };
    this.toggleActivation=this.toggleActivation.bind(this)
  }

  toggleActivation(){
    if(this.state.activated===true){
      this.setState({activated:false});
    }else{
      this.setState({activated:true})
    }
  }

  handleChange(e){
    console.log(e.target.value);
    this.setState({name:e.target.value});
  }



  render() {
  return (
    <div className="App">
      <header className="App-header">
        
        <button onClick={this.toggleActivation}>Toggle konami code</button>

        {this.state.activated ? <Konami name={this.state.name}/> : <div>Konami code: deactivated</div>}
        
      </header>
      
    </div>
  );
  }
}

export default App;
