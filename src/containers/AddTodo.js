import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../redux/actions'

let AddTodo = ({dispatch,history}) => {
  let input
  console.log(history)
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
          history.push({
            pathname:'/'
          })
          
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo