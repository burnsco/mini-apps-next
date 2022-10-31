#!/bin/bash

echo What should the version be?
read VERSION

docker build -t coreymburns/miniapps:$VERSION .
docker push coreymburns/miniapps:$VERSION
