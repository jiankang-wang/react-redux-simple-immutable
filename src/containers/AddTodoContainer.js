import { connect } from 'react-redux'
import { setTodoText, addTodo } from '../action/index'
import AddTodo from '../components/AddTodo'
import { getText } from '../selectors/index'

const mapStateToProps = (state) => ({
  text: getText(state)
})

const mapDispatchToProps = (dispatch) => ({
  addTodo: text => dispatch(addTodo(text)),
  setTodoText: text => dispatch(setTodoText(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)