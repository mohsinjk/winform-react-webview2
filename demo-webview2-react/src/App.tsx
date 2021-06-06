import React from 'react';
import qs from 'query-string';

import './App.css';

class App extends React.Component<{}, { value: any, value1: any }> {
  constructor(props:any) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
    const data = qs.parse(window.location.search);
    
    this.state = { value: '', value1: data.value1};

  }

  handleChange(event:any) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event:any) {

    let testObj = {
      data: this.state.value,
    };

    (window as any).chrome.webview.postMessage(JSON.stringify(testObj));

    event.preventDefault();
  }

  render() {
    return (  
      <div className="App">
        <h1>MicroFrontEnd (MFE)</h1>
        <h3>{this.state.value1}</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            Message:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
  
  export default App;
