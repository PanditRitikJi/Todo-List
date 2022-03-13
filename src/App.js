import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Plan from './plan';
import { Component } from 'react/cjs/react.development';
class App extends Component{
  state={
    items:[],
    text:""
  }
  handelChange=e=>{
    this.setState({text:e.target.value})
  }
  handelAdd = e =>{
    if(this.state.text!==""){
      const items = [...this.state.items,this.state.text]
      this.setState({items:items,text:""});
    }
  }
  handelDelete= (id) =>{
    console.log( id);
    const Olditems = [...this.state.items]
    console.log("olditems", Olditems);
    const items = Olditems.filter((element, i)=>{
      return i!== id;
    })
    console.log("newItems",items)
    this.setState({items:items});
  }
  render(){
    return(
      
    <div className="container-fluid my-5">
      <div className="row">
        <div className='col-sm-6 mx-auto text-white shadow-lg'>
          <h1 className='text-center'>Today's Plan</h1>
          <div className='row'>
            <div className="col-9">
              <input placeholder="write plan here" className='form-control' type='text' value={this.state.text} onChange={this.handelChange} />
            </div>
            <div className="col-2">
              <button className="btn btn-warning px-5 font-weight-bold" onClick={this.handelAdd}>Add</button>
            </div>
            <div className="container-fluid">
              <ul className='list-unstyled row m-5'>
                {
                  this.state.items.map((value,i)=>{
                    return <Plan key={i} id={i} value={value} sendData={this.handelDelete} />
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    )}
    }

export default App;
