const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use the default port 3000 or use a custom one

// Serve static files (HTML, CSS, JavaScript) from the 'public' directory
app.use(express.static('public'));

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
