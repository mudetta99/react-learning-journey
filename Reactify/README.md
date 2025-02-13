Introduction
This project is part of my learning journey with React. It focuses on building interactive user interfaces for managing two types of data:

Student Information : Add and delete student records.
Product Inventory : Add, delete, and modify products while dynamically updating the display method based on the quantity of each product.
Features
1. Student Information Management
Add Students : Users can add new student entries with their details.
Delete Students : Users can remove existing student records from the list.
2. Product Inventory Management
Add Products : Users can add new products with their names and quantities.
Delete Products : Users can remove products from the inventory.
Modify Display Method :
If the product quantity is 0 , it displays "Out of Stock".
If the product quantity is 1 , it displays "Only 1 Left".
If the product quantity is more than 1 , it displays the exact quantity (e.g., "5 Available").
How It Works
The application uses React's component-based architecture and state management to handle dynamic updates. Below is a brief overview of how each feature works:

Student Information :
A form allows users to input student details (e.g., name, ID, etc.).
Clicking the "Add" button adds the student to the list.
Each student entry has a "Delete" button to remove the record.
Product Inventory :
A form allows users to input product details (e.g., name, quantity).
Clicking the "Add" button adds the product to the inventory.
Each product entry has a "Delete" button to remove the product.
The display method for the product's quantity is updated dynamically based on its value.
Technologies Used
React : JavaScript library for building user interfaces.
JavaScript : Core programming language for implementing logic.
HTML/CSS : For structuring and styling the application.
Git/GitHub : For version control and hosting the project.