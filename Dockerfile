# Use an official Node.js runtime as the base image
FROM node:18

# Create and set the working directory in the container
WORKDIR /app

# Copy the package.json and yarn.lock files to the container
COPY package.json yarn.lock ./

# Install dependencies using Yarn
RUN yarn install

# Copy the rest of your application code to the container
COPY . .

# Expose a port if your application needs to listen for incoming requests
EXPOSE 3000

# Define the command to start your application
CMD ["yarn", "start"]
