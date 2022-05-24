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
    }
    
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then((json) => console.log(json));
    }
    render(){
        return (
            "dfdf"
        );
    }
}

export default Stores;