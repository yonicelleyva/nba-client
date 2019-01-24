import React, {Component} from 'react';
import ReactTable from 'react-table';
import nbaApi from '../../api/nbaApi';
import TEAMS from '../../api/teams';
import LoadingSpinner from '../common/LoadingSpinner';

class AllStandingsTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      loading: true,
      data: [],
      columns: [{
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
      }]
    };
  }

  componentDidMount() {
    nbaApi.getAllStandings()
    .then(res => {
      const standings = res.league.standard.teams;
      const teamStandings = standings.map(standing => {
        standing.team = TEAMS.find(team => {
          return standing.teamId === team.teamId;
        })
        return standing;
      })
      this.setState({
        loading: false,
        data: teamStandings
      });
    })
    .catch(err => {
      this.setState({
        loading: false,
        error: err
      });
    })
  }

  renderTable(loading, columns, data) {
    if (!loading) {
      return (
        <div className="react-table">
          <ReactTable
            data={data}
            columns={columns}
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
        {this.renderTable(loading, columns, data)}
      </div>
    );
  }
}

export default AllStandingsTable