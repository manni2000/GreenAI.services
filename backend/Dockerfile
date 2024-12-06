# Use Node.js as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the backend files into the container
COPY . .

# Expose port 5000 (adjust if needed)
EXPOSE 5000

# Define the start command
CMD ["npm", "start"]
