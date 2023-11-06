export PATH=$PATH:/home/ubuntu/.nvm/versions/node/v20.5.1/bin

cd /home/ubuntu/Automatic-Question-Generator
    git pull origin master
    yarn build
    npm --name "express" -- run "start:express"
