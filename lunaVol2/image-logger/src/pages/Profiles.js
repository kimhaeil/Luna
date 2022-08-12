import { useParams } from "react-router-dom";

const data = {
    value1:{
        name : 'test01',
        description : 'test01_Desc'
    },
    value2:{
        name : 'test02',
        description : 'test02_Desc'
    }
}

const Profiles = () =>{
    const params = useParams();
    const profile = data[params.username];

    return (
        <div>
            <h1>R</h1>
            {profile ? 
            (
                <div>
                    <h2>{profile.name}</h2>
                    <p>{profile.description}</p>
                </div>
            ) 
            :
            (
                <p>not exist</p>
            )}
        </div>   
    );
};

export default Profiles