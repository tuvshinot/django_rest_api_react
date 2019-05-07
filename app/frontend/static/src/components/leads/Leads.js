import React, { Component, Fragment, PureComponent } from 'react';
import {connect} from 'react-redux';
import { fetchLeads, deleteLead } from '../../store/actions';

export class Leads extends PureComponent {

  componentDidMount() {
    this.props.fetchLeads()
  }

  render() {
    let error = null;
    if(this.props.error) {
      error = []
      for(let key in this.props.error) {
        error.push(<p key={key}>{key} : {this.props.error[key].join(' ')}</p>)
      }
    }

    let leads = this.props.leads.map(lead => {
      return (
        <tr key={lead.id}>
            <td>{lead.id}</td>
            <td>{lead.name}</td>
            <td>{lead.email}</td>
            <td>{lead.message}</td>
            <td><button className="btn btn-outline-danger" onClick={() => this.props.deleteLead(lead.id)}>Delete</button></td>
        </tr>
      );
    });

    return (
      <Fragment>
        {error}
        <table className="table table-striped table-hover">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {leads}
          </tbody>
        </table>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    leads : state.leads.leads,
    error : state.error.error
  }
}

export default connect(mapStateToProps, { fetchLeads, deleteLead })(Leads);
