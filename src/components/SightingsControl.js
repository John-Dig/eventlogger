import React from 'react';
import NewSightingsForm from './NewSightingsForm';
import SightingsList from './SightingsList';
import SightingsDetail from './SightingsDetail';

class SightingsControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainSightingsList: [],
      selectedSightings: null 
    };
  }

handleChangingSelectedSightings = (id) => { 
const selectedSightings = this.state.mainSightingsList.filter(sightings => sightings.id === id)[0];
this.setState({selectedSightings: selectedSightings});
}

  handleClick = () => {
    if (this.state.selectedSightings != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedSightings: null
      });
    } else {
      this.setState(prevState =>({formVisibleOnPage: !prevState.formVisibleOnPage}));
    }
    
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

    
    if (this.state.selectedSightings != null) {
      currentlyVisibleState = <SightingsDetail sightings = {this.state.selectedSightings} />
      buttonText = "Return to Sightings List"; 
    }



    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewSightingsForm onNewSightingsCreation={this.handleAddingNewSightingsToList} />;
      buttonText = "Return to sightings list";
    } else {
      currentlyVisibleState = <SightingsList sightingsList={this.state.mainSightingsList} onSightingsSelection={this.handleChangingSelectedSightings} />;
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