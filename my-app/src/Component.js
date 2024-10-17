export const SuperLaiSir = () => {
    return (
        <>
            <h1>超級賴SIR</h1>
            <SuperSchool schoolName="教業"/>
        </>
    )
}

function SuperSchool(props) {
    return <h2>超級  {props.schoolName === "教業" ? "超級":""}   {props.schoolName}</h2>
    /**
     * 如果schoolName是教業,  用span標籤, 顯示我愛教業
     */
}