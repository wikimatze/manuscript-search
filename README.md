# manuscript-search


                         Docker Compose
                              │
               ┌──────────────┴──────────────┐
               │                             │
               ▼                             ▼
          React + TS                       Solr
          localhost:3000              localhost:8983
               │                             │
               │       HTTP / JSON          │
               └──────────────┬──────────────┘
                              │
                              ▼
                         Suchergebnisse
                              │
                              ▼
                       IIIF Manifest URL
                              │
                              ▼
                           Mirador



# Locale setup

- Dependencies: `$ nvm install 22 && nvm use 22`
- locale scafefolding with TypeScript and React:

```
% npm create vite@latest frontend -- --template react-ts
Need to install the following packages:
create-vite@9.1.2
Ok to proceed? (y) y


> npx
> create-vite frontend --template react-ts

│
◇  Which linter to use?
│  ESLint
│
◇  Install with npm and start now?
│  Yes
│
◇  Scaffolding project in /home/wm/git/manuscript-search/frontend...
│
◇  Installing dependencies with npm...

added 152 packages, and audited 153 packages in 30s

42 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
│
◇  Starting dev server...

> frontend@0.0.0 dev
> vite


  VITE v8.2.1  ready in 317 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

- App runs on <http://localhost:5173/>

