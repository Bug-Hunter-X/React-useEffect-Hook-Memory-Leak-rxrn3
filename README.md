# React useEffect Hook Memory Leak

This repository demonstrates a common error in React applications involving the `useEffect` hook: forgetting to return a cleanup function, which can lead to memory leaks.

## The Bug
The `bug.js` file contains a component with a `useEffect` hook that fetches data from an API.  The problem is that it doesn't return a cleanup function. This means that if the component unmounts before the fetch completes, the asynchronous operation continues running in the background, potentially causing memory leaks.

## The Solution
The `bugSolution.js` file provides the corrected code.  A cleanup function is returned from the `useEffect` hook, ensuring that any ongoing asynchronous operations are cancelled when the component unmounts. This prevents memory leaks.

## How to Reproduce
1. Clone the repository.
2. Navigate to the directory.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.
5. Observe the console logs and component behavior to see the difference between the buggy and fixed versions.