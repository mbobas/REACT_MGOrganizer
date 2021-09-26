/* eslint-disable react/prop-types */
import React from 'react';
import Sidebar from 'components/oragnisms/Sidebar/Sidebar';


const UserPageTemplate = ({children}) => (
    <>
    <Sidebar />
    {children}
    </>
)

export default UserPageTemplate;