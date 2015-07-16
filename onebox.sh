
docker stop -t=0 rsvpme
docker rm -f rsvpme
sudo docker run -d --name=rsvpme \
    -e ROOT_URL=http://localhost \
    -e MONGO_URL=mongodb://localhost:27017 \
    -e MONGO_OPLOG_URL=mongodb://oplog_url \
    -p 3000:80 \
    trriplejay/rsvpme 
