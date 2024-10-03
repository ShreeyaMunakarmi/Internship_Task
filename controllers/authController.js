const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const TaskDetail = require('../models/taskDetail');

const JWT_SECRET = '3sIueX5FbB9B1G4vX9+OwI7zFt/P9FPW3sLd0R9MxHQ=';

exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    console.error('Registration error:', error); 
    res.status(400).json({ error: 'User registration failed!' });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ error: 'User not found!' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid credentials!' });
    }

    const token = jwt.sign({ id: user.id }, JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(200).json({ token, userId: user.id });
  } catch (error) {
    res.status(400).json({ error: 'Login failed!' });
    console.log(error);
  }
};

exports.getUserData = async (req, res) => {
  const token = req.header('Authorization').replace('Bearer ', '');

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findOne({ where: { id: decoded.id } });

    if (!user) {
      return res.status(404).json({ error: 'User not found!' });
    }

    res.status(200).json({
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    res.status(401).json({ error: 'Unauthorized!' });
  }
};

exports.createTask = async (req, res) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  const { title, body,date } = req.body;

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findOne({ where: { id: decoded.id } });

    if (!user) {
      return res.status(404).json({ error: 'User not found!' });
    }

    const task = await TaskDetail.create({
      userId: user.id,
      title,
      body,
      date,
      status: 0, 
    });

    res.status(201).json({ message: 'Task created successfully!', task });
  } catch (error) {
    console.log('Create Task Error: ', error); 
    res.status(400).json({ error: 'Failed to create task!' });
  }
};

exports.getTasks = async (req, res) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  const { status } = req.query; 
  const page = parseInt(req.query.page) || 1; 
  const limit = parseInt(req.query.limit) || 10; 
  const offset = (page - 1) * limit; 

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const tasks = await TaskDetail.findAndCountAll({
      where: { userId: decoded.id, ...(status ? { status } : {}) },
      limit: limit,
      offset: offset,
    });

    res.status(200).json({
      tasks: tasks.rows, 
      currentPage: page, 
      totalPages: Math.ceil(tasks.count / limit), 
      totalTasks: tasks.count, 
    });
  } catch (error) {
    res.status(400).json({ error: 'Failed to fetch tasks!' });
  }
};

exports.updateTaskStatus = async (req, res) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    const { id, status } = req.body;
  
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      const task = await TaskDetail.findOne({
        where: { id: id, userId: decoded.id },
      });
  
      if (!task) {
        return res.status(404).json({ error: 'Task not found!' });
      }
  
      task.status = status;
      await task.save();
  
      res.status(200).json({ message: 'Task status updated successfully!' });
    } catch (error) {
      res.status(400).json({ error: 'Failed to update task status!' });
    }
  };
  
  exports.deleteTask = async (req, res) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    const { id } = req.query; 
  
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      const user = await User.findOne({ where: { id: decoded.id } });
  
      if (!user) {
        return res.status(404).json({ error: 'User not found!' });
      }
  
      const task = await TaskDetail.findOne({ where: { id: id, userId: user.id } });
  
      if (!task) {
        return res.status(404).json({ error: 'Task not found!' });
      }
  
      await task.destroy(); 
  
      res.status(200).json({ message: 'Task deleted successfully!' });
    } catch (error) {
      res.status(400).json({ error: 'Failed to delete task!' });
    }
  };
  
  exports.updateTaskDetails = async (req, res) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    const { id, title, body, date } = req.body;
  
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      
      const task = await TaskDetail.findOne({
        where: { id: id, userId: decoded.id },
      });
  
      if (!task) {
        return res.status(404).json({ error: 'Task not found!' });
      }
  
      
      if (title) task.title = title;
      if (body) task.body = body;
      if (date) task.date = date;
  
      await task.save(); 
  
      res.status(200).json({ message: 'Task updated successfully!', task });
    } catch (error) {
      console.log('Update Task Error: ', error); 
      res.status(400).json({ error: 'Failed to update task details!' });
    }
  };
  
  
  
