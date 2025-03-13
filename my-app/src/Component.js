import { useEffect, useState } from "react"
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { Button, Input, Card, List, Tag, Checkbox, Layout, Typography } from "antd"

const { Header, Content } = Layout;
const { Title } = Typography;

export const LaiSirIsBest = () => {
    // 列表解構
    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                setTodos(
                    json.map(item => {
                        return {
                            id: item.id,
                            title: item.title,
                            completed: item.completed
                        }
                    })
                )
            })
    }, [])


    const [value, setValue] = useState("")

    return (
        <Layout style={{padding:20, minHeight:"100%"}}>
            <Header>
                <Title level={2} style={{color:"white"}}>Todo List App</Title>
            </Header>
            <Content style={{height:"100%"}}>
                <Input placeholder="請輸入一些東西~" value={value} onChange={(event) => {
                    setValue(event.target.value);
                }} />
                <Button type="primary" onClick={() => {
                    setTodos([
                        ...todos,
                        value
                    ])
                }}>
                    確認
                </Button>
                <div style={{ maxHeight: "80vh" }}>
                    <List
                        dataSource={todos}
                        renderItem={(todo) => {
                            return <TodoItem
                                onToggle={todo => {
                                    setTodos(todos.map(x => {
                                        if (x.id === todo.id) {
                                            return {
                                                ...x,
                                                completed: !todo.completed
                                            }
                                        } else {
                                            return x
                                        }
                                    }))
                                }}
                                todo={todo} />
                        }}
                    />
                </div>
            </Content>
        </Layout>
    )
}

function TodoItem(props) {
    const { todo, onToggle } = props;
    return <List.Item
        actions={[
            todo.completed ? (
                <CheckCircleOutlined />
            ) : (
                <CloseCircleOutlined />
            )
        ]}
    >
        <List.Item.Meta
            avatar={
                <Checkbox
                    checked={todo.completed}
                    onChange={() => onToggle(todo)}
                />
            }
            title={
                <span className={todo.completed ? 'line-through text-gray-400' : ''}>
                    {todo.title}
                </span>
            }
            description={
                <Tag color={todo.completed ? 'success' : 'warning'}>
                    {todo.completed ? 'Completed' : 'Pending'}
                </Tag>
            }
        />
    </List.Item>
}