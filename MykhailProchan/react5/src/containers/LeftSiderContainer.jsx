import React from 'react'
import { connect } from 'react-redux'

import { LeftSider } from 'components/LeftSider'
import { addChatAction, chatsLoadAction } from '../actions/chats'

export class LeftSiderContainerClass extends React.Component {
  componentDidMount() {
    this.props.chatsLoadAction();
  }

  createRoom = (name) => {
    this.props.addChatAction({
      id: this.props.chats.entries.length,
      name,
      messages: []
    })
  }

  onChangeHandler = (event) => this.setState({ newRoomName: event.target.value })

  render() {
    return <LeftSider
      onCreate={this.createRoom}
      chats={this.props.chats}
    />
  }
}

function mapStateToProps(state) {
  const chats = state

  return {
    ...chats
  }
}

function mapDispatchToProps(dispatch) {
  return {
    chatsLoadAction: () => dispatch(chatsLoadAction()),
    addChatAction: (chat) => dispatch(addChatAction(chat))
  }
}

export const LeftSiderContainer = connect(mapStateToProps, mapDispatchToProps)(LeftSiderContainerClass)