import { Form } from "antd";
import React, { useEffect, useState } from "react";
import { Input, Button } from "antd";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import axios from "axios";

const ProjectManager = () => {
  const [projects, setProjects] = useState([]);
  const [editMode, setEditMode] = useState("add"); // 'add' or 'edit'

  const [form] = Form.useForm();

  const createProject = async (project) => {
    try {
      await axios.post("http://localhost:3001/projects1", project);
      setProjects([...projects, project]);
    } catch (error) {
      console.error("Error creating project:", error);
    }
  };

  const updateProject = async (project) => {
    try {
      await axios.put(`http://localhost:3001/projects1/${project.id}`, project);
      setProjects(
        projects.map((proj) =>
          proj.id === project.id ? project : proj
        )
      );
    } catch (error) {
      console.error("Error updating project:", error);
    }
  }

  const onSubmit = async (values) => {
    // Here you would typically handle form submission,
    // e.g., send data to the server or update state
    const project = form.getFieldsValue();
    console.log(project, projects, form.getFieldValue("name"), values);
    if(editMode === 'edit'){
        await updateProject(project);
    } else {

        await createProject(project);
    }
    form.resetFields();
  };

  const editProject = (project) => {
    setEditMode("edit");
    form.setFieldsValue({
      id: project.id,
      name: project.name,
      description: project.description,
      start_date: project.start_date,
      end_date: project.end_date,
    });
  };
  const fetchData = async () => {
    try {
      const projectList = await axios.get("http://localhost:3001/projects1");
      setProjects(
        projectList.data?.map((proj) => {
          return {
            id: proj.id,
            name: proj.project_name,
            description: proj.project_description,
            start_date: proj.start_date,
            end_date: proj.end_date,
          };
        })
      );
    } catch (error) {
      console.error("Error fetching project data:", error);
    }
  };

  useEffect(() => {
    setEditMode("add");
    fetchData();
  }, []);
  return (
    <div>
      ️<h2>Project Manager</h2>
      <h3>Existing Projects:</h3>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <strong>{project.name}</strong>: {project.description} (From{" "}
            {project.start_date} to {project.end_date})
            <Button type="text" onClick={() => editProject(project)}>
              Edit
            </Button>
          </li>
        ))}
      </ul>
      ️<h3>Add New Project:</h3>
      <Form
        form={form}
        style={{ maxWidth: "400px", marginTop: "40px" }}
        onFinish={onSubmit}
      >
        {editMode === "edit" && (
          <Form.Item label="Project ID" name="id">
            <Input disabled />
          </Form.Item>
        )}
        <Form.Item label="Project Name" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="Description" name="description">
          <Input />
        </Form.Item>
        <Form.Item label="Start Date" name="start_date">
          <input type="date" />
        </Form.Item>
        <Form.Item label="End Date" name="end_date">
          <input type="date" />
        </Form.Item>
        <Form.Item>
          {/* <button type="submit">Add Project</button> */}
          <button type="submit">{editMode === 'add' ? 'Add Project' : 'Update Project'}</button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ProjectManager;
