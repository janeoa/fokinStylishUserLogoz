import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import user_logo from './user_logo.jpg'
import Sketch from 'react-p5'

function drawCanvas(){
    // console.log(user_logo)
    let img;
    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(100, 100).parent(canvasParentRef)
        img = p5.loadImage("/images/user_logo.jpg");
    }
    const draw = p5 => {
        // 
        p5.image(img, 0, 0);
        img.resize(100,100);
      }
      
      return <Sketch setup={setup} draw={draw} />
}



class StylizedImage extends React.Component{
    render() {
        return(
            <div>
                <h1>INPUT</h1>
                <img src={user_logo} alt="input" width="100px" />
                <h1>OUTPUT</h1>
                {drawCanvas()}
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