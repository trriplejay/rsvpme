FROM trriplejay/meteorbase

ADD . /home/trriplejay/rsvpme
WORKDIR /home/trriplejay/rsvpme

RUN meteor build --directory /var/www/app

ENV PORT 54321 
ENV ROOT_URL http://127.0.0.1
ENV MONGO_URL mongodb://localhost:27017/rsvpme

RUN cd /var/www/app/bundle/programs/server && npm install

ENTRYPOINT ["/home/trriplejay/rsvpme/boot.sh"]

