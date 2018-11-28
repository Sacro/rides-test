import { Form, Input } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import axios from 'axios';
import React, { Component } from 'react';

import { SearchResultResponse } from './SearchResultResponse';

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

  async fetchSearchResults(
    search_term: string,
    number_of_results_required: number = 10
  ) {
    const url = `https://cors.io/?https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=${number_of_results_required}&solrTerm=${search_term}`;
    try {
      const result = await axios.get<SearchResultResponse>(url);
      return this.setState({ result });
    } catch (error) {
      return this.setState({ error });
    }
  }
}
