import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  firstNameBtn = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  lastNameBtn = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="firstNameLastName">
          <div className="names-container">
            <button
              onClick={this.firstNameBtn}
              className="button"
              type="button"
            >
              Show/Hide Firstname
            </button>
            {firstName && <p className="name">Joe</p>}
          </div>
          <div className="names-container">
            <button onClick={this.lastNameBtn} className="button" type="button">
              Show/Hide Lastname
            </button>
            {lastName && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
