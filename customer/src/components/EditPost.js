import React,{Component} from "react";
import axios from "axios";



export default class EditPost extends Component{

    componentDidMount(){
        const id=this.props.match.params.id;
        axios.get(`/post/${id}`).then((res)=>{
        if(res.data.success){
            this.setState({
                topic:res.data.post.topic,
                description:res.data.post.description,
                postCategory:res.data.post.postCategory
            });
            console.log(this.state.post);
        }
        })
    }

    constructor(props){
        super(props);
        this.state={
            topic:"",
            description:"",
            postCategory:""
        }
    }
    
    handleInputChange=(e)=>{
        const{name,value}=e.target;
        this.setState({
            ...this.setState,
            [name]:value
        })
    }
    
    onSubmit=(e)=>{
        
        e.preventDefault();
        const id=this.props.match.params.id;
        const{topic,description,postCategory}=this.state;
        const data={
            topic:topic,
            description:description,
            postCategory:postCategory
        }

    
        console.log(data);
        axios.put(`/post/update/${id}`,data).then((res)=>{
            if(res.data.success){
                alert("Post Updated Successfully")
                this.setState({
                    topic:"",
                    description:"",
                    postCategory:""
            })
            }
        
        });
    }


    render(){
        return(
            <div>
               <form>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="text" className="form-control" value={this.state.topic} placeholder="Enter Title" onChange={this.handleInputChange}/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="text" className="form-control" value={this.state.description}  placeholder="Enter Description"onChange={this.handleInputChange}/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="text" className="form-control" value={this.state.postCategory} placeholder="Enter Category"onChange={this.handleInputChange}/>
  </div>
  
  <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>
  <i className="far fa-check-square"></i>&nbsp;Update </button>
</form> 
            </div>
        )
    }
}