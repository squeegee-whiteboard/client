import React from 'react';
import './dashcanvas.css';
import PropTypes from 'prop-types';
import BoardModule from '../components/boardModule';
import { changeBoard }  from '../api';



class DashCanvas extends React.Component {
  constructor(props) {
    super(props);
    this.renameBoard = this.renameBoard.bind(this);
    this.deleteBoard = this.deleteBoard.bind(this);

    const renameButton = (<div className="option">
      <i className="material-icons left">edit</i>
      <p>Rename</p>
    </div>);



    this.state = {
      theModal: <BoardModule submitFunction={this.renameBoard} button={renameButton} board_id={this.props.board_id}/>,
      title: this.props.title,
      existent: true,
    };
  }

  renameBoard(value) {
    const { board_id } = this.props;
    console.log("This is kinda working...");
    this.setState({title: value})
    changeBoard.name(localStorage.getItem('JWT'), value, board_id).then((result) => {
      console.log(result);
      // const { history } = this.props;
      // history.push(`/whiteboard/${result.board_id}/`);
    });
  };

  deleteBoard() {
    this.setState({existent: false});
    changeBoard.deleteBoard(localStorage.getItem('JWT'), this.props.board_id);
  }


  render() {
    if (!this.state.existent) return null;
    const { title } = this.state;
    return (
      <div className="card">
        <div className="card-content">
          <div className="whitespace" />
          <span className="card-title activator grey-text text-darken-4 center" id="board-name-title">
              {title}
            <i className="material-icons right" id="more-options-icon" >more_vert</i>
          </span>
        </div>
        <div className="card-reveal">
          <div className="menu-wrapper">
            <div className="holder" />
            <div className="card-title white-text">
              <i className="material-icons right" id="close">close</i>
            </div>
            <span>
              {this.state.theModal}
              <div className="option">
                <i className="material-icons left">share</i>
                <p>Share</p>
              </div>
              <div className="option" onClick={this.deleteBoard}>
                <i className="material-icons left">delete</i>
                <p>Delete</p>
              </div>
            </span>
          </div>
        </div>
      </div>

    );
  }
}

DashCanvas.propTypes = {
  title: PropTypes.string.isRequired,
};

export default DashCanvas;
