# sorting-app-test-1

## Available Routes

- `POST /api/sort-desc`  
  Body: `{ numbers: [1, 3, 2] }`

- `POST /api/max-subarray`  
  Body: `{ array: [1, 2, 3], length: 2 }`

- `POST /api/sum-even`  
  Body: `{ object: { a: 2, b: { c: 4 } } }`

## Run Project
```bash
npm install
npm start

## Run Test
```bash
npm install
npm test

## Run Project (with docker)
```bash
docker build -t sorting-app-test-1 .
docker run --rm sorting-app-test-1