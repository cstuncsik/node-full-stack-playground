#!/bin/bash
TYPE=${1:-prod}

service mongod start
npm run $TYPE
