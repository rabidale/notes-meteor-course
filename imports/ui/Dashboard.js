import React from 'react';

import PrivateHeader from './PrivateHeader';
import NoteList from './NoteList';

export default () => {
  return (
    <div>
      <PrivateHeader title="Meteor Project Boilerplate"/>
      <div className="page-content">
        <NoteList/>
      </div>
    </div>
  );
};
