import React from "react";
import Typed from "../api/Typed";
import words from "../api/words";
import SearchBar from "./SearchBar";
import WordList from "./WordList";
import Particle from "particlesjs";
import { Header, Container } from "semantic-ui-react";

import "./App.css";

export default class App extends React.Component {
  state = {
    words: [],
    strings: [
      "<i>definition</i>",
      "<i>explanation</i>",
      "<i>denotation</i>",
      "<i>interpretation</i>",
      "<i>explication</i>",
      "<i>connotation</i>"
    ]
  };

  componentDidMount() {
    Particle.init({
      selector: ".background",
      maxParticles: 100,
      color: ["#95afc0"],
      speed: 1,
      connectParticles: true
    });
  }

  onWordSubmit = async word => {
    const response = await words.get(`words/${word}`);
    let wordslimit = [];
    for (let i = 0; i < Math.min(response.data.results.length, 10); i++) {
      wordslimit.push(response.data.results[i]);
    }
    this.setState({ words: wordslimit });
  };

  render() {
    return (
      <div>
        <canvas className="background" />
        <Container>
          <div>
            <img
              className={"logo-img"}
              src={require("../images/wordfy.png")}
              alt={"wordfy-logo"}
            />
            <div className={"typed-heading"}>
              <Header as={"h3"} textAlign="center">
                Search for a <Typed strings={this.state.strings} />{" "}
              </Header>
            </div>
          </div>
          <SearchBar onSearchSubmit={this.onWordSubmit} />
          <WordList words={this.state.words} />
        </Container>
      </div>
    );
  }
}
