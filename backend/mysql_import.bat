@ECHO OFF
docker cp %1 mysql-db:/tmp/to_import.sql&&
docker exec -it mysql-db -c "mysql -u root -p mercantour < /tmp/to_import.sql"&&
echo "BDD importée."