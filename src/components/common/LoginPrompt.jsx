import React from 'react';
import Modal from '@material-ui/core/Modal';
import styled from 'styled-components';
import { useHistory } from 'react-router';

const StyledPopup = styled.div`
  width: 350px;
  height: 350px;
  background-color: white;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginPrompt = ({ isOpen, setIsOpen }) => {
  const handleClose = () => {
    setIsOpen(false);
  };

  const history = useHistory()

  const redirectToLogin = () => {
    history.push('/login')
  }

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh'
        }}
      >
        <StyledPopup>
          <div>
            <h3>Please Login to continue</h3>
            <button type onClick={redirectToLogin}>Login</button>
          </div>
        </StyledPopup>
      </Modal>
    </div>
  );
};

export default LoginPrompt;
