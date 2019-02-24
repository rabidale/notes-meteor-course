import React from 'react';

import PrivateHeader from './PrivateHeader';

export default () => {
  return (
    <div>
      <PrivateHeader title="Meteor Project Boilerplate"/>
      <div className="page-content">
        Dashboard pafe content.
      </div>
    </div>
  );
};
