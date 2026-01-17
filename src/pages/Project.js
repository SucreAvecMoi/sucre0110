import { Form } from "antd";
import React, { useEffect, useState } from "react";
import { Input } from "antd";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import axios from "axios";

const Project = () => {
  const [projects, setProjects] = useState([
    {
      name: "Project Alpha",
      description: "A cutting-edge project focused on AI.",
      start_date: "2025-01-01",
      end_date: "2025-12-31",
    },
    {
      name: "Project Beta",
      description: "A project focused on web development.",
      start_date: "2026-01-01",
      end_date: "2026-12-31",
    },
  ]);

  const [form] = Form.useForm();

  const onSubmit = (values) => {
    // Here you would typically handle form submission,
    // e.g., send data to the server or update state
    const project = form.getFieldsValue();
    console.log(project, projects, form.getFieldValue('name'), values)
    setProjects([...projects, project]);
    form.resetFields();
  }

  const fetchData = async () => {
    try{
        const projectList = await axios.get('http://localhost:3001/projects1');
        setProjects(projectList.data?.map(proj=> {
            return {
                name: proj.project_name,
                description: proj.project_description,
                start_date: proj.start_date,
                end_date: proj.end_date
            }
        }));
    } catch (error) {
      console.error("Error fetching project data:", error);
    }

  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {/* <Link to="2025" style={{color: 'blue'}}>2025</Link>
            <Link to="2026" style={{color: 'blue'}}>2026</Link> */}
      {/* <Outlet /> */}
      {projects.map((project, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <p>Start Date: {project.start_date}</p>
          <p>End Date: {project.end_date}</p>
        </div>
      ))}

      <Form form={form} style={{ maxWidth: "400px", marginTop: "40px" }} onFinish={onSubmit}>
        <Form.Item label="Project Name" name="name">
          <Input/>
        </Form.Item>
        <Form.Item label="Description" name="description">
          <Input/>
        </Form.Item>
        <Form.Item label="Start Date" name="start_date">
          <input type="date" />
        </Form.Item>
        <Form.Item label="End Date" name="end_date">
          <input type="date" />
        </Form.Item>
        <Form.Item>
          {/* <button type="submit">Add Project</button> */}
          <button type="submit">Add Project</button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Project;
