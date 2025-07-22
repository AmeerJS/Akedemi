import express from 'express';
import dashboardRoutes from './routes/dashboardRoutes.js';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(express.static('public'));
app.use(cors());

const PORT = 5000;
app.use('/api/dashboard', dashboardRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});