import React from 'react';
import PropTypes from 'prop-types';
import './dashaddnew.css';
import { Modal, Button, Icon } from 'react-materialize';
import M from '../../node_modules/materialize-css/dist/js/materialize.min';

class BoardModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = { boardName: '' };

    this.doSubmit = this.doSubmit.bind(this);
  }

  doSubmit() {
    const { submitFunction } = this.props;
    const { boardName } = this.state;
    this.setState({ boardName: '' });
    submitFunction(boardName);
  }

  render() {
    const { boardName } = this.state;
    const { button } = this.props;
    return (
      <Modal
        options={{
          dismissable: false,
          onOpenStart: (elem) => { this.modal = M.Modal.getInstance(elem); },
          onOpenEnd: elem => elem.querySelector('input').focus(),
        }}
        header="Creating a new board"
        trigger={button}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            this.doSubmit();
            this.modal.close();
          }
        }}
        actions={(
          <div>
            <Button flat modal="close" waves="light" className="transparent" onClick={this.doSubmit}>
              <Icon modalicon>
                check
              </Icon>
            </Button>
            <Button flat modal="close" waves="light" className="transparent">
              <i className="material-icons modalicon">
                close
              </i>
            </Button>
          </div>
        )}
      >
        Enter New Board Name:
        <input
          type="text"
          name="firstname"
          onChange={e => this.setState({ boardName: e.target.value })}
          value={boardName}
        />
      </Modal>
    );
  }
}

BoardModal.propTypes = {
  submitFunction: PropTypes.func.isRequired,
  button: PropTypes.element.isRequired,
};

export default BoardModal;
