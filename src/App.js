import React, { Component } from 'react';
import classNames from 'classnames';
import './reset.css';
import './App.css';
import person1 from './person.jpg'
import person2 from './person-2.jpg'
import person3 from './person-3.jpg'
import person4 from './person-4.jpg'
import person5 from './person-5.jpg'
import person6 from './person-6.jpg'
import person7 from './person-7.jpg'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      activeSelected : ''
    }
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount(){
    global.document.addEventListener( 'click', this.handleClick, false )
  }
  componentWillUnmount(){
    global.document.removeEventListener( 'click', this.handleClick, false )
  }
  handleClick(event){
    if( event.target.className.includes('selected') && 
        this.state.activeSelected !== '' 
    ) this.setState( { activeSelected : '' } )
  }
  render() {
  let { activeSelected } = this.state
  const title = 'Inbox'
    return (
      <div className="App">
        <nav className={ classNames({
            'selected' : activeSelected === 'menu'
          }) } >
          <img alt="avatar" src={person1} className="avatar nav-item" />
          <div className="nav-items">
            <a className="nav-item"><i className="fas fa-user-friends"></i></a>
            <a className="nav-item"><i className="far fa-star"></i></a>
            <a className="nav-item"><i className="far fa-comment"></i></a>
          </div>
          <a className="nav-item"><i className="fas fa-cog"></i></a>
        </nav>
        <div className={ classNames({
            'main-container' : true,
            'selected' : activeSelected === 'menu'
          }) } >
          <header>
            <a className={ classNames({
            'hamburger' : true,
            'selected' : activeSelected === 'menu-button'
          }) } 
          onClick={ event => this.setState({ activeSelected : activeSelected === 'menu' ? '' : 'menu' }) }>
              <i className="fas fa-bars"></i>
            </a>
            <h2> {title} </h2>
          </header>

          <div className="chat">
            <img alt="avatar" src={person1}  className="avatar" />
            <div className="info">
              <h3>Andrew Parker</h3>
              <p className="msg">Lorem ipsum dolor sit amet, consectetur...</p>
              <p className="time"><i className="far fa-clock"></i> 2 days ago</p>
            </div>
          </div>
          <div className="chat">
            <img alt="avatar" src={person2}  className="avatar" />
            <div className="info">
              <h3>Lora Doe</h3>
              <p className="msg">Lorem ipsum dolor sit amet, consectetur... </p>
              <p className="time"><i className="far fa-clock"></i> 3 days ago</p>
            </div>
          </div>
          <div className="chat">
            <img alt="avatar" src={person3}  className="avatar" />
            <div className="info">
              <h3>Antonio Gonzalez</h3>
              <p className="msg">Lorem ipsum dolor sit amet, consectetur... </p>
              <p className="time"><i className="far fa-clock"></i> 7 days ago</p>
            </div>
          </div>
          <div className="chat">
            <img alt="avatar" src={person4}  className="avatar" />
            <div className="info">
              <h3>John Johnson</h3>
              <p className="msg">Lorem ipsum dolor sit amet, consectetur... </p>
              <p className="time"><i className="far fa-clock"></i> 9 days ago</p>
            </div>
          </div>
          <div className="chat">
            <img alt="avatar" src={person5}  className="avatar" />
            <div className="info">
              <h3>Ella Rey</h3>
              <p className="msg">Lorem ipsum dolor sit amet, consectetur... </p>
              <p className="time"><i className="far fa-clock"></i> 12 days ago</p>
            </div>
          </div>
          <div className="chat">
            <img alt="avatar" src={person6}  className="avatar" />
            <div className="info">
              <h3>Dmitry Ivanov</h3>
              <p className="msg">Lorem ipsum dolor sit amet, consectetur... </p>
              <p className="time"><i className="far fa-clock"></i> 36 days ago </p>
            </div>
          </div>
          <div className="chat">
            <img alt="avatar" src={person7}  className="avatar" />
            <div className="info">
              <h3>Mark Gibson</h3>
              <p className="msg">Lorem ipsum dolor sit amet, consectetur... </p>
              <p className="time"><i className="far fa-clock"></i> 40 days ago</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
