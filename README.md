# Papa Portfolio Web

Portfolio website for **Pradana Novan Rianto** — Backend Engineer specializing in Golang.

## Stack

- **React 18** + **Vite** (TypeScript)
- **Tailwind CSS v4**
- **React Query** (@tanstack/react-query) for data fetching
- **Docker** + **Nginx** (multi-stage build)

## Sections

- Hero / Introduction
- About
- Experience (Bussan Auto Finance + Freelance)
- Skills (Golang, PostgreSQL, Gin, Fiber, etc.)
- Education & Certifications
- Contact

## Local Development

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # Production build → dist/
npm run preview    # Preview production build
```

## Docker

```bash
# Build image
docker build -t papa-portfolio .

# Run container
docker run -d -p 8080:80 --name papa-portfolio papa-portfolio

# With docker-compose
docker-compose up -d
```

## Deploy

Push to `main` → GitHub Actions automatically:
1. Builds the Docker image
2. Tests the container (curl health check)
3. Pushes to GHCR (`ghcr.io/pradananovanr/papa-portfolio:latest`)

To deploy on a VPS:
```bash
docker pull ghcr.io/pradananovanr/papa-portfolio:latest
docker run -d -p 80:80 --restart unless-stopped \
  --name papa-portfolio \
  ghcr.io/pradananovanr/papa-portfolio:latest
```
