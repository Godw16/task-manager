import React from 'react';
import { Card, CardContent, CardActions, Typography, Button, Chip, Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const getStatusColor = (status) => {
  switch(status) {
    case 'pending': return { bg: '#FFF2F2', text: '#2D336B' };
    case 'in-progress': return { bg: '#A9B5DF', text: '#2D336B' };
    case 'completed': return { bg: '#7886C7', text: 'white' };
    default: return { bg: '#FFF2F2', text: '#2D336B' };
  }
};

const TaskCard = ({ task, onDelete, onStatusChange }) => {
  const navigate = useNavigate();
  const statusColor = getStatusColor(task.status);

  const handleEdit = () => {
    navigate(`/edit-task/${task._id}`);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${task._id}`);
      onDelete(task._id);
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleStatusChange = async () => {
    let newStatus;
    switch(task.status) {
      case 'pending': newStatus = 'in-progress'; break;
      case 'in-progress': newStatus = 'completed'; break;
      case 'completed': newStatus = 'pending'; break;
      default: newStatus = 'pending';
    }
    
    try {
      const response = await axios.patch(`http://localhost:5000/api/tasks/${task._id}`, { status: newStatus });
      onStatusChange(task._id, response.data);
    } catch (error) {
      console.error('Error updating task status:', error);
    }
  };

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" component="div" gutterBottom>
          {task.title}
        </Typography>
        <Chip
          label={task.status.charAt(0).toUpperCase() + task.status.slice(1)}
          size="small"
          sx={{ 
            bgcolor: statusColor.bg,
            color: statusColor.text,
            mb: 2
          }}
          onClick={handleStatusChange}
        />
        <Typography variant="body2" color="text.secondary">
          {task.description}
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
          Created: {new Date(task.createdAt).toLocaleDateString()}
        </Typography>
      </CardContent>
      <CardActions>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <Button 
            size="small" 
            startIcon={<EditIcon />}
            onClick={handleEdit}
          >
            Edit
          </Button>
          <Button 
            size="small" 
            color="error" 
            startIcon={<DeleteIcon />}
            onClick={handleDelete}
          >
            Delete
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
};

export default TaskCard;