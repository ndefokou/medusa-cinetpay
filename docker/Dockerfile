# Use Node.js base image
FROM node:14

# Set the working directory
WORKDIR /medusa_cinetpay

# Copy the package.json and install dependencies
COPY package.json .

# Install app dependencies
RUN npm install

# Copy the application code
COPY . .

# Expose port for the application
EXPOSE 3334

# Start the application
CMD ["npm", "start"]
