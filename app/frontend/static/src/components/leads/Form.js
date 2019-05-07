import React, {Component} from 'react';
import { connect } from 'react-redux';
import { toggleModal, addLead } from '../../store/actions';

class Form extends Component {

  state = {
    name : '',
    email : '',
    message : ''
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
    this.props.addLead(this.state);
    this.props.toggleModal()
  };

  onChangeHandler = (e) => {
    this.setState({ [e.target.name] : e.target.value })
  };

  render() {
    const { name, email, message } = this.state; 
    let content = (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Lead</h2>
        <form onSubmit={this.onSubmitHandler}>
          <div className="form-group">
            <label>Name</label>
            <input className="form-control" type="text" name="name" onChange={this.onChangeHandler} value={name} />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input className="form-control" type="email" name="email" onChange={this.onChangeHandler} value={email} />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea className="form-control" type="text" name="message" onChange={this.onChangeHandler} value={message} />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    );


    return content;
  }
}

const mapStateToProps = state => {
  return {
    loading : state.utulity.loading
  };
};

export default connect(mapStateToProps, { toggleModal, addLead })(Form);