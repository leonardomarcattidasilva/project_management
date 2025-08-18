FROM node:latest

WORKDIR /my_app

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "3000"]