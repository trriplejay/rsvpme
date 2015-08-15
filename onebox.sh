
docker stop -t=0 rsvpme
docker rm -f rsvpme

if [ -n "$1" ]; then
  version="$1"
else
  version="latest"
fi

#docker run --privileged --net=host --restart=always -d --name=rsvpme \
#    -v /var/run/docker.sock:/var/run/docker.sock \
#    -e ROOT_URL=http://localhost \
#    -e MONGO_URL=mongodb://localhost:27017 \
#    -p 54321:54321 \
#    trriplejay/rsvpme:$version
docker run --restart=always -d --name=rsvpme \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -e ROOT_URL=http://localhost \
    -e MONGO_URL=mongodb://localhost:27017 \
    -p 54321:54321 \
    trriplejay/rsvpme:$version
