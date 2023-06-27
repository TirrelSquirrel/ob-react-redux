import React, {useRef} from 'react';
import Proptypes from "prop-types";


const TodoForm = ({submit}) => {

    const newText = useRef();

    return (
        <div>
            <h2>Create your TODOs</h2>
            <form onSubmit={(e) => {
                e.preventDefault();
                submit(newText.current.value)
                newText.current.value = '';
            }}>
                <input type='text' ref={newText}></input>
                <button type='submit'>
                    Create Todo
                </button>
            </form>
        </div>
    );
}

TodoForm.propTypes = {
    submit: Proptypes.func.isRequired
}

export default TodoForm;
