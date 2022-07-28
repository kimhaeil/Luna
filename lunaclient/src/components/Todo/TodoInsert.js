import {MdAdd} from 'react-icons/md'
import './Todoinsert.scss'

const TodoInsert = () => {
    return (
        <form className='TodoInsert'>
            <input placeholder='Insert JOB'/>
            <button type='submit'>
                <MdAdd/>
            </button>
        </form>
    );
}

export default  TodoInsert