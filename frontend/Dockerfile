# Step 1: Build the React app
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) for dependency installation
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the React app for production
RUN npm run build

# Step 2: Serve the React app using a simple static server (like serve)
FROM node:18-slim

# Install serve globally (optional: you can use other lightweight servers)
RUN npm install -g serve

# Set the working directory
WORKDIR /app

# Copy the build output from the previous step
COPY --from=build /app/build /app/build

# Expose the port that the app will run on (default React is port 5000)
EXPOSE 5000

# Start the app using serve
CMD ["serve", "-s", "build", "-l", "5000"]
