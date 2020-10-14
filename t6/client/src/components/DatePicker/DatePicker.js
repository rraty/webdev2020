import React from 'react';
import classNames from 'classnames';
import { default as RDatePicker } from 'react-datepicker';

import styles from './DatePicker.module.scss';

// eslint-disable-next-line react/prop-types
const DatePicker = ({ className, ...props }) => (
  <RDatePicker
    className={classNames('form-control', className)}
    wrapperClassName={styles.DatePicker}
    {...props}
  />
);

export default DatePicker;
