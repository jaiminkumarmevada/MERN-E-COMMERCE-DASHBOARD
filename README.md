# MERN E-Commerce Dashboard

**Currently working on this project and learning about API integration, specifically RESTful APIs.**

## Overview

This project is a MERN (MongoDB, Express, React, Node.js) stack-based E-Commerce Dashboard. The primary focus of this dashboard is on seamless API integration to manage and monitor various e-commerce operations. While the UI and backend have been set up for functionality, the core of this project lies in its robust API handling and data management.

## Features

- **API Integration**: The dashboard communicates with various APIs to retrieve, update, and manage e-commerce data such as product listings, user accounts, orders, and inventory.
- **Data Management**: Effective handling of CRUD operations via APIs to ensure up-to-date data is reflected on the dashboard.
- **Authentication**: API-based user authentication and authorization for secure access to dashboard features.
- **Real-time Updates**: Integration with real-time data services to reflect live changes in orders and inventory.

## API Endpoints

### 1. **User Management**
   - **GET /api/users**: Retrieve a list of users.
   - **POST /api/users**: Add a new user.
   - **PUT /api/users/:id**: Update user information.
   - **DELETE /api/users/:id**: Remove a user.

### 2. **Product Management**
   - **GET /api/products**: Retrieve all products.
   - **POST /api/products**: Add a new product.
   - **PUT /api/products/:id**: Update product details.
   - **DELETE /api/products/:id**: Remove a product.

### 3. **Order Management**
   - **GET /api/orders**: Retrieve all orders.
   - **POST /api/orders**: Create a new order.
   - **PUT /api/orders/:id**: Update order status.
   - **DELETE /api/orders/:id**: Cancel an order.

### 4. **Inventory Management**
   - **GET /api/inventory**: Retrieve current inventory levels.
   - **POST /api/inventory**: Add new inventory items.
   - **PUT /api/inventory/:id**: Update inventory details.
   - **DELETE /api/inventory/:id**: Remove inventory items.
