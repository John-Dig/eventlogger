import React from 'react';
import NewSightingsForm from './NewSightingsForm';
import SightingsList from './SightingsList';

class SightingsControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainSightingsList: []
    };
  }

  handleClick = () => {
    this.setState(prevState =>({formVisibleOnPage: !prevState.formVisibleOnPage}))
  }

  handleAddingNewSightingsToList = (newSightings) => {
    const newMainSightingsList = this.state.mainSightingsList.concat(newSightings);
    this.setState({mainSightingsList: newMainSightingsList,
      formVisibleOnPage: false
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewSightingsForm onNewSightingsCreation={this.handleAddingNewSightingsToList} />;
      buttonText = "Return to sightings list";
    } else {
      currentlyVisibleState = <SightingsList sightingsList={this.state.mainSightingsList} />;
      buttonText = "Add sighting";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  } 
}

export default SightingsControl;