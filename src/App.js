import './App.css';
import React, {Component} from "react";
import image from "./myimage/myimage.png"


class Profile extends Component {
  constructor (){
    super ()
    this.state = {

      imgSrc: image,
      FullName : "rick sanshez",
      Bio : " nihilistic  ",
      Profession :"focusing on sience and getting drunk",
     
      ToggleOn :  { isToggleOn: true },
      time: 0
    }
    
    this.handleClick = this.handleClick.bind(this)
     } 
    handleClick() {
    this.setState((prevState) => ({
      isToggleOn :!prevState.isToggleOn
    }))
  }

  

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ time: this.state.time + 1 });
    }, 1000);

  }
  
  render() { 
    
   let person = null
    if (this.state.isToggleOn) {
      person = (
        <div className = "main" >
          
        <h1>{this.state.FullName}</h1>
       <img src={this.state.imgSrc}    alt="" ></img>
        <h2>{this.state.Profession}</h2>
        <h3>{this.state.Bio}</h3>
        <h5 style={{color :"green" , fontSize : "40px"}}  > component is mounted for : {this.state.time} seconds</h5>
        </div>
      ); 
    }
    return (  
      <div >
        <button className="button"  onClick={this.handleClick} >
          {this.state.isToggleOn ? 'hide' : 'show'}
        </button>
        <div>{person}</div>
      </div>
      
    )
  }
}
 
export default Profile ;