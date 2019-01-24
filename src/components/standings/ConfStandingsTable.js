import React, {Component} from 'react';
import ReactTable from 'react-table';
import nbaApi from '../../api/nbaApi';
import TEAMS from '../../api/teams';
import LoadingSpinner from '../common/LoadingSpinner';

class ConfStandingsTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      loading: true,
      data: {
        eastConfStandings: [],
        westConfStandings: []
      },
      columns: [
        {
          Header: 'Team',
          accessor: 'team.fullName', // String-based value accessors!
          // width: 300
        },
        {
          Header: 'Win',
          accessor: 'win' // String-based value accessors!
        },
        {
          Header: 'Loss',
          accessor: 'loss' // String-based value accessors!
        },
        {
          Header: 'Win %',
          accessor: 'winPct' // String-based value accessors!
        }
      ]
    }
  }

  componentDidMount() {
    nbaApi.getConferenceStandings()
    .then(res => {
      const east = res.league.standard.conference.east;
      const west = res.league.standard.conference.west;
      this.setState({
        loading: false,
        data: {
          eastConfStandings: this.getStandings(east),
          westConfStandings: this.getStandings(west)
        }
      });
    })
    .catch(err => {
      this.setState({
        loading: false,
        error: err
      });
    })
  }

  getStandings(conf) {
    console.log(conf)
    return conf.map(standing => {
      standing.team = TEAMS.find(team => {
        return standing.teamId === team.teamId;
      })
      return standing;
    })
  }

  renderTable(loading, columns, data, conf) {
    if (!loading) {
      return (
        <div className="react-table">
          <ReactTable
            data={data}
            columns={[{Header: conf, columns: columns}]}
            sortable={false}
            showPagination={false}
            defaultPageSize={data.length}
            loading={loading}
          />
        </div>
      );
    }
  }

  render() {
    const { loading, columns, data } = this.state;

    return (
      <div>
        <LoadingSpinner loading={loading}/>
        {this.renderTable(loading, columns, data.eastConfStandings, 'East')}
        {this.renderTable(loading, columns, data.westConfStandings, 'West')}
      </div>
    );
  }
}

export default ConfStandingsTable