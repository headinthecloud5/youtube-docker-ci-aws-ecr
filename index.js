const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Define a route handler for the default home page
app.get('/', (req, res) => {
  res.send(`
    <div style="background: linear-gradient(135deg, #FFDAB9, #FFA07A, #FF7F50); height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; color: white; font-size: 36px; text-align: center; font-family: 'Roboto', sans-serif;">
      <div style="margin-bottom: 20px;">Hello, welcome to <span style="font-weight: bold;">this APP</span> :)</div>
      <p style="font-size: 16px; font-weight: normal;">This is a Docker CI/CD pipeline tutorial using GitHub Actions to build and push images to Amazon ECR.</p>
    </div>
  `);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
