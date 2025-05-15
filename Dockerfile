# Stage 1: Build
FROM node:18-slim AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve with static server
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html

# Optional: replace default nginx config if needed
COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
