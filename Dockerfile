FROM node:14
WORKDIR /app
COPY . /app
RUN npm ci --only=production
EXPOSE 3000
RUN npm run build
CMD ["npm", "start"]