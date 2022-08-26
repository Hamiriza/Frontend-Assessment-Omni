# Fileserver

## Pre-requisites

1. [Docker](https://docs.docker.com/get-docker/)
2. [Make](https://www.gnu.org/software/make/)
3. Free port on port 8080

## Start

1. Run `make` in this directory
2. The API will become available at http://localhost:3000
3. Use `http://localhost:3000/fs?path=${DIRECTORY_PATH}` to get the various paths
   1. To access the root directory, use `curl http://localhost:3000/fs?path=root`. Sample output JSON
      ```json
      {
        "id": "root",
        "entries": [
          {
            "name": "directory-1",
            "type": "directory"
          },
          {
            "name": "directory-2",
            "type": "directory"
          },
          {
            "name": "directory-3",
            "type": "directory"
          },
          {
            "name": "index.js",
            "type": "file"
          },
          {
            "name": "component-1.js",
            "type": "file"
          },
          {
            "name": "component-2.js",
            "type": "file"
          }
        ]
      }
      ```
   2. To access the `directory-1` path, use `curl "http://localhost:3000/fs?path=directory-1"`. Sample output JSON:
      ```json
      {
        "id": "directory-1",
        "entries": [
          {
            "name": "directory-1a",
            "type": "directory"
          }
        ]
      }
      ```
   3. To access the `directory-1/directory-1a` path, use `curl "http://localhost:3000/fs?path=directory-1%2Fdirectory-1a"`. Sample output JSON:
      ```json
      {
        "id": "directory-1/directory-1a",
        "entries": [
          {
            "name": "directory-1aA",
            "type": "directory"
          },
          {
            "name": "index.js",
            "type": "file"
          }
        ]
      }
      ```
   4. To access the file at `/index.js`, use `curl "http://localhost:3000/fs?path=index.js"`. Sample output JSON:
      ```json
      {
        "id": "index.js",
        "contents": "() => {console.log('index.js'}"
      }
      ```
4. npm install
5. npm start
