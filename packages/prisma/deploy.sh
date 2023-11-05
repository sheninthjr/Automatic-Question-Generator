export PATH=$PATH:/home/ubuntu/.nvm/versions/node/v20.5.1/bin

cd /home/ubuntu/Automatic-Question-Generator
    git pull origin master
    yarn install
    yarn build
    pm2 stop express
    pm2 start npm --name "express" -- run "start:express"