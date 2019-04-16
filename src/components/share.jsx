import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import {
  Button,
  Modal,
  NavItem,
  Icon,
} from 'react-materialize';
import './share.css';


class Share extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: '',
    };
  }

  componentDidMount() {
    this.setState({
      location: `${window.location.protocol}//${window.location.host}/#`,
    });
  }

  render() {
    const { location: { pathname } } = this.props;
    const { location: winLocation } = this.state;

    return (
      <Modal
        header="Copy This Shareable Link"
        modal-footer="confirm"
        trigger={(
          <NavItem>
            <Icon left>share</Icon>
            Share
          </NavItem>
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
        <Link to={pathname}>
          {winLocation + pathname}
        </Link>
      </Modal>
    );
  }
}

Share.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(Share);
