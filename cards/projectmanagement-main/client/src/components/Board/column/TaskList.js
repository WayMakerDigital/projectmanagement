import React, {useState} from 'react'

const Index = (props) => {
  const [title, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {id: (Math.random() * 1000), title: title}
    props.handleTaskSubmit(props.column, data);
    setTask("");
  }
  return (
    <div ref={props.refd} className={props.isDraggingOver ? "bg-info mt-3 px-3" : "mt-3 px-3"}>

      <form onSubmit={handleSubmit} className="mb-3">
        <div className="form-group">
          <input type="text" onChange={handleChange} value={title} className="form-control bg-light border-primary" placeholder="Add a new task"/>
        </div>
      </form>
      {props.children}
    </div>
   );
}

export default Index;