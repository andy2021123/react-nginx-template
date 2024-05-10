# Getting Started with react-nginx-template

This is a template frontend-only single page application with React.js that is served by nginx in either a docker container or on an origin server. 

## Dependencies

### Docker

You can go to https://www.docker.com/products/docker-desktop/ and download docker desktop for your given operating system. If you want to download just the docker engine, it is a little more complicated. See https://docs.docker.com/engine/install/ for installation instructions for your operating system.

### Makefile

Check to see if you have access to make from the command line (`make -v` or `make --version`). This may be the case for some Linux/macOS users. 

Download for windows from https://gnuwin32.sourceforge.net/packages/make.htm or download for linux using the appropriate package manager. i.e. for Debian/Ubuntu apt package manager, use the following:
```
sudo apt update
sudo apt install make
```

## Environment Variables

Copy the environment variables example file with `cp .env.example .env`. Fill with necessary environment variables such as postgres information, prescribed ports, api variables, etc.

## Running the Application

### With Docker

`make up` starts the client and server in development mode.

`make logs` opens logs for all current running containers.

`make update` rebuilds the production container for the app. This can be used to rebuild the app when changes are made.

`make deploy` runs the app in production mode (and builds the app if not already done).

### With Nginx

`make build` builds the app and copies the static production files to the /var/www/${APP_URL} folder to be served by Nginx. 