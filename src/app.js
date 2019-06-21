import React from "react";
import Form from "./form.js";
import Modal from "./components/modal";

import "./styles.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      people: [],
      selectedPerson: "",
      showPerson: false
    };
  }

  handleForm = (count, people, showPerson) => {
    this.setState({ count, people });
  };

  showPerson = person => {
    this.setState({ selectedPerson: person, showPerson: true });
  };

  closeModal = () => {
    this.setState({ showPerson: false });
  };

  render() {
    return (
      <>
        <Form prompt="Get some Star Wars Folks..." handler={this.handleForm} />
        <Modal condition={this.state.showPerson}>
          <div className="modal">
            <h3>Selected Character: {this.state.selectedPerson}</h3>
            <button onClick={this.closeModal}>Close</button>
          </div>
        </Modal>
        <ul>
          {Object.keys(this.state.people).map((person, idx) => {
            return (
              <li key={idx}>
                <a href="#" onClick={() => this.showPerson(person)}>
                  {person}
                </a>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default App;
