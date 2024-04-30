# Base image 
FROM node:19-alpine

#Copy package.json and server.js into container
COPY package.json /app/
COPY server.js /app/

#change into app directory to execute
WORKDIR /app

# Install dependencies and create node modules
RUN npm install

#Run command to start app in container
CMD ["node", "server.js"]
