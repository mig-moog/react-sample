import './App.css';
import React from "react";

function App() {
  return (
    <div className="App">
      <Title titleText="WATCH DAWN OF WORM, coming this spring" url="https://www.newgrounds.com/art/view/mig-moog/dawn-of-worm" />
      <Paragraph/>
    </div>
  );
}

class Title extends React.Component {
  render() {
    let title = this.props.titleText ? this.props.titleText : "gorlo is cool";

    return (
      <div>
        <a href={this.props.url}>{title}</a>
      </div>
    );
  }
}

class Paragraph extends React.Component {
  render() {
    return (
      <div id="why">
        <p>So, you think you've seen good movies huh? Well you haven't seen anything like <strong>DAWN OF WORM</strong>, which releases this spring in theaters that aren't near you.
        </p>
      </div>
    );
  }
}

export default App;
