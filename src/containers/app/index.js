import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import { default as GrommetApp } from 'grommet/components/App'
import Headline from 'grommet/components/Headline'
import Image from 'grommet/components/Image'

export default class index extends Component {
  render() {
    return (
      <GrommetApp>
        <Headline>Welcome to React with Grommet</Headline>
        <Link to="/">Home</Link>
        <Link to="/about-us">About</Link>
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={About} />
      </GrommetApp>
    )
  }
}


// const App = () => (
//   <div>
//     <header>
      // <Link to="/">Home</Link>
      // <Link to="/about-us">About</Link>
//     </header>

//     <main>
      // <Route exact path="/" component={Home} />
      // <Route exact path="/about-us" component={About} />
//     </main>
//   </div>
// )

// export default App
