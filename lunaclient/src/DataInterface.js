import React, {Component} from 'react';


class InspectionPouchList extends Component{
    constructor(){
        super();
        // this.state= {
        //     store_id: 0,
        //     store_name : "",
        //     phone: "",
        //     email: "",
        //     street:"",
        //     city:"",
        //     state:"",
        //     zip_code:""
        // };
        this.state = {
            inspectionPouchList: []            
        }

        console.log("this constructor");
    }
<<<<<<< HEAD
 

    componentDidUpdate(){
        console.log("Did Update")
    }
=======
    
    componentDidMount(){
        fetch('http://127.0.0.1:8000/select/')
                .then(response => response.json())
                .then(data => this.setState ({
                    inspectionPouchList: data
                }));
            }
>>>>>>> 4dd1171be7e9f4c668457164260cd82af2d18121

    render(){
        const {inspectionPouchList} = this.state;
        console.log(this.state)
        return (
            <div>
                Test
            </div>
        );
    }
}

export default InspectionPouchList;