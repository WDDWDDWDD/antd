import React from 'react'
import PropTypes from 'prop-types'
import { Table, Button, Tag } from 'antd';

const columns = [{
  title: '编号',
  dataIndex: 'id',
  key: 'id',
  render: text => <a href="javascript:;">{text}</a>,
}, {
  title: '内容',
  dataIndex: 'text',
  key: 'text',
}, {
  title: '状态',
  key: 'completed',
  render: (text, record) => (
   text.completed ? '完成':'未完成'
  ),
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href="javascript:;">删除</a>
    </span>
  ),
}];


const TodoList = ({ todos, onTodoClick }) => (
  <div>
    <Table columns={columns} dataSource={todos} />
  </div>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList