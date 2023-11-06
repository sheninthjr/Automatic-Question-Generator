
export PATH=$PATH:/home/ubuntu/.nvm/versions/node/v21.1.0/bin

cd /home/ubuntu/Automatic-Question-Generator
    git pull origin master
    cd packages/prisma
    yarn start:express
