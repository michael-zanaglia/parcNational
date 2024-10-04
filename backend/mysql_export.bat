@ECHO OFF
docker exec -it mysql-db sh -c "mysqldump -u root -p mercantour > export.sql"