/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './dashaddnew.css';
import { Modal, Button } from 'react-materialize';

function DashAddNew() {
  return (
    <div className="card medium">
      <div className="card-content-add-new">
        {/* <div className="whitespace"> */}
        {/* <div className="btn-wrapper"> */}
        <Modal
          header="Creating a new board"
          modal-footer="confirm"
          trigger={(
            <Button className="btn-floating btn-large waves-effect waves-light">
              {' '}
              <i className="material-icons">
                    add
              </i>
            </Button>
                )}
          actions={(
            <div>
              <Button flat modal="close" waves="light" className="transparent">
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
          <form>
              Enter New Board Name:
            <input type="text" name="firstname" />
          </form>

        </Modal>
        {/* </div> */}
        {/* </div> */}
        {/* <span className="card-title bottom center grey-text text-ligten-4"> */}
        {/* Add a New Board */}
        {/* </span> */}
      </div>
    </div>
  );
}
export default DashAddNew;
