# Step 1: Build Stage using Vite
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Vite app
RUN npm run build

# Step 2: Serve the build using Nginx
FROM nginx:alpine

# Copy the Vite build output to nginx's html directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 to access the app
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
