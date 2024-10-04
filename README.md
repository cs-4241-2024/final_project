# CS 4241 Final Project

[Hosted Link](https://final.tempel-alpha.ts.net)

[Proposal](PROPOSAL.md)

## Team
 - Liam Snow
 - Jake Olsen
 - Ben Tyler
 - Ryan Wright

## Development
```bash
npm run server # to view website (hosted at `http://localhost:3000`)
npm run tailwind # to live reload css
```

## Hosting

This project was self hosted on an Arch Linux
server with Docker and Tailscale.

__Example Docker Compose__ (tailscale removed):
```yaml
name: final
services:
  final:
    container_name: final
    image: node:latest
    volumes: [.:/app]
    working_dir: /app
    command: sh -c "npm install && npm start"
    restart: unless-stopped
```

__`.env` File__:
```bash
NODE_ENV=production
```


