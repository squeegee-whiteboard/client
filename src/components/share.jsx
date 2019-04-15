import React from 'react';
import {
  Text, Modal, Button, View,
} from 'react-materialize';


function Share(props) {
  return (


    <Modal
      header="Copy This Shareable Link"
      modal-footer="confirm"
      trigger={(
        <Button className="waves-effect waves-light btn-small">Share</Button>
        )}
      actions={(
        <div>
          <Button flat modal="close" waves="light" className="transparent">
            <i className="material-icons modalicon">
              close
            </i>
          </Button>
        </div>
        )}
    >

      {`${props.location.pathname}`}
    </Modal>

  );
}
export default Share;
