import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import user_logo from './user_logo.jpg'


class StylizedImage extends React.Component{
    render() {
        return(
            <div>
                <h1>INPUT</h1>
                <img src={user_logo} alt="input" width="100px" />
                <h1>OUTPUT</h1>
                <canvas width="100" height="100">
                    
                </canvas>
                <StylizedImageOption/>
                <StylizedImageOption/>
                <StylizedImageOption/>
            </div>
        )
    }
}

class StylizedImageOption extends React.Component{
    render(){
        return(
            <button>1</button>
        )
    }
}

ReactDOM.render(
  <StylizedImage />,
  document.getElementById('root')
);