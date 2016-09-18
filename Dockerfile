FROM debian:wheezy
MAINTAINER Csaba Tuncsik <csaba.tuncsik@gmail.com>

RUN apt-get update -y
RUN apt-get install git curl build-essential -y

RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -
RUN apt-get install nodejs -y
RUN npm set progress=false

RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
RUN echo "deb http://repo.mongodb.org/apt/debian wheezy/mongodb-org/3.2 main" > /etc/apt/sources.list.d/mongodb-org-3.2.list
RUN apt-get update -y
RUN apt-get install mongodb-org -y
RUN mkdir -p /data/db

ENV user node
ENV appDir /home/$user/app

RUN groupadd --system $user && useradd --system --create-home --gid $user $user
USER $user
RUN mkdir -p $appDir
WORKDIR $appDir
COPY bower.json $appDir
COPY package.json $appDir
RUN npm i
COPY . $appDir

USER root
RUN chmod +x ./docker-entrypoint.sh
ENTRYPOINT ["./docker-entrypoint.sh"]

EXPOSE 3000 3443
