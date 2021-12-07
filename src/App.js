//librerias
import './App.css';
import react from 'react';
import {Link,Routes, Route} from 'react-router-dom'; 
//componentes
import Home from './components/Home';
import Products from './components/Products';
import Login from './components/Login';
import NotFound from './components/NotFound';
import News from './components/News';



export default class App extends react.Component{
  constructor(props){
    super(props);
    this.state={
      logged:false,
      username:'',
    };
    this.updateState=this.updateState.bind(this);
  }
  async updateState(logged,username){
    await this.setState({
      logged:logged,
      username: username,
    });
    console.log(this.state);
  }


  renderLogin(){
    return (<div className='body-container'>
      <Login onTryLogin={this.updateState} />
    </div>
    );
  }

  renderApp(){
    return(
      <div>
        <div className='head-container'>
        <nav>
          <ul>
            <li>
            <Link to='/'>Home</Link>
            </li>
            <li>
            <Link to='/services'>services</Link>
            </li>
            <li>
            <Link to='/news'>news</Link>
            </li>
            <li>
            <Link to='/login'>login</Link>
            </li>
          </ul>
        </nav>
        </div>
        <div className='body-container'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/services' element={<Products />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='*'elememt={<NotFound/>}></Route>
          <Route path='/news' element={<News />}></Route>
        </Routes>
        </div>
      </div>
    );
  }
  render(){
    if(this.state.logged){
      return this.renderApp();
    }else{
      return this.renderLogin();
    }
  }
}