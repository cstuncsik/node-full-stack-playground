# ME~~A~~N Stack

## ~~A~~ = [knockout.js](http://knockoutjs.com/), [page.js](https://visionmedia.github.io/page.js/), [rxjs](https://github.com/Reactive-Extensions/RxJS), [zepto.js](http://zeptojs.com/)

### Playing around without angular

# Nodejs


**Start mongodb**

```
mongod
```

**Install dependencies**
```
npm i
```

**Import data from json to mongodb**

```
npm run import
```

**Export data from mongodb to json**

```
npm run export
```

**Start development**
```
npm run dev
```

*You can open the app at http://localhost:3000*

**Build production**

```
npm run build
```

**Serve production**

```
npm run serve
```

*You can open the app at https://localhost:3443*

# Docker

If you don't want to install mongodb or different version of nodejs
and you have docker already installed just run the commands below

**Create a docker container**

```
docker build --force-rm=true -t playground .
```

**Start docker container in production mode**

```
docker run --rm -it -p 443:3443 playground
```

**Start docker container in development mode**

```
docker run --rm -it -p 3000:3000 -v /home/cstuncsik/projects/node-full-stack-playground:/home/node/app playground dev 
```

*On windows the path setting is a little different*

```
docker run --rm -it -p 3000:3000 -v //c/Users/cstuncsik/projects/node-full-stack-playground:/home/node/app playground dev
```

## ISC License (ISC)

Copyright © 2016 Csaba Tuncsik <csaba.tuncsik@gmail.com>

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
