import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';

  
  class ConfirmationDialog extends React.Component {  
  
    handleCancel = () => {
      this.props.onClose();
    };
  
    handleOk = () => {
      this.props.onOk();
    };
  
    handleChange = (event, value) => {
      this.setState({ value });
    };
  
    render() {
  
      return (
        <Dialog
          maxWidth="sm"
          onEntering={this.handleEntering}
          aria-labelledby="confirmation-dialog-title"
          open={this.props.open}
          className="dialog"
        >
          <DialogTitle id="confirmation-dialog-title">Are you sure you want to go to the next prompt?</DialogTitle>
          <DialogContent>
              <h4>You wont be able to undo this!</h4>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCancel} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleOk} color="primary">
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      );
    }
  }

  const styles = theme => ({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    paper: {
      width: '80%',
      maxHeight: 435,
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    },
  });

  export default withStyles(styles)(ConfirmationDialog);