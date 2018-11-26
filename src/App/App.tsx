import React, { Component } from 'react';
import { Layout } from 'antd';
import './App.css';

const { Content } = Layout;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Content>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            Content
          </div>
        </Content>
      </div>
    );
  }
}

export default App;
