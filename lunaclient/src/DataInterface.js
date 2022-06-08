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
 

    componentDidUpdate(){
        console.log("Did Update")
    }

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