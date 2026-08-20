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



