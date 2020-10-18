import React from 'react';

/**
 * The header of the app.
 */
const Header = ({ appTitle }) => {
  return (
    <section className="header">
      <h1 className="title">Pulsion Monitor</h1>
      <h4>A stupid simple MIDI monitor.</h4>
    </section>
  );
};

export default Header;