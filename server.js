const express = require('express');
const app = express();
const port = 8080; // You can change the port as needed

// Sample data (replace with database calls or other logic)
const sampleData = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
];

// Define the GET endpoint
app.get('/api/users', (req, res) => {
    res.status(200).json({
        success: true,
        data: sampleData,
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
