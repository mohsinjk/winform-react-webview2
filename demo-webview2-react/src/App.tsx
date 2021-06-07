import React from 'react';
import qs from 'query-string';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PrimarySearchAppBar from './PrimarySearchAppBar';
import './App.css';

class App extends React.Component<{}, { mfeData: any, winformData: any }> {
  constructor(props:any) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
    const data = qs.parse(window.location.search);
    
    this.state = {winformData: data.winformData,  mfeData: '',};

  }

  handleChange(event:any) {
    this.setState({mfeData: event.target.value});
  }

  handleSubmit(event:any) {
    const data={
      winformData:this.state.winformData,
      mfeData:this.state.mfeData
    };

    (window as any).chrome.webview.postMessage(JSON.stringify(data));
    event.preventDefault();
  }

  render() {
    return (
     
      <div className="App">
         <PrimarySearchAppBar></PrimarySearchAppBar>
        <h1>MicroFrontEnd</h1>
        <h3>{this.state.winformData}</h3>
        <form onSubmit={this.handleSubmit} autoComplete="off">
          <TextField id="standard-basic" label="Message" value={this.state.mfeData} onChange={this.handleChange}/>
          <Button variant="contained"  type="submit" color="secondary">Send</Button>
        </form>
      </div>
    );
  }
}
  
  export default App;
