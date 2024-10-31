import { useState } from "react"
export const SuperLaiSir = () => {
    // 列表解構
    const [schoolNames, setSchoolNames] = useState(["教業", "培道", '培正', '鏡平', '勞校'])
    //const schoolNames = 
    return (
        <>
            <h1>超級賴SIR</h1>
            <button onClick={() => {
                const newSchoolNames = schoolNames.filter((_, index) => index !== schoolNames.length - 1)
                setSchoolNames(newSchoolNames)
            }}>刪除</button>
            {
                schoolNames.filter(function (schoolName) {
                    //return schoolName !== "教業"
                    return true
                }).map(function (schoolName, index) {
                    return <SuperSchool key={index} schoolName={schoolName} />
                })
            }
        </>
    )
}

function SuperSchool(props) {
    const [isLove, setIsLove] = useState(false)
    return <>
        <h2>超級  {props.schoolName === "教業" ? "超級" : ""}   {props.schoolName}
        </h2>
        <input type='checkbox' onChange={() => {
            setIsLove(!isLove)
        }} />
        {
            isLove ? <span>我愛{props.schoolName}</span> : null
        }
    </>
    /**
     * 如果schoolName是教業,  用span標籤, 顯示我愛教業
     */
}