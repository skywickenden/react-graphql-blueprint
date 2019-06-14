# react-client-blueprint

A React client based on [react-client-blueprint](https://github.com/skywickenden/api-blueprint) and designed to work with [graphql-node-blueprint](https://github.com/skywickenden/graphql-node-api) backend

### Setup 

Copy the contents of `example.env` and `example.docker-compose.yml` in to the `.env` and `docker-compose.yml` files in the parent folder (Create them if needed). Fill in any missing values in `.env` - such as host ports.

From the parent folder:

  * Build with `docker-compose build`
  * Run with `docker-compose up`

To install new packages: Run the client docker with `docker-compose run api sh` and then use `api install <package_name>`. Type `exit` to return to your command line and then rebuild and rerun - only this time add a -V switch... `docker-compose up -V`. This will force the deletion of the anonymous node_package volume and prevent a [docker race condition issue.](https://github.com/docker/compose/issues/4337)

The main entry file is ./src/index.js

### Routing

Routing is performed with react-router-dom. Main route file is in `/src/routes.js`

### CSS

CSS is implemented via linaria. See `./src/layouts/main.js` for an example.

### Testing

Testing is done with Jest and react-testing-library. For an example of how to test css see `./src/layouts/main.js`.
