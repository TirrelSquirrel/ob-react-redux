import React from 'react';
import Proptypes from 'prop-types';

const Todo = ({onClick, completed, text, id}) => {
    return (
        <li onClick={onClick} style={{
            textDecoration: completed ? 'line-through' : 'none',
            textDecorationColor: completed ? 'green' : 'none',
            color: completed ? 'green' : 'white'
        }}>
            {id} - {text}
        </li>
    );
}

Todo.propTypes = {
    onClick: Proptypes.func.isRequired,
    completed: Proptypes.bool.isRequired,
    text: Proptypes.string.isRequired,
    id: Proptypes.number.isRequired
}
export default Todo;
