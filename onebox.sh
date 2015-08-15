
docker stop -t=0 rsvpme
docker rm -f rsvpme

docker run --privileged --net=host --restart=always -d --name=rsvpme \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -e ROOT_URL=http://localhost \
    -e MONGO_URL=mongodb://localhost:27017 \
    -p 3000:54321 \
    trriplejay/rsvpme:latest
