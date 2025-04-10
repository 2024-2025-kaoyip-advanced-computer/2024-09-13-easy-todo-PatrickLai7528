import { Space, Table, Tag } from 'antd';
import { useState, useEffect } from 'react'
import { supabase } from './utils/supabase'
const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: (text) => <a>{text}</a>,
    },
    {
      title:"標題",
      dataIndex: 'title',
      key:"title",
    }
  ];

export const MyTodoList = () => {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    // 異步
    async function getTodos() {
      const { data } = await supabase.from('todo').select()
      setTodos(data)
      console.log(data)
    }

    getTodos()
  }, [])

    return <Table columns={columns} dataSource={todos} />
}