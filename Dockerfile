FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json dan package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

COPY . .
# run test
CMD ["npm", "test"] 

# run app
# CMD ["npm", "start"]