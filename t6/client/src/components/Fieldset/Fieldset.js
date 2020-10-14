import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Fieldset.module.scss';

const propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

const defaultProps = {
  title: '',
  className: '',
  children: [],

};

const Fieldset = ({ title, className, children }) => (
  <>
    <fieldset className={classNames(styles.Fieldset, className)}>
      <legend><h2>{title}</h2></legend>
      <div>
        {children}
      </div>
    </fieldset>
  </>
);

Fieldset.defaultProps = defaultProps;
Fieldset.propTypes = propTypes;

export default Fieldset;
