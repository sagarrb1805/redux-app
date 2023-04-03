import React, { Component } from 'react'

export class PostForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            title: '',
            body: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

   onChange(e){
        this.setState({[e.target.name]:e.target.value})
        console.log(this.state.title, this.state.body)
    }
    onSubmit(e){

    }
  render() {
    return (
      <div>
        <form>
            <div>
                
                <input type='text' name='title' placeholder='Title Name*' onChange={this.onChange} value={this.state.title}/>
            </div>
            <br/>
            <div>
                
                <textarea name='body' placeholder='Content of the post' onChange={this.onChange} value={this.state.body}/>
            </div>
            <br/>
            <button type='submit' onSubmit={this.onSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}

export default PostForm
