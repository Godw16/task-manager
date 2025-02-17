import React, { useState, useEffect } from 'react';
import { Box, Button, Grid, CircularProgress, Typography, Tabs, Tab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Layout from '../components/Layout';
import TaskCard from '../components/TaskCard';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [tabValue, setTabValue] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/tasks');
      setTasks(response.data);
      setLoading(false);
    } catch (error) {
      setError('Failed to fetch tasks');
      setLoading(false);
    }
  };

  const handleCreateTask = () => {
    navigate('/create-task');
  };

  const handleDelete = (taskId) => {
    setTasks(tasks.filter(task => task._id !== taskId));
  };

  const handleStatusChange = (taskId, updatedTask) => {
    setTasks(tasks.map(task => task._id === taskId ? updatedTask : task));
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const getFilteredTasks = () => {
    switch (tabValue) {
      case 0: return tasks;
      case 1: return tasks.filter(task => task.status === 'pending');
      case 2: return tasks.filter(task => task.status === 'in-progress');
      case 3: return tasks.filter(task => task.status === 'completed');
      default: return tasks;
    }
  };

  if (loading) {
    return (
      <Layout>
        <Box sx={{ display: 'flex', justifyContent: 'center', pt: 8 }}>
          <CircularProgress />
        </Box>
      </Layout>
    );
  }

  const filteredTasks = getFilteredTasks();

  return (
    <Layout title="Your Tasks">
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Tabs value={tabValue} onChange={handleTabChange} indicatorColor="primary">
          <Tab label="All" />
          <Tab label="Pending" />
          <Tab label="In Progress" />
          <Tab label="Completed" />
        </Tabs>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={handleCreateTask}
        >
          Create Task
        </Button>
      </Box>

      {error && (
        <Typography color="error" sx={{ mb: 2 }}>
          {error}
        </Typography>
      )}

      {filteredTasks.length === 0 ? (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pt: 4 }}>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            No tasks found
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<AddIcon />}
            onClick={handleCreateTask}
            sx={{ mt: 2 }}
          >
            Create your first task
          </Button>
        </Box>
      ) : (
        <Grid container spacing={3}>
          {filteredTasks.map((task) => (
            <Grid item xs={12} sm={6} md={4} key={task._id}>
              <TaskCard
                task={task}
                onDelete={handleDelete}
                onStatusChange={handleStatusChange}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Layout>
  );
};

export default Dashboard;