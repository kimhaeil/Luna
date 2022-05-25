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
    
    componentDidMount(){
        fetch('http://127.0.0.1:8000/select/')
                .then(response => response.json())
                .then((response) => {
                    this.setState({
                        store_id : response.store_id
                    })
                });


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