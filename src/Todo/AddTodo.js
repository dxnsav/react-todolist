import React, {useState} from 'react'
import PropTypes from 'prop-types'

import './Todo.css'
import '../index.css'

function useInputValue(defaultValue = '') {
    const [value, setValue] = useState(defaultValue)

    return {
        bind: {
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value
    }
}

function AddTodo({ onCreate }) {
    const input = useInputValue('')

    function submitHandler(event) {
        event.preventDefault()

        if (input.value().trim) {
            onCreate(input.value())
            input.clear()
        }
    }

    return (
        <form style={{paddingBottom: '1.5rem', margin: '0 auto', width: '600px' }} onSubmit={submitHandler} >
            <input 
                style={{
                    width: '500px', 
                    height: '2rem',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    backgroundColor: '#3fe599',
                    border: 'none',
                    color: '#fff',
                    fontFamily: 'Quicksand, sans-serif'
                }} 
                type={'text'} 
                placeholder={'What have for today?'}
                className='input-group' 
                {...input.bind} 
            />
            <button style={{ 
                width: '2.25rem', 
                height: '2.25rem', 
                textAllign: 'center',
                backgroundColor: '#3fe599',
                border: 'none',
                color: '#fff',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                fontFamily: 'Quicksand, sans-serif'
            }} type='submit' className='input-group'> >>
            </button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo