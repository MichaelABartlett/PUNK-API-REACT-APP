import React from 'react';

import Beers from "./components/Beers"
import './App.css';

let PUNK_API = 'https://api.punkapi.com/v2/beers'

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      beers: []
    }
  }

// using promises
// componentDidMount() {
//   fetch(PUNK_API)
//   .then((response) => response.json())
//   .then(data => this.setState({
//     beers: data
//   }))
// }

// Async / Await
async componentDidMount() {
  let response = await fetch(PUNK_API);
  let beers = await response.json();
  this.setState({
    beers
  });
}

componentDidUpdate() {
  console.log( 'This is from state', this.state.beers)
}

  render() {
    return (
      <div>
        <h1>PUNK API / should be beer API</h1>
        <Beers beers={this.state.beers} />
      </div>
   );
  }
}

export default App;
