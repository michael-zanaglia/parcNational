#!/bin/bash
npm install
sudo service docker start
sudo systemctl start docker
sudo docker compose up --build
