import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import ResumePDF from '../../assets/images/v.ushakova_resume.pdf';
import { ReactComponent as CloseIcon } from '../../assets/close.svg';
import s from './Resume.module.css';

const Resume = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className={s.resume_div}>
      <button
        type="button"
        onClick={() => setModalOpen(true)}
        className={s.resume_btn}
      />
      {isModalOpen && (
        <Modal onClose={() => setModalOpen(false)} className={s.modal_element}>
          <button
            type="button"
            onClick={() => setModalOpen(false)}
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
};

export default Resume;
