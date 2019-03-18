import React from "react";
import { Segment } from "semantic-ui-react";

export default class WordItem extends React.Component {
  render() {
    return (
      <div>
        <Segment textAlign="center" color="teal" stacked>
          <h3>{this.props.word.definition}</h3>
        </Segment>
      </div>
    );
  }
}
