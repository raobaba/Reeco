# Reeco Frontend Application

The Reeco Frontend Application is a sophisticated React-based user interface designed specifically to showcase and manage orders within a system. It aims to provide a seamless user experience by presenting an intuitive interface for order summaries and product status updates.

## Overview

The primary goal of this project is to create a responsive and visually appealing user interface that allows users to interact with orders and manage the status of individual products within those orders. The application mirrors the provided designs, emphasizing both functionality and visual aesthetics.

![Main Page Screenshot](
![Screenshot (21)](https://github.com/raobaba/Reeco/assets/99542983/aa84dc8e-c893-47df-9316-5906dfbf0709)
![Screenshot (22)](https://github.com/raobaba/Reeco/assets/99542983/961eb0e4-c829-4923-9617-e873ec7184c6)
![Screenshot (23)](https://github.com/raobaba/Reeco/assets/99542983/92130857-9c81-4640-8074-5c17fe4882b6)
![Screenshot (24)](https://github.com/raobaba/Reeco/assets/99542983/dc5107a5-392c-4634-ae0a-0e4c11844379)
![Screenshot (25)](https://github.com/raobaba/Reeco/assets/99542983/a56eb68b-eb98-40ec-8f6a-3cc18e51c407)
)

## Technologies Utilized

- **React:** Powerful framework for building interactive user interfaces.
- **Redux / Redux Toolkit:** Ensures predictable state management and smooth data flow within the application.
- **Styled Components (Optional):** Modern approach to styling by encapsulating styles within components.
- **JSON Mock Data:** Simulates orders and product information, enabling seamless frontend development and testing.

## Features Overview

### Order Visualization

The application provides a comprehensive view of orders, presenting detailed information about the products included in each order. The summary view offers essential details such as product names, quantities, prices, and any other relevant information related to the order.

### Product Status Management

The core functionality revolves around enabling users to manage the status of products within an order. Users can update product status upon arrival using Call-to-Action (CTA) buttons.

- **Approving Products:** Clicking the "Approved" CTA instantly marks the corresponding product as approved within the system.
- **Managing Missing Products:** Clicking the "Missing" CTA triggers a prompt allowing users to specify a reason for the product being missing.

### Optional Edit Functionality

The application optionally offers an edit functionality allowing users to modify certain aspects of the product information, including updating product prices, quantities, and specifying reasons for modifications.

## Folder Structure

The project's folder structure is organized to maintain a clear separation of concerns and facilitate easy navigation:

- **/src:** Main source code for the React application.
- **/public:** Holds static assets and the main HTML template.
- **/mocks:** Contains JSON files serving as mock data for orders and product information.

## Installation and Running the Application

### Installation Process

1. Clone the Repository:

    ```bash
    git clone https://github.com/raobaba/Reeco
    ```

2. Install Dependencies:

    ```bash
    cd Reeco
    npm install
    ```

### Starting the Application

Once the dependencies are installed, run the following command to start the development server:

```bash
npm start
