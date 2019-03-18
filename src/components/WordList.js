import React from "react";
import WordItem from "./WordItem";
import { Grid, Container } from "semantic-ui-react";

export default class WordList extends React.Component {
  renderGrid = () =>
    this.props.words.map((word, index) => (
      <Grid.Column width={6} key={index}>
        <WordItem word={word} />
      </Grid.Column>
    ));

  render() {
    return (
      <div>
        <Container>
          <Grid centered>
            {this.renderGrid()}
          </Grid>
        </Container>
      </div>
    );
  }
}
