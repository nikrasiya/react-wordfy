import React from "react";
import { Icon, Form, Input } from "semantic-ui-react";
import "./SearchBar.css";

export default class SearchBar extends React.Component {
  state = { word: "" };

  onInputChange = event => {
    this.setState({ word: event.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSearchSubmit(this.state.word);
  };

  render() {
    return (
      <div className={"search-bar"}>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Field>
            <Input
              size="big"
              onChange={this.onInputChange}
              value={this.state.word}
              icon={<Icon onClick={this.onFormSubmit} name="search" inverted circular link />}
              placeholder="Search..."
              type={'text'}
            />
          </Form.Field>
        </Form>
      </div>
    );
  }
}
