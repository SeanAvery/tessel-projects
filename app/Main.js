import React, { Component } from 'react'
import {
  VictoryChart,
  VictoryLine,
  VictoryTheme
} from 'victory'
import ws from 'ws'

export default class Main extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidlMount() {
    this.socket = new ws('ws://localhost:3344')
    this.socket.onopen = (socket) => {
      console.log('#### Client connected to server', socket)
    }
    this.socket.onmessage = (e) => {
      console.log('#### Received msg', e.data)
      this.setState(prevState => {
        return {
          data: prevState.data.push(e.data)
        }
      })
    }
  }

  render() {
    return (
      <div style={containerStyle}>
        <div style={panelStyle}>
          <h3>49 Bogart #41 Climate Stats</h3>
          <VictoryChart theme={VictoryTheme.material}>
            <VictoryLine
              data={this.state.data}
            />
          </VictoryChart>
        </div>
      </div>
    )
  }
}

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#F5F5F5',
  height: '100%',
  width: '100%'
}

const panelStyle = {
  textAlign: 'center',
  width: 800,
  height: 500,
  backgroundColor: 'white',
  borderRadius: 5
}
