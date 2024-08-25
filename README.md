# Node.js TypeScript Application

This is a Node.js application built with TypeScript. The application provides various text analysis features, such as counting words, letters, and specific characters, and identifying words with more than 10 occurrences in a given text.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18.x.x or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Docker](https://www.docker.com/get-started) (if you want to run the app in a container)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/MarcoGarlet/word-counter.git
cd word-counter
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the application in development mode

```bash
npm run dev
```

### 4. Build the application

```bash
npm run build
```

### 5. Run tests

```bash
npm test
```

## Docker

You can also run the application inside a Docker container. Below are the instructions to build and run the Docker container.

### 1. Build the Docker image

From the root of the project, build the docker image with:

```bash
docker build -t <app-name> .
```

The image is build correctly if the application passes all tests.

### 2. Run the Docker Container

```bash
docker run -p 3000:3000 <app-name>
```

## Getting started

### Using the application

Once the server is running on the specified port (default 3000), you can run the solution by making a POST request to `http://localhost:3000/api/wordStat/analyze` as follows:

```bash
curl -X POST http://localhost:3000/api/wordStat/analyze -H "Content-Type: application/json" -d '{"path": "/path/resource/or/url"}'
```

This should give an output like the following:

```json
{
  "totalWords": x,
  "spaceCount": x,
  "repeatedWords": [
    { "word": "word1", "count": n_word1 },
    { "word": "word2", "count": n_word2 },
    { "word": "word3", "count": n_word3 }
  ]
}
```
