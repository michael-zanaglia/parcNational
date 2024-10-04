@ECHO OFF
docker exec -it mysql-db sh -c "mysqldump -u root -p mercantour > /tmp/export.sql"&&
docker cp mysql-db:/tmp/export.sql .&&
echo "BDD exportée."