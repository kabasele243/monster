import React from 'react'
import './App.css';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      monsters: [
        {
          name: 'Frank Einstein',
          id: '3ewnjsdc'
        },
        {
          name: 'Dracula',
          id: 'dkncksdc'
        },
        {
          name: 'Katakate',
          id: 'djnsdfjn'
        }
      ],
    }
  }
  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map(monster => <h1 key={monster.id}>{ monster.name }</h1>)
        }
      </div>
    );
  }
}


export default App;
