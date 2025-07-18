import express from 'express';
import dashboardRoutes from './routes/dashboardRoutes.js';

const app = express();
app.use(express.json());
app.use(express.static('public'));

const PORT = 5000;
app.use('/api/dashboard', dashboardRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});