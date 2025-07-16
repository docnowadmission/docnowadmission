# Backend Setup for DocNow Admission Website

This is the backend server for the DocNow admission website, built with Express.js and MySQL.

## Prerequisites

1. **Node.js** (version 14 or higher)
2. **MySQL** (version 8.0 or higher)
3. **npm** or **yarn**

## Setup Instructions

### 1. Install Dependencies

```bash
cd docnow/backend-mysql
npm install
```

### 2. Database Setup

1. **Start MySQL server**
2. **Create database and tables:**
   ```bash
   mysql -u root -p < setup-database.sql
   ```
   Or run the SQL commands manually in MySQL Workbench/phpMyAdmin

### 3. Configure Database Connection

Edit `index.js` and update the database connection details:

```javascript
const db = mysql.createConnection({
  host: 'localhost',
  user: 'your_mysql_username',
  password: 'your_mysql_password',
  database: 'docnow'
});
```

### 4. Start the Server

```bash
node index.js
```

The server will start on `http://localhost:3001`

## API Endpoints

### GET `/`
- **Description**: Health check endpoint
- **Response**: `"Backend with MySQL is running!"`

### GET `/enquiries`
- **Description**: Get all enquiries
- **Response**: Array of enquiry objects

### POST `/enquiries`
- **Description**: Create a new enquiry
- **Body**: 
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "message": "I'm interested in MBBS admission"
  }
  ```
- **Response**: 
  ```json
  {
    "message": "Enquiry submitted successfully",
    "id": 1
  }
  ```

## Frontend Integration

The frontend (React app) connects to this backend via HTTP requests. Make sure:

1. Backend is running on port 3001
2. Frontend is running on a different port (usually 3000)
3. CORS is properly configured (already done in the code)

## Production Deployment

For live website deployment:

1. **Environment Variables**: Use environment variables for database credentials
2. **HTTPS**: Enable SSL/TLS certificates
3. **Process Manager**: Use PM2 or similar for production
4. **Database**: Use a production MySQL server
5. **Domain**: Configure your domain to point to the server

### Example with PM2:

```bash
npm install -g pm2
pm2 start index.js --name "docnow-backend"
pm2 startup
pm2 save
```

## Security Considerations

1. **Change default passwords** in production
2. **Use environment variables** for sensitive data
3. **Implement rate limiting** for API endpoints
4. **Add input validation** and sanitization
5. **Use HTTPS** in production
6. **Implement proper authentication** for admin features

## Troubleshooting

### Common Issues:

1. **MySQL Connection Error**: Check if MySQL is running and credentials are correct
2. **CORS Error**: Ensure CORS middleware is properly configured
3. **Port Already in Use**: Change port number or kill existing process
4. **Database Not Found**: Run the setup-database.sql script

### Logs:
- Check console output for error messages
- MySQL logs for database issues
- Browser developer tools for frontend errors 