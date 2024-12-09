# Step 1: Build the React app
FROM node:18 AS build

# Set the working directory
WORKDIR /frontend

# Copy package.json and package-lock.json (or yarn.lock) to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the React app for production
RUN npm run build

# Step 2: Serve the app with a lightweight HTTP server (e.g., "serve")
FROM node:18-slim

# Install 'serve' globally to serve the built static files
RUN npm install -g serve

# Set the working directory to where the build artifacts are located
WORKDIR /frontend

# Copy the build files from the previous stage
COPY --from=build /frontend/build /app

# Start the app using serve
CMD ["serve", "-s", "build", "-l", "5000"]
