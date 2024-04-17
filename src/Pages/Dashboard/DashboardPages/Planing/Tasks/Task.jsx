import React from "react";
import "./Task.css";
import Sidebar from "../../../Sidebar/Sidebar";
import { useState, useEffect } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import Timeline from '../TimeLine/Timeline'
import { useNavigation } from "react-router-dom";
import axios from "axios";

const Task = () => {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  const [allTodos, setTodos] = useState([]);
  const [todoname, setTODOName] = useState("");
  const [todotask, setTODOTask] = useState("");
  const [todoAssign, setTODOAssign] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newStartdate, setNewStartDate] = useState("");
  const [newEnddate, setNewEndDate] = useState("");
  const [completedTodos, setCompletedTodos] = useState([]);
  const [currentEdit, setCurrentEdit] = useState("");
  const [currentEditedItem, setCurrentEditedItem] = useState("");
  const [selectedProjectId, setSelectedProjectId] = useState("");
  const [projects, setProjects] = useState([]);
  const [email, setUserEmail] = useState("");

  
  useEffect(() => {
    const fetchUserProjects = async () => {
      try {
        const token = localStorage.getItem("token");
        const userEmail = localStorage.getItem("userEmail");

        if (!token || !userEmail) {
          console.error("Token or userEmail not found in localStorage");
          return;
        }

        // Store user's email in state
        setUserEmail(userEmail);

        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        // Send a POST request to fetch user's projects
        const response = await axios.post(
          "http://localhost:5000/api/users/userprojects",
          { userEmail }, // Send user's email in the request body
          config
        );
        setProjects(response.data.projects);
      } catch (error) {
        console.error("Error fetching user projects:", error);
      }
    };

    fetchUserProjects();
  }, []);




   



  const handleAddTodo = async () => {
    let newTodoItem = {
      name: todoname,
      task: todotask,
      taskAssign: todoAssign,
      startDate: newStartdate,
      endDate: newEnddate,
      description: newDescription,
    };

    let updatedTodoArr = [...allTodos];
    updatedTodoArr.push(newTodoItem);
    setTodos(updatedTodoArr);
    localStorage.setItem("todolist", JSON.stringify(updatedTodoArr));

    try {
      const token = localStorage.getItem("token");
      const userEmail = localStorage.getItem("userEmail");

      if (!token || !userEmail) {
        console.error("Token or userEmail not found in localStorage");
        return;
      }

        // Store user's email in state
        setUserEmail(userEmail);

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
  
      const taskData = {
        name: todoname,
        task: todotask,
        taskAssign: todoAssign,
        startDate: newStartdate,
        endDate: newEnddate,
        description: newDescription,
        projectId: selectedProjectId,
        ProjUserEmail: userEmail // Pass the selected project ID
      };
  
      const response = await axios.post(
        "http://localhost:5000/api/users/tasks/add",
        taskData,
        config
      );
  
      console.log("Task added successfully:", response.data);
      // Optionally, you can clear the input fields or update state as needed
      setTODOName("");
      setTODOTask("");
      setTODOAssign("");
      setNewStartDate("");
      setNewEndDate("");
      setNewDescription("");
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const handleDeleteTodo = (index) => {
    let reducedTodo = [...allTodos];
    reducedTodo.splice(index);

    localStorage.setItem("todolist", JSON.stringify(reducedTodo));
    setTodos(reducedTodo);

  };


  const handleComplete = (index) => {
    let now = new Date();
    let dd = now.getDate();
    let mm = now.getMonth() + 1;
    let yyyy = now.getFullYear();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let completedOn =
      dd + "-" + mm + "-" + yyyy + " at " + h + ":" + m + ":" + s;

    let filteredItem = {
      ...allTodos[index],
      completedOn: completedOn,
    };

    let updatedCompletedArr = [...completedTodos];
    updatedCompletedArr.push(filteredItem);
    setCompletedTodos(updatedCompletedArr);
    handleDeleteTodo(index);
    localStorage.setItem("completedTodos", JSON.stringify(updatedCompletedArr));
  };

  const handleDeleteCompletedTodo = (index) => {
    let reducedTodo = [...completedTodos];
    reducedTodo.splice(index);

    localStorage.setItem("completedTodos", JSON.stringify(reducedTodo));
    setCompletedTodos(reducedTodo);
  };

  useEffect(() => {
    let savedTodo = JSON.parse(localStorage.getItem("todolist"));
    let savedCompletedTodo = JSON.parse(localStorage.getItem("completedTodos"));
    if (savedTodo) {
      setTodos(savedTodo);
    }

    if (savedCompletedTodo) {
      setCompletedTodos(savedCompletedTodo);
    }
  }, []);

  const handleEdit = (ind, item) => {
    console.log(ind);
    setCurrentEdit(ind);
    setCurrentEditedItem(item);
  };

  const handleUpdateTitle = (value) => {
    setCurrentEditedItem((prev) => {
      return { ...prev, title: value };
    });
  };

  const handleUpdateDescription = (value) => {
    setCurrentEditedItem((prev) => {
      return { ...prev, description: value };
    });
  };

  const handleUpdateToDo = () => {
    let newToDo = [...allTodos];
    newToDo[currentEdit] = currentEditedItem;
    setTodos(newToDo);
    setCurrentEdit("");
  };
  // Function to generate dummy assignee options
  const getAssigneeOptions = () => {
    return ["John Doe", "Jane Smith", "Alice Johnson", "Bob Brown"];
  };

  const handleProjectChange = (event) => {
    setSelectedProjectId(event.target.value);
  };

  return (
    <div className="Task_Component">
      <Sidebar />
      <div className="Side_Side">
        <div className="App">
        <div className="sort-dropdown">
          <label htmlFor="project">Select Project:</label>
          <select id="sort" onChange={handleProjectChange}>
            <option value="">Select a project</option>
            {projects.map((project) => (
              <option key={project._id} value={project._id}>
                {project.projectName}
              </option>
            ))}
          </select>
        </div>
          <h1>Task Manager</h1>

          <div className="todo-wrapper">
            <div className="todo1">
              <div className="todo-input">
                <div className="todo-input-item">
                  <label>Name</label>
                  <input
                    type="text"
                    value={todoname}
                    onChange={(e) => setTODOName(e.target.value)}
                    placeholder="What's the task title?"
                  />
                </div>
                <div className="todo-input-item">
                  <label>Task</label>
                  <input
                    type="text"
                    value={todotask}
                    onChange={(e) => setTODOTask(e.target.value)}
                    placeholder="What's the task?"
                  />
                </div>
                <div className="todo-input-item">
                  <label htmlFor="assignTo">Assign to?</label>
                  <select
                    id="assignTo"
                    value={todoAssign}
                    onChange={(e) => setTODOAssign(e.target.value)}
                    placeholder="Task is Assign to??"
                    required
                  >
                    <option value="">Select Assignee</option>
                    {getAssigneeOptions().map((assignee, index) => (
                      <option key={index} value={assignee}>
                        {assignee}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="todo1">
              <div className="todo-input">
                <div className="todo-input-item">
                  <label>Start Date</label>
                  <input
                    type="Date"
                    value={newStartdate}
                    onChange={(e) => setNewStartDate(e.target.value)}
                    placeholder="Start Date"
                  />
                </div>
                <div className="todo-input-item">
                  <label>End Date</label>
                  <input
                    type="Date"
                    value={newEnddate}
                    onChange={(e) => setNewEndDate(e.target.value)}
                    placeholder="End Start"
                  />
                </div>
                <div className="todo-input-item">
                  <label>Description</label>
                  <input
                    type="text"
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}
                    placeholder="Write A description of the task?"
                  />
                </div>
              </div>
              <div className="todo-input-item">
                <button
                  type="button"
                  onClick={handleAddTodo}
                  className="primaryBtn"
                >
                  Add
                </button>
              </div>
            </div>

            <div className="btn-area">
              <button
                className={`secondaryBtn ${
                  isCompleteScreen === false && "active"
                }`}
                onClick={() => setIsCompleteScreen(false)}
              >
                Todo
              </button>
              <button
                className={`secondaryBtn ${
                  isCompleteScreen === true && "active"
                }`}
                onClick={() => setIsCompleteScreen(true)}
              >
                Completed
              </button>
            </div>

            <div className="todo-list">
              {isCompleteScreen === false &&
                allTodos.map((item, index) => {
                  if (currentEdit === index) {
                    return (
                      <div className="edit__wrapper" key={index}>
                        <input
                          placeholder="Updated Title"
                          onChange={(e) => handleUpdateTitle(e.target.value)}
                          value={currentEditedItem.title}
                        />
                        <textarea
                          placeholder="Updated Title"
                          rows={4}
                          onChange={(e) =>
                            handleUpdateDescription(e.target.value)
                          }
                          value={currentEditedItem.description}
                        />
                        <button
                          type="button"
                          onClick={handleUpdateToDo}
                          className="primaryBtn"
                        >
                          Update
                        </button>
                      </div>
                    );
                  } else {
                    return (
                      <div className="todo-list-item" key={index}>
                        <div>
                          <h3>{item.task}</h3>
                          <p>
                            {item.startDate} to {item.endDate}{" "}
                          </p>
                        </div>
                        <div>
                          <h3>{item.taskAssign}</h3>
                        </div>

                        <div>
                          <AiOutlineDelete
                            className="icon"
                            onClick={() => handleDeleteTodo(index)}
                            title="Delete?"
                          />
                          <BsCheckLg
                            className="check-icon"
                            onClick={() => handleComplete(index)}
                            title="Complete?"
                          />
                          <AiOutlineEdit
                            className="check-icon"
                            onClick={() => handleEdit(index, item)}
                            title="Edit?"
                          />
                        </div>
                      </div>
                    );
                  }
                })}

              {isCompleteScreen === true &&
                completedTodos.map((item, index) => {
                  return (
                    <div className="todo-list-item" key={index}>
                      <div>
                        <h3>{item.task}</h3>
                        <p>
                          <small>Completed on: {item.completedOn}</small>
                        </p>
                      </div>

                      <div>
                        <AiOutlineDelete
                          className="icon"
                          onClick={() => handleDeleteCompletedTodo(index)}
                          title="Delete?"
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
