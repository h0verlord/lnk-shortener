import React from 'react'
import createBrowserHistory from 'history/createBrowserHistory'


export default class Link extends React.Component {
    onLogout(){
        const history = createBrowserHistory()
        history.push('/')
    }
      render(){
        //   console.log(history.location)
            return (
                <div>
                    <button onClick={this.onLogout.bind(this)}>Log Out</button>
                </div>
            )
      }
}