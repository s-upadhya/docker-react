# use an existing docker image as a base
FROM alpine

# download and install dependency
RUN apk add --update redis #apk is a package manager

# tell the image what to do when it starts as a container
# primary command
CMD ["redis-server"]