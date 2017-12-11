FROM node
COPY . /home/app
WORKDIR /home/app
RUN npm install
RUN chmod 755 /home/app/bin/entrypoint
ENTRYPOINT ["/home/app/bin/entrypoint"]