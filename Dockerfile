FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -g @angular/cli

COPY . .

# Expose the Angular development server port (default 4200)
EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0"] 

