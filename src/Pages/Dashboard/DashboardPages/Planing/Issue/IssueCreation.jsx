import React, { useState, useEffect } from "react";
import "./IssueCreation.css";
import Sidebar from "../../../Sidebar/Sidebar";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";

const IssueCreation = () => {
  const [issueTitle, setIssueTitle] = useState("");
  const [issueDescription, setIssueDescription] = useState("");
  const [issues, setIssues] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const now = new Date();
    const formattedDate = `${now.getDate()}-${now.getMonth() + 1}-${now.getFullYear()} at ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    const newIssue = {
      title: issueTitle,
      description: issueDescription,
      createdAt: formattedDate,
    };
    if (isEditing) {
      const updatedIssues = [...issues];
      updatedIssues[editIndex] = newIssue;
      setIssues(updatedIssues);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setIssues([...issues, newIssue]);
    }
    setIssueTitle("");
    setIssueDescription("");
  };

  const handleEdit = (index) => {
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

  const handleDelete = (index) => {
    const updatedIssues = [...issues];
    updatedIssues.splice(index, 1);
    setIssues(updatedIssues);
  };

  useEffect(() => {
    // You can load issues from localStorage here
  }, []);

  return (
    <div className="IC_container">
      <Sidebar />
      <div className="issuecreationcontainer">
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
          <button type="submit">
            {isEditing ? "Update Issue" : "Submit Issue"}
          </button>
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
                            title="Complete?"
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
