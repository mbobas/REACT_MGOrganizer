/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DetailsTemplate from 'templates/DetailsTemplate';

const DetailsPage = ({ match }) => (
  <>
  <DetailsTemplate />
  {console.log(match)}
  {match.url}
  {match.params.id}
  </>
);


export default DetailsPage;
