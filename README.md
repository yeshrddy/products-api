# Product API Project

## Description

This project aims to provide a simple API for managing products, utilizing Node.js, Express.js, and MongoDB. It allows CRUD (Create, Read, Update, Delete) operations on product data.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone <repository_url>
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up environment variables:

    Create a `.env` file in the root directory and define the following variables:

    ```
    PORT=5000
    MONGO_URI="your_mongoDB_URI_here"
    ```

    Replace `your_mongoDB_URI_here` with your actual MongoDB connection string.

## Usage

To start the server, run:

```bash
npm run dev
