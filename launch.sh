#!/bin/bash
npm install
sudo /opt/lampp/lampp stop
sudo service docker start
sudo systemctl start docker
sudo docker compose up --build&
