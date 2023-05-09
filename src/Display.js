import React,{Component} from "react";
export default class Display extends Component{

    state={
        name:"Welcome to display page.........."
    }
    render(){
        return <>
        <div>
            <center>
                <h1>Venkat{this.props.name}</h1>
            </center>
        </div>
        </>
    }
}