#!/bin/bash
npm install
sudo /opt/lampp/lampp stop
sudo service docker start
sudo systemctl start docker
sudo docker compose up --build&
firefox http://localhost:8081 > /dev/null&
firefox http://localhost:8080 > /dev/null
