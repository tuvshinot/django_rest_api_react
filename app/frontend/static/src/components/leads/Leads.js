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
      console.log(this.props.error);
      error = []
      for(let key in this.props.error) {
        error.push(
          <div key={key} class="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>
              {key.toUpperCase()} : 
            </strong> 
            {typeof this.props.error[key] === 'object' && this.props.error[key].constructor === Array ? 
              this.props.error[key].join(' ') : 
              this.props.error[key]
              }
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        );
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
