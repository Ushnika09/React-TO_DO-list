

export default function Taskbar({input,add,value}){
    return(
    <>
        <div className="input_container">
            <input type="text" placeholder='Enter a task' onChange={input} value={value}/>
            <button className="btn" onClick={add}>+</button>
        </div>
    </>
    )
}