import React from 'react';
import s from './AbsoluteWrapper.module.css';

const AbsoluteWrapper = ({ children }) => {
  return <div className={s.absolute_wrapper}>{children}</div>;
};

export default AbsoluteWrapper;
