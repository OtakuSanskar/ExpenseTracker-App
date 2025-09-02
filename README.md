# ExpenseTracker-App

## Project Overview

**ExpenseTracker-App** is a cross-platform mobile application designed to help users manage their personal finances by tracking income and expenses. It provides features for user registration and authentication, adding, viewing, updating, and filtering transactions, and calculating total balances. The app aims to offer a simple and intuitive interface for users to organize their financial data efficiently and securely.

### Main Features

- **User Authentication:** Secure sign-up and login using Firebase Authentication.
- **Expense & Income Tracking:** Add, update, and delete transactions categorized by type (expense/income).
- **Transaction History:** View all personal transactions, filter by user.
- **Balance Calculation:** Real-time calculation and display of income, expenses, and total balance.
- **Date Selection:** Date picker for transaction entry and updates.
- **Responsive UI:** User-friendly interface using React Native Elements and custom styling.
- **Navigation:** Multi-screen navigation for login, registration, transaction listing, adding, and updating entries.

## Demo

Check out the demo of the Expense Tracker App:

**Download and Try:** [Drive Link](https://drive.google.com/file/d/1AwqXnHsaW9y-yWMizXVbHB0w-u2ngow1/view?usp=drive_link)

## Tech Stack Used

- **Frontend Framework:**  
  - [React Native](https://reactnative.dev/) for cross-platform mobile development.
  - [React Native Elements](https://reactnativeelements.com/) for UI components.
  - [React Navigation](https://reactnavigation.org/) for app routing and navigation.
  - [Expo](https://expo.dev/) for simplified React Native development and build process.

- **Backend & Database:**  
  - [Firebase Authentication](https://firebase.google.com/products/auth) for user management.
  - [Firebase Firestore](https://firebase.google.com/products/firestore) for storing transaction data.

- **Other Libraries:**  
  - `@react-native-community/datetimepicker` for date selection.
  - `@react-native-picker/picker` for transaction type selection.
  - `date-fns` for date formatting and parsing.
  - Various icon libraries (`@expo/vector-icons`) for UI enhancement.

## Typical Folder Structure

- `/screens` — Main app screens (Home, Login, Register, Add, Update, All Transactions)
- `/components` — Reusable UI components (e.g., CustomListItem)
- `firebase.js` — Firebase configuration and initialization
- `App.js` — App entry point and navigation setup

## How It Works

1. **Users register and log in via Firebase Authentication.**
2. **Each transaction (income or expense) is stored in Firestore with user-specific filtering.**
3. **Users can add, update, or view all their transactions and see calculated financial summaries.**
4. **Navigation between screens is handled by React Navigation for a smooth user experience.**

---

For more details, visit the [repository](https://github.com/OtakuSanskar/ExpenseTracker-App).
