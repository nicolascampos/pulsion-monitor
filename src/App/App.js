import React from 'react';

import Header from './components/Header/Header.js';
import MessageTable from './components/MessagesTable/MessagesTable.js';

import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      /**
      * Limit of MIDI messages to be shown.
      *
      * @type {Number}
      */
      messagesLimit: 50,
      /**
      * List of MIDI input devices.
      *
      * @type {Array}
      */
      inputDevices: [],
      /**
      * List of MIDI messages received.
      *
      * @type {Array}
      */
      MIDIMessages: [],
    };
  }
  componentDidMount() {
    this._getInputDevices();
  }
  render() {
    return (
      <div className="container">
        <Header></Header>
        <MessageTable
          inputDevices={this.state.inputDevices}
          messages={this.state.MIDIMessages}
        ></MessageTable>
      </div>
    );
  }
  /**
   * Callback for when a MIDI message is received.
   * 
   * @param {MIDIMessageEvent} message  The MIDI message received. 
   */
  onMIDIMessage(message) {
    const { MIDIMessages } = this.state;
    const midiMessage = {
      command: message.data[1],
      note: message.data[1],
      target: {
        name: message.currentTarget.name,
      },
      velocity: message.data[2],
    };

    if (MIDIMessages.length >= this.state.messagesLimit) {
      MIDIMessages.shift();
    }
    MIDIMessages.push(midiMessage);
    this.setState({ MIDIMessages });
  }
  /**
   * Request MIDI access to the browser and register input devices.
   * 
   * @access protected
   */
  _getInputDevices() {
    navigator.requestMIDIAccess().then((MIDIAccess) => {
      this.setState({ inputDevices: Array.from(MIDIAccess.inputs.values()) });
      this.state.inputDevices.forEach((device) => device.onmidimessage = this.onMIDIMessage.bind(this));
    });
  }
}

export default App;