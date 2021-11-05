import React from 'react'
import './App.css';
import { CardList } from './components/card-list/card-list.component';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      monsters: [],
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(user => this.setState({ monsters: user}))
  }
  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters}/>
        
      </div>
    );
  }
}


export default App;
