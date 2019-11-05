import React from 'react'
import '../App.css'

class JoinUs extends React.Component {
    render() {
      return (
        <div>
          <h3>Want to build your own MYtinerary?</h3>
          <div className="Account-options">
            <a  href="/login">Log in</a>
            <a  href="/createAccount">Create Account</a>
          </div>
        </div>
      );
    }
  }

  export default JoinUs