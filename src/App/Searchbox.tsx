import { Form, Input } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import React, { Component } from 'react';

export default class Searchbox extends Component {
  render() {
    return (
      <div style={{ backgroundColor: '#F3CE56', padding: '1em' }}>
        <h1 style={{ fontWeight: 'bold', textAlign: 'left' }}>
          Where are you going?
        </h1>
        <Form>
          <FormItem>
            <label style={{ float: 'left', textAlign: 'left' }}>
              Pick-up Location?
            </label>
            <Input
              className="location"
              placeholder="city, airport, station, region and district..."
            />
          </FormItem>
        </Form>
      </div>
    );
  }
}
