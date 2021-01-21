import './App.css';
import React from "react";

function App() {
  return (
    <div className="App">
      <Title titleText="you is cool" url="//mig-moog.newgrounds.com" />
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
export default App;
