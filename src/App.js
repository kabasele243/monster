import React from 'react'
import './App.css';
import { CardList } from './components/card-list/card-list.component';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      monsters: [],
      searchfield: ''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(user => this.setState({ monsters: user}))
  }
  render() {
    const { monsters , searchfield } = this.state;
    
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchfield.toLowerCase()))
  
    return (
      <div className="App">
        <input type='search' placeholder='search monsters' onChange={e => this.setState({searchfield: e.target.value})}/>
        <CardList monsters={filteredMonsters}/>
        
      </div>
    );
  }
}


export default App;
