@ECHO OFF
docker exec -it mysql-db sh -c "mysql -u root -p mercantour < %1"