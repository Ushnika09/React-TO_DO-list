function AddTask({ todos,del }) {

  return (
    <>
      {todos.map((todo,index) => {
        return (
          <div key={index} className="AddTask_container">
            <p id={`${index}`}>{todo}</p>
            <div className="actions">
              <input type="checkbox" onChange={(e)=>{
                let el=document.getElementById(index)
                el.style.textDecoration=e.target.checked ? "line-through" :"none"
              }} />
              <button onClick={(e)=>{del(index)}}>Delete</button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default AddTask;
