import React from 'react'
import PropTypes from 'prop-types'
import { Table, Button, Tag } from 'antd';
import  {withRouter } from 'react-router-dom';



function goAdd(history){
  history.push('/add')
}
const TodoList = ({ todos, onTodoClick, history }) => {
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
        <a href="javascript:;" onClick={onTodoClick.bind(this,text.id)}>删除</a>
      </span>
    ),
  }];
    return (
      <div>
        <Table columns={columns} dataSource={todos}/>
        <Button type="primary" onClick={goAdd.bind(this,history)}>添加</Button>
      </div>
    )
}


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

export default withRouter(TodoList)