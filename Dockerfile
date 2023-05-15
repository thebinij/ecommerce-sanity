FROM node:18-alpine
WORKDIR /app
COPY package*.json ./

# ---- Install Dependencies ----
RUN npm install --omit=dev

# ---- Build ----
COPY . .
RUN npm run build


# Expose the port the app will run on
EXPOSE 4730

# Start the application
CMD ["npm", "start"]