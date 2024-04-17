import React, { useState, useEffect } from "react";
import "./IssueCreation.css";
import Sidebar from "../../../Sidebar/Sidebar";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import axios from "axios";

const IssueCreation = () => {
  const [issueTitle, setIssueTitle] = useState("");
  const [issueDescription, setIssueDescription] = useState("");
  const [issues, setIssues] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState("");
  const [projects, setProjects] = useState([]);
  const [email, setUserEmail] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [completed, setCompleted] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const now = new Date();
    const formattedDate = `${now.getDate()}-${
      now.getMonth() + 1
    }-${now.getFullYear()} at ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    const newIssue = {
      title: issueTitle,
      description: issueDescription,
      createdAt: formattedDate,
    };
    try {
      const token = localStorage.getItem("token");
      const userEmail = localStorage.getItem("userEmail");

      if (!token) {
        console.error("Token not found in localStorage");
        return;
      }

      // Store user's email in state
      setUserEmail(userEmail);

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.post(
        `http://localhost:5000/api/users/issues/add`,
        {
          title: issueTitle,
          description: issueDescription,
          projectId: selectedProjectId,
          IuserEmail: userEmail
        },
        config
      );
      console.log("Issue added successfully:", response.data.message);
      setIssues([...issues, newIssue]);
      setIssueTitle("");
      setIssueDescription("");
    } catch (error) {
      console.error("Error adding issue:", error);
    }
  };

  const handleEdit = (index) => {
    // Your edit logic here
    const issueToEdit = issues[index];
    setIssueTitle(issueToEdit.title);
    setIssueDescription(issueToEdit.description);
    setIsEditing(true);
    setEditIndex(index);
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
      ...issues[index],
      completedOn: completedOn,
    };

    let updatedCompletedArr = [...completed];
    updatedCompletedArr.push(filteredItem);
    setCompleted(updatedCompletedArr);
    handleDelete(index);
    localStorage.setItem("completedIssue", JSON.stringify(updatedCompletedArr));
  };

  const handleDelete = async (index) => {
    const updatedIssues = [...issues];
    updatedIssues.splice(index, 1);
    setIssues(updatedIssues);






    // try {
    //   const token = localStorage.getItem("token");
    //   if (!token) {
    //     console.error("Token not found in localStorage");
    //     return;
    //   }
    //   const config = {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   };
    //   const response = await axios.delete(
    //     `http://localhost:5000/api/users/issues/${issues[index]._id}`,
    //     config
    //   );
    //   console.log("Issue deleted successfully:", response.data.message);
    //   const updatedIssues = [...issues];
    //   updatedIssues.splice(index, 1);
    //   setIssues(updatedIssues);
    // } catch (error) {
    //   console.error("Error deleting issue:", error);
    // }
  };

  const handleProjectChange = (event) => {
    setSelectedProjectId(event.target.value);
  };

  useEffect(() => {
    // Fetch user projects and set projects state
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

  return (
    <div className="IC_container">
      <Sidebar />
      <div className="issuecreationcontainer">
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
        <h2 className="IC_title">Create New Issue</h2>
        <form onSubmit={handleSubmit}>
          <div className="ICformgroup">
            <label htmlFor="issueTitle">Issue Title</label>
            <input
              type="text"
              id="issueTitle"
              value={issueTitle}
              onChange={(e) => setIssueTitle(e.target.value)}
              placeholder="Enter issue title"
              required
            />
          </div>
          <div className="ICformgroup">
            <label htmlFor="issueDescription">Issue Description</label>
            <textarea
              id="issueDescription"
              value={issueDescription}
              onChange={(e) => setIssueDescription(e.target.value)}
              placeholder="Enter issue description"
              required
            ></textarea>
          </div>
          <button type="submit">Submit Issue</button>
        </form>
        <div className="issueTableContainer">
          <h2 className="IC_title">Issues</h2>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Created At</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {issues.map((issue, index) => (
                <tr key={index}>
                  <td>{issue.title}</td>
                  <td>{issue.description}</td>
                  <td>{issue.createdAt}</td>
                  <td>
                    <AiOutlineEdit
                      className="edit-icon"
                      onClick={() => handleEdit(index)}
                      title="Edit"
                    />
                    <BsCheckLg
                      className="check-icon"
                      onClick={() => handleComplete(index)}
                      title="Complete"
                    />
                    <AiOutlineDelete
                      className="delete-icon"
                      onClick={() => handleDelete(index)}
                      title="Delete"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default IssueCreation;
