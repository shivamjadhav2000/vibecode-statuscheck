Health Check Dashboard with Real-Time Monitoring

Overview

This project is a Service Health Metrics Dashboard that visualizes real-time operational status and performance metrics of popular services such as Slack, GitHub, Zoom, and Cloudflare.

It consists of:

- Frontend: A responsive dashboard UI built with HTML, CSS, and Chart.js for visualizing service health metrics including status distribution, response times, uptime percentages, and error rates.
- Backend: A Node.js Express server that:
  - Serves the frontend static files.
  - Acts as a proxy to fetch live status data from external APIs, solving browser CORS issues.
- Dockerized Setup: The entire application (backend + frontend) runs in a single Docker container for easy deployment and portability.

---

Motivation

Monitoring the health and availability of critical services is essential for system reliability and user satisfaction. This project provides:

- Real-time visibility into multiple key service metrics.
- A clean, intuitive UI inspired by major cloud provider dashboards (Azure, GCP).
- A proxy backend to safely fetch third-party status APIs without CORS restrictions.
- Containerization for consistent environment and easy scaling.

It's a practical tool for DevOps, SREs, or developers who want an aggregated health overview.

---

Features

- Real-time data fetching and dashboard updates every 10 seconds.
- Status summary with doughnut chart (Up vs Down).
- Bar charts for response times and error rates.
- Line chart for uptime percentage.
- Detailed table with all metrics for each service.
- Backend proxy for multiple external service status APIs.
- Single Docker container running backend + frontend.
- Simple and clean UI suitable for operational dashboards.

---

Project Structure

/statuscheck
  /backend
    index.js          # Node.js backend server with API proxies
    package.json      # Backend dependencies and scripts
  /public
    index.html        # Frontend dashboard UI
  Dockerfile          # Docker configuration to build the container
  README.txt          # This file

---

Setup and Run

Prerequisites

- Docker installed on your machine.

Build Docker Image

From the project root (statuscheck), run:

docker build -t health-dashboard .

Run the Container

docker run -p 3000:3000 health-dashboard

Access the Dashboard

Open your browser at:

http://localhost:3000/

You will see the real-time health dashboard showing metrics from Slack, GitHub, Zoom, and Cloudflare.

---

Backend Proxy API Endpoints

- /api/slack - Slack status API proxy
- /api/github - GitHub status API proxy
- /api/zoom - Zoom status API proxy
- /api/cloudflare - Cloudflare status API proxy

---

How It Works

- The frontend periodically fetches health data from backend proxy endpoints.
- The backend makes server-side requests to external status APIs to avoid CORS restrictions.
- Metrics are visualized on the frontend using Chart.js charts and tables.
- Docker container runs the full stack in a consistent environment.

---

Future Improvements

- Add more monitored services (AWS, Azure, GCP, etc.).
- Display detailed incident information and notifications.
- User authentication and personalized dashboards.
- Deploy on cloud platforms for public availability.
- Store historical data for trend analysis.

---

Author

Shivam Jadhav 
https://github.com/shivamjadhav2000
---
