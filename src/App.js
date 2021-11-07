import React from 'react'
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import "@material-tailwind/react/tailwind.css";


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
  machine(){
    console.log(this, 'nga yeyo')
  }
  render() {
    const { monsters , searchfield } = this.state;
    
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchfield.toLowerCase()))
  
    return (
      <div className="App">
        <SearchBox placeholder="Search Monster" handleChange={ e => this.setState({ searchfield: e.target.value})} />
        <CardList monsters={filteredMonsters}/>
        {
          this.machine()
        }
        
      </div>
    );
  }
}


export default App;
