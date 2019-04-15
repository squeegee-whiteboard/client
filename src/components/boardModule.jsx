/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './dashaddnew.css';
import { Modal, Button } from 'react-materialize';
// import { changeBoard } from '../api';
// import { withRouter } from 'react-router';



class BoardModule extends React.Component {

  constructor(props) {
    super(props);
    this.boardFunction = this.boardFunction.bind(this);
    this.checkFunction = this.checkFunction.bind(this);
    this.state = { show: false, board_id: this.props.board_id };
    
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleClose.bind(this);
  }

   boardFunction(e) {
    const { submitFunction } = this.props;
    e.preventDefault(); // Prevent navigating away.
    const boardName = document.getElementById(`create_board_box_${this.props.board_id}`).value;
    console.log("board name: " + boardName);
    submitFunction(boardName);
    this.handleClose();
  }

  checkFunction() {
    const { submitFunction } = this.props;
    const boardName = document.getElementById(`create_board_box_${this.props.board_id}`).value;
    console.log("board name: " + boardName);
    submitFunction(boardName);
    this.handleClose();
  }

  handleShow(){
    this.setState({show: true});
  }

  handleClose(){
    this.setState({show: false});
  }

  render() {
    return (
      
      <Modal
        open={this.state.show}
        options={{onCloseEnd: this.handleClose}}
        header="Creating a new board"
        modal-footer="confirm"
        trigger={this.props.button}
        actions={(
          <div>
            <Button flat modal="close" waves="light" className="transparent" onClick={this.checkFunction}>
              <i className="material-icons modalicon">
                    check
              </i>
            </Button>
            <Button flat modal="close" waves="light" className="transparent">
              <i className="material-icons modalicon">
                    close
              </i>
            </Button>
          </div>
              )}
      >
        <form id="board_module_form" onSubmit={this.boardFunction}>
            Enter New Board Name:
          <input type="text" name="firstname" id={`create_board_box_${this.props.board_id}`} />
        </form>

      </Modal>

    );
  }
}
export default BoardModule;
