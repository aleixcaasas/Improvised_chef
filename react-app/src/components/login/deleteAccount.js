import React from 'react';
import axios from 'axios';

class DeleteAccountButton extends React.Component {
  handleDeleteAccount = async () => {
    try {
      const response = await axios.post('http://localhost:3000/user/delete');
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return <button onClick={this.handleDeleteAccount}>Delete Account</button>;
  }
}

export default DeleteAccountButton;
