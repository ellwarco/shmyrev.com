
import React, { Component } from 'react';
import PDF from 'react-pdf-js';
import PropTypes from 'prop-types';
import { Flex, Box } from 'grid-emotion';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import FileDownload from '@material-ui/icons/FileDownload';

import CVpdf from "../../../static/Shmyrev-CV-2018.pdf";

const style = {
  background: 'linear-gradient(45deg, #C51162 20%, #880E4F 90%)',
  borderRadius: 3,
  display: 'block',
  textAlign: 'center',
  color: '#fff',
  height: 48,
  padding: '10px 30px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
};

class MyCV extends React.Component {
  state = {};

  onDocumentComplete = (pages) => {
    this.setState({ page: 1, pages });
  }

  onPageComplete = (page) => {
    this.setState({ page });
  }

  handlePrevious = () => {
    this.setState({ page: this.state.page - 1 });
  }

  handleNext = () => {
    this.setState({ page: this.state.page + 1 });
  }

  renderPagination = (page, pages) => {
    let previousButton = <li className="previous" onClick={this.handlePrevious}><a href="#"><i className="fa fa-arrow-left"></i> Previous</a></li>;
    if (page === 1) {
      previousButton = <li className="previous disabled"><a href="#"><i className="fa fa-arrow-left"></i> Previous</a></li>;
    }
    let nextButton = <li className="next" onClick={this.handleNext}><a href="#">Next <i className="fa fa-arrow-right"></i></a></li>;
    if (page === pages) {
      nextButton = <li className="next disabled"><a href="#">Next <i className="fa fa-arrow-right"></i></a></li>;
    }
    return (
      <nav>
        <ul className="pager">
          {previousButton}
          {nextButton}
        </ul>
      </nav>
      );
  }

  render() {
    let pagination = null;
    if (this.state.pages) {
      pagination = this.renderPagination(this.state.page, this.state.pages);
    }
    return (
      <div>
        <PDF
          file={CVpdf}
          onDocumentComplete={this.onDocumentComplete}
          onPageComplete={this.onPageComplete}
          page={this.state.page}
        />
          <a style={style} href={CVpdf} download>Télécharger mon CV (actualisé 05/2018)</a>
      </div>
    )
  }
}



const styles = {
  drawerPaper: {
    width: 'auto',
    backgroundColor: '#fff',
    minHeight: '100vh',
    padding: '10px 30px',
    boxShadow: '0 0 0 5px rgba(255, 255, 255, .30)',
  }
};

class PdfDrawer extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
      <Button className={classes.button} variant="raised" color="primary" onClick={this.toggleDrawer('right', true)}>
      Mon CV vous intéresse ?
     </Button>
        <Drawer
      type="temporary"
      classes={{
        paper: classes.drawerPaper,
      }}
       anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('right', false)}
            onKeyDown={this.toggleDrawer('right', false)}
          >
           <MyCV />
          </div>
        </Drawer>
      </div>
    );
  }
}

PdfDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PdfDrawer);