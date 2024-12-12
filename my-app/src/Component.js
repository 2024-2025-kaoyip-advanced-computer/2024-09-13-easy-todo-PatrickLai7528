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
                        onChange={(newSchool) =>{
                            let newSchools = [...schools];
                            newSchools[index] = newSchool;
                            setSchools(newSchools)
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

function SuperSchool(props) {
    console.log(props)
    return <div style={{backgroundColor:"yellow", margin:"10px", padding:"10px"}}>
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
    </div>
    /**
     * 如果schoolName是教業,  用span標籤, 顯示我愛教業
     */
}