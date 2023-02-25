import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {id, title} = todoDetails

  const clickDeleteButton = () => {
    deleteTodo(id)
  }
  return (
    <li className="list-item-style-eachtodos">
      <p>{title}</p>
      <button
        onClick={clickDeleteButton}
        className="delete-button-style"
        type="button"
      >
        Delete
      </button>
    </li>
  )
}

export default TodoItem
