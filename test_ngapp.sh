#!/bin/bash

# download the node modules
# npm install

# remove the container if exists or running 
if [ $(docker container ls -q -a --filter name=myclient_con) != '' ]; then
    docker container stop myclient_con
    docker container rm myclient_con
fi

# remove the image if exists
if [ $(docker image ls -q --filter reference=myserver) != '' ]; then
    docker image rm myclient
fi

# build the image
docker build -t myclient .

# start the container
docker container run -itd -p 4200:80 --name myclient_con myclient