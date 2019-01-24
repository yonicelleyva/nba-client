import React, {Component} from 'react';
import AllStandingsTable from './AllStandingsTable';
import ConfStandingsTable from './ConfStandingsTable';
import {Button, ButtonToolbar} from 'react-bootstrap';

class Standings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeButton: 'all'
    };

    this.handleAllClick = this.handleAllClick.bind(this);
    this.handleConfClick = this.handleConfClick.bind(this);
    this.handleDivClick = this.handleDivClick.bind(this);
  }
  
  renderButtons(activeButton) {
    const buttonStyle = {
      all: 'default',
      conf: 'default',
      div: 'default'
    }

    buttonStyle[activeButton] = 'primary';

    return (
      <div className="button-center">
        <ButtonToolbar>
          <Button bsSize="large" 
                  bsStyle={buttonStyle.all}
                  onClick={this.handleAllClick}>
            All
          </Button>
          <Button bsSize="large" 
                  bsStyle={buttonStyle.conf}
                  onClick={this.handleConfClick}>
            Conf
          </Button>
          <Button bsSize="large" 
                  bsStyle={buttonStyle.div}
                  onClick={this.handleDivClick}>
            Div
          </Button>
        </ButtonToolbar>
      </div>
    ); 
  }

  renderTable(activeButton) {
    switch(activeButton) {
      case 'all':
        return( 
          <AllStandingsTable />
        ); 
      case 'conf':
        return( 
          <ConfStandingsTable />
        ); 
      case 'div':
        // code block
        break;
      default:
        break;
    }
  }

  handleAllClick() {
    this.setState(state => ({
      activeButton: 'all'     
    }));
  }

  handleConfClick() {
    this.setState(state => ({
      activeButton: 'conf'     
    }));
  }

  handleDivClick() {
    this.setState(state => ({
      activeButton: 'div'
    }));
  }

  render() {
    const { activeButton } = this.state;
    return (
      <div className="standings">
        <h1 className="text-center">Standings</h1>
        {this.renderButtons(activeButton)}
        {this.renderTable(activeButton)}
      </div>
    );
  }
}

export default Standings