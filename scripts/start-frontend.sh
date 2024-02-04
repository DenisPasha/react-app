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

# Set the name of your Spring Boot JAR file
JAR_FILE="TRAVELMATE-0.0.1-SNAPSHOT.jar"

# Set the project directory to "backend"
PROJECT_DIR_BACKEND="$SCRIPT_DIR/../backend/travelmate"

# Navigate to the Spring Boot project directory
cd "$PROJECT_DIR_BACKEND" || exit

# Build and install the Spring Boot project using Maven
echo "Building and installing the Spring Boot project..."
mvn clean install

# Check if the JAR file exists
if [ ! -f "target/$JAR_FILE" ]; then
   echo "Error: $JAR_FILE not found."
   exit 1
fi

# Run the Spring Boot application
echo "Running the Spring Boot application..."
java -jar "target/$JAR_FILE"
