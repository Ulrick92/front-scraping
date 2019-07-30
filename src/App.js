import React, { Component, Fragment } from "react";
import axios from "axios";
import Textarea from "./component/textarea";
import Image from "./images/logo-folhomee.svg";
import "./App.css";

class App extends Component {
  state = {
    webSiteText: "",
    mounted: false
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    // Destructuring ce qui rend le code lisible
    const { webSiteText, mounted } = this.state;
    // Si le state "mounted" est true on affiche les informations voulues
    if (mounted) {
      return (
        <Fragment>
          <div className="container">
            <div className="logo">
              <img src={Image} alt="logo folhomee" />
            </div>
            {/* On passe les props au composant "Textarea"*/}
            <Textarea value={webSiteText} handleChange={this.handleChange} />
          </div>
        </Fragment>
      );
    } else {
      return <Fragment>Loading...</Fragment>;
    }
  }
  // Lorsque le composant sera monté les actions suivantes se produiront
  componentDidMount() {
    // Récupération du texte en faisant une requête sur la route "/scrap", ici on utilise axios
    // le texte est stocké dans le state "webSiteText"
    axios
      .get("http://localhost:3000/scrap")
      .then(response => {
        this.setState({
          webSiteText: response.data[0].text,
          mounted: true
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
}

export default App;
