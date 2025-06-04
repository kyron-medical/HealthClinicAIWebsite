FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy app files
COPY . .

# Build app
RUN npm run build

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "start", "--", "-H", "0.0.0.0"]

