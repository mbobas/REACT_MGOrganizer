/* eslint-disable react/require-default-props */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import React from 'react'
import PropTypes from 'prop-types';
import Sidebar from 'components/oragnisms/Sidebar/Sidebar';


const UserPageTemplate = ({children, pageType}) => (
    <>
    <Sidebar pageType={pageType}/>
    {children}
    </>
)

UserPageTemplate.propTypes = {
    children: PropTypes.element.isRequired,
    pageType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

UserPageTemplate.defaultProps = { 
    pageType: 'notes',
};

export default UserPageTemplate;