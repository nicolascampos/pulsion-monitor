import React from 'react';

/**
 * Component where the MIDI messages will be listed in a table.
 *
 * @param {Array} messages  The messages to be shown in the table.
 */
const MessageTable = ({ messages }) => {
  const messagesList = messages.map((message, index) => 
    <tr key={index}>
      <th><strong>{message.note}</strong></th>
      <th>{message.target.name}</th>
      <td>{message.velocity}</td>
    </tr>
  );
  return (
    <table>
      <tbody>{messagesList}</tbody>
    </table>
  );
};

export default MessageTable;