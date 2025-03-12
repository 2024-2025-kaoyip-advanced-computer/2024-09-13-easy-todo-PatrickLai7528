import { useEffect, useState } from "react"
import { Button } from "antd"
import { Input } from "antd"
import { Card } from "antd";

export const LaiSirIsBest = () => {
    // 列表解構
    const [todo, setTodo] = useState([
        {
            schoolName:"教業",
            isLove: true
        },
        {
            schoolName:"培道",
            isLove: false
        }
    ])
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                setTodo(
                    json.map(item => {
                        return {
                            schoolName: item.title,
                            isLove: item.completed
                        }
                    })
                )
            })
    }  ,[])

    
    const [value ,setValue] = useState("")
    return (
        <div style={{
            display:'flex',
            flexDirection:'row',
            alignContents:"center",
            justifyContent:"center",
            height:"100vh",
            alignItems:"center"
            }}>
            <div>
            <h1>超級賴SIR</h1>
            <Input placeholder="請輸入一些東西~" value={value} onChange={(event) =>{
                setValue(event.target.value);
            }}/>
            <Button type="primary" onClick={()=>{
                setTodo([
                    ...todo,
                    value
                ])
            }}>
                確認
            </Button>
            <button onClick={() => {
                const newSchoolNames = todo.filter((_, index) => index !== todo.length - 1)
                setTodo(newSchoolNames)
            }}>刪除</button>
            {
                todo.filter(function (schoolName) {
                    //return schoolName !== "教業"
                    return true
                }).map(function (school, index) {
                    return <TodoItem 
                        key={index} 
                        onChange={(newSchool) =>{
                            let newSchools = [...todo];
                            newSchools[index] = newSchool;
                            setTodo(newSchools)
                        }}
                        schoolName={school.schoolName}
                        isLove={school.isLove}
                        />
                })
            }
            </div>
        </div>
    )
}

function TodoItem(props) {
    console.log(props)
    return <Card style={{ margin:"10px", padding:"10px" }}>
        <h2>超級  {props.schoolName === "教業" ? "超級" : ""}   {props.schoolName}
        </h2>
        <input checked={props.isLove} type='checkbox' onChange={() => {
            //setIsLove(!isLove)
            props.onChange({
                schoolName: props.schoolName,
                isLove: !props.isLove
            })
        }} />
        {
            props.isLove ? <span>我愛{props.schoolName}</span> : null
        }
    </Card>
    /**
     * 如果schoolName是教業,  用span標籤, 顯示我愛教業
     */
}