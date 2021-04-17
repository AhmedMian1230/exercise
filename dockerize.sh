#!/bin/bash
docker build -t data-viewer .
docker run -d --restart=always --name data-viewer -p 3000:3000 data-viewer
docker ps