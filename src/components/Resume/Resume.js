/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import Modal from '../Modal/Modal';
import ResumePDF from '../../assets/images/v.ushakova_resume.pdf';
import { ReactComponent as CloseIcon } from '../../assets/close.svg';
import s from './Resume.module.css';

class Resume extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => this.setState({ isModalOpen: true });

  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const { isModalOpen } = this.state;
    return (
      <div className={s.resume_div}>
        <button
          type="button"
          onClick={this.openModal}
          className={s.resume_btn}
        />
        {isModalOpen && (
          <Modal onClose={this.closeModal} className={s.modal_element}>
            <button
              type="button"
              onClick={this.closeModal}
              className={s.closeBTN}
            >
              <CloseIcon />
            </button>
            <iframe
              src={ResumePDF}
              title="resume"
              className={s.resume_pdf}
              width="220"
            />
          </Modal>
        )}
      </div>
    );
  }
}

export default Resume;
