---

# E-commerce Backend

Welcome to the e-commerce backend project! This project aims to provide a robust backend solution for managing various aspects of an e-commerce platform including customer management, payment processing, product management, cart functionality, order management, and sales tracking.

## Videos
- [Complete feature working](https://drive.google.com/file/d/1Ndmg4dYLnrAAJQCoc3oZeWIVqgPQc3_t/view?usp=sharing)
- [Stripe overview](https://drive.google.com/file/d/1y77NzwBWGcAdr-rta4rayvQq5Uez6_2F/view?usp=sharing)

## Features

### 1. Customer Management
- Register new customers
- Manage customer profiles

### 2. Payment Method
- Integrate multiple payment methods
- Handle payment processing securely

### 3. Setup Intent
- Utilize Stripe Setup Intent for seamless payment setup

### 4. Products in Cart
- Allow customers to add products to their carts
- Manage cart items and quantities

### 5. Orders and Sales Management
- Generate and manage orders
- Track sales data for reporting and analysis
- Stripe webhook should insert into sales table

## Technologies Used
[![JavaScript](https://skillicons.dev/icons?i=typescript,nodejs,nestjs,git,postgres,aws,jest)](https://skillicons.dev)
- **Node.js**: JavaScript runtime for building server-side applications
- **TypeScript**: Typed superset of JavaScript for enhanced code quality and maintainability
- **Nest.js**: Progressive Node.js framework for building efficient, reliable, and scalable server-side applications
- **TypeORM**: Object-Relational Mapping (ORM) library for TypeScript and JavaScript
- **PostgreSQL**: Powerful open-source relational database management system
- **Swagger**: 
- **SNS (Simple Notification Service)**: Fully managed messaging service for event-driven architectures
- **Stripe**: Payment processing platform for online businesses
- **PDF**: When call get sales API will generate a pdf file with all info


## Setup Instructions

1. **Clone the Repository:**
   ```
   git clone https://github.com/devmaiko/e-commerce-service.git
   ```

2. **Install Dependencies:**
   ```
   cd e-commerce-backend
   npm install
   ```

3. **Set Up Environment Variables:**
   Create a `.env` file in the root directory and add the following variables:
   ```
   PORT=3000
   DATABASE_URL=postgres://username:password@localhost:5432/database_name
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```

4. **Database Migration:**
   Run the database migration scripts to set up the database schema:
   ```
   typeorm:run-migrations
   ```

5. **Start the Server:**
   ```
   yarn start:dev
   ```
