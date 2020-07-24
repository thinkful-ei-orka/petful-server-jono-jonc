# Petful Server

Petful Server is the server side codebase for the Petful project

## Stack

- NodeJS
- Express
- Middleware (cors)

### Usage

| Endpoint    | Service | Description                                                                                           |
| ----------- | ------- | ----------------------------------------------------------------------------------------------------- |
| /pets       | get     | Gets first dog object and first cat object in queue, returns them inside an object                    |
| /pets/:type | delete  | Dequeues the 'type' of animal passed in. Accepts: 'cat', 'dog', or 'both' (will dequeue both animals) |
