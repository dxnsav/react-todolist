import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Context from '../context'
import './Todo.css'

const styles = {
    li: {
        display: 'flex', 
        justifyContent: 'space-between',
        allignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc', 
        borderRadius: '4px',
        marginBottom: '0.5rem',
        margin: 'o auto',
        boxShadow: '0 0 .5rem #ccc',
        fontFamily: 'Quicksand, sans-serif',
        color: '#8e939f',
        height: '2rem',
        verticalAlign: 'center'
    },
    input: {
        marginRight: '1rem',
        height: '2em', 
        width: '2em',
        color: '#ccc',
        borderRadius: '50%'
    }
}


function TodoItem({ todo, index, onChange}) {
    const {removeTodo} = useContext(Context)
    const classes = []

    if (todo.completed) {
        classes.push('done')
    }

    return (
        <li style={styles.li}>
            <span className={classes.join(' ')}>
                <input type="checkbox" style='checkbox-custom' checked={todo.completed} style={styles.input} onChange={() => onChange(todo.id)} />
                <strong> {index + 1} </strong>
                &nbsp;
                {todo.title}
            </span>

            <button className='rm' onClick={removeTodo.bind(null, todo.id)}>&times;</button>

        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}



export default TodoItem