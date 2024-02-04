#!/bin/bash

# Get the script directory
SCRIPT_DIR=$(dirname "$0")

# Set the project directory to "frontend"
PROJECT_DIR_FRONTEND="$SCRIPT_DIR/../frontend/my-app"

# Navigate to the React project directory
cd "$PROJECT_DIR_FRONTEND" || exit

# Check if the node_modules directory exists
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies for frontend..."
    npm install
fi

# Start the React app in the background
echo "Starting React app..."
npm start &

# Sleep for 10 seconds (adjust as needed)
sleep 10

