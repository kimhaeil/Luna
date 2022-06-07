import React, {Component} from 'react';


class Stores extends Component{
    constructor(){
        super();
        this.state= {
            store_id: 0,
            store_name : "",
            phone: "",
            email: "",
            street:"",
            city:"",
            state:"",
            zip_code:""
        };

        console.log("this constructor");
    }
 

    componentDidUpdate(){
        console.log("Did Update")
    }

    render(){
        return (
            <p>{this.state.store_id}</p>
        );
    }
}

export default Stores;