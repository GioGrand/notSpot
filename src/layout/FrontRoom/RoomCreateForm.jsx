import React, { Component } from 'react'

class RoomCreateForm extends Component {
  render() {
    return (
      <div className="list2">
        <form>
          <label>
            <input type="text" name="name" placeholder="Type here" />
          </label>
        </form>
      </div>
    )
  }
}
export default RoomCreateForm