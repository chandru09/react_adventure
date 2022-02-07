import React from "react";
import styled from "styled-components";

import { MdClose } from "react-icons/md";
import "./Form.css";

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: baseline;
`;

const ModalWrapper = styled.div`
  width: 500px;
  height: 450px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;

  position: relative;
  z-index: 10;
  border-radius: 10px;
`;
const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
`;
const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;
export const Modal = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal ? (
        <Background>
          <ModalWrapper showModal={showModal}>
            <ModalContent>
              <form className="form">
                <h3>Login / SignUp</h3>
                <div className="form-inputs">
                  <label className="form-label">E-mail</label>
                  <input
                    className="form-input"
                    type="email"
                    name="email"
                    placeholder="Enter your e-mail"
                  />
                </div>
                <div className="form-inputs">
                  <label htmlFor="" className="form-label">
                    Password
                  </label>
                  <input
                    className="form-input"
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                  />
                </div>
                <button className="form-input-btn" type="submit">
                  Login
                </button>
                <span className="form-input-login">
                  Not have an account? SignUp <a href="/sign-up">here</a>
                </span>
              </form>
            </ModalContent>
            <CloseModalButton
              arial-label="close"
              onClick={() => setShowModal((prev) => !prev)}
            />
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};
