/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserPageTemplate from './UserPageTemplate';

const DetailsTemplate = () => (
  <UserPageTemplate>
    <h1>Note</h1>
    <p>
        Lorem 
    </p>
    <Link to="/">go back</Link>
  </UserPageTemplate>
);


export default DetailsTemplate;
