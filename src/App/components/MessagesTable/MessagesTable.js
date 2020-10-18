import React from 'react';

import './MessagesTable.scss';

/**
 * Component where the MIDI messages will be listed in a table.
 *
 * @param {Array} messages  The messages to be shown in the table.
 */
const MessageTable = ({ messages }) => {
  const messagesList = messages.map((message, index) => 
    <tr
      className="u-full-width"
      key={index}
    >
      <th>{message.note}</th>
      <th>{message.target.name}</th>
      <td>{message.velocity}</td>
    </tr>
  );

  return (
    <>
    <table className="messagesTable">
      <thead className="messagesTable_header">
        <tr>
          <th>Message</th>
          <th>Device name</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody className="messagesTable_body">{messagesList}</tbody>
    </table>
    </>
  );
};

export default MessageTable;