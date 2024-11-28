import { useState } from "react"
export const SuperLaiSir = () => {
    // 列表解構
    const [schools, setSchools] = useState([
        {
            schoolName:"教業",
            isLove: true
        },
        {
            schoolName:"培道",
            isLove: false
        }
    ])
    const [value ,setValue] = useState("")
    return (
        <>
            <h1>超級賴SIR</h1>
            <input value={value} onChange={(event) =>{
                setValue(event.target.value);
            }}/>
            <button onClick={()=>{
                setSchools([
                    ...schools,
                    value
                ])
            }}>
                確認
            </button>
            <button onClick={() => {
                const newSchoolNames = schools.filter((_, index) => index !== schools.length - 1)
                setSchools(newSchoolNames)
            }}>刪除</button>
            {
                schools.filter(function (schoolName) {
                    //return schoolName !== "教業"
                    return true
                }).map(function (school, index) {
                    return <SuperSchool 
                        key={index} 
                        schoolName={school.schoolName}
                        isLove={school.isLove}
                        />
                })
            }
        </>
    )
}

function SuperSchool(props) {
    return <>
        <h2>超級  {props.schoolName === "教業" ? "超級" : ""}   {props.schoolName}
        </h2>
        <input type='checkbox' onChange={() => {
            //setIsLove(!isLove)
        }} />
        {
            props.isLove ? <span>我愛{props.schoolName}</span> : null
        }
    </>
    /**
     * 如果schoolName是教業,  用span標籤, 顯示我愛教業
     */
}