import { BrowserRouter } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Routes from "./AppRouter";

// function App() {
  class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        taskList:[],
        activeItem:{
          id:null,
          title:'',
          completed:false,
        },
        editing:false,
      }
      this.fetchTasks = this.fetchTasks.bind(this)
    };
    componentDidMount(){
      this.fetchTasks()
    }
    fetchTasks(){
      console.log('Fetching...')
      fetch('http://127.0.0.1:8000/task-list/')
      .then(response => response.json())
      .then(data =>
        this.setState({
          taskList:data
        })
      )
    }

    render(){
    var tasks = this.state.taskList
    // console.log(tasks)
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        {/* <Board /> */}
        <Routes />
      </div>
    </BrowserRouter>
  );
}
}

export default App;
