import React from 'react';
import { Link } from 'react-router-dom';
import {
  Text, Modal, Button, View,
} from 'react-materialize';


class Share extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: '',
    };
  }

  componentDidMount() {
    this.setState({
      location: `${window.location.protocol}://${window.location.host}/#`,
    });
  }

  render() {
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

        <Link to={this.props.location.pathname}>
          {this.state.location + this.props.location.pathname}
        </Link>
      </Modal>

    );
  }
}
export default Share;
