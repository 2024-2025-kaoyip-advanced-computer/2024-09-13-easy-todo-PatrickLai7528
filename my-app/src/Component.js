export const SuperLaiSir = () => {
    const schoolNames = ["教業", "培道", '培正', '鏡平', '勞校']
    return (
        <>
            <h1>超級賴SIR</h1>
            {
                schoolNames.map(function (schoolName) {
                    return schoolName === "教業" ? null : <SuperSchool schoolName={schoolName} />
                })
            }
        </>
    )
}

function SuperSchool(props) {
    return <>
        <h2>超級  {props.schoolName === "教業" ? "超級" : ""}   {props.schoolName}</h2>
        {
            props.schoolName === "教業" ? <span>我愛教業</span> : null
        }
    </>
    /**
     * 如果schoolName是教業,  用span標籤, 顯示我愛教業
     */
}