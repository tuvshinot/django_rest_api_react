import React, {Fragment} from 'react';
import Leads from './Leads';
import Form from './Form';
import Modal from '../UI/Modal/Modal';
import { connect } from 'react-redux';
import { toggleModal } from '../../store/actions/index';

const Dashboard = (props) =>  {
  let content = (
    <Fragment>
        <Modal show={props.show} clicked={props.toggleModal}>
          <Form modelCloser={props.toggleModal} />
        </Modal>
        <button className="btn btn-outline-info" style={{ marginBottom : '10px', marginTop : '10px' }} onClick={props.toggleModal}>Add new lead</button>
        <Leads />
    </Fragment>
  );

  return content;
}

const mapStateToProps = state => {
  return {
    loading : state.utulity.loading,
    show : state.utulity.show
  };
};

export default connect(mapStateToProps, { toggleModal })(Dashboard);
