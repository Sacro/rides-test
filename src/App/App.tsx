import './App.css';

import { Col, Layout, Row } from 'antd';
import React, { Component } from 'react';

import Searchbox from './Searchbox';

const { Content } = Layout;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Content>
          <Row>
            <Col span={8} offset={8}>
              <Searchbox />
            </Col>
          </Row>
        </Content>
      </div>
    );
  }
}

export default App;
