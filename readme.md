# Create Express server 

sudo apt update  
sudo apt install git  
git clone https://github.com/SzymonJozefowicz/epress-api.git  
cd epress-api  
sudo apt install npm  
npm install express  
npm start 

# Making app runing as deamon
- Install pm2  
sudo npm install -g pm2  
- Open crontab  
crontab -e  
- Add entry for action on reboot  
@reboot sh -c 'cd /home/azureuser/epress-api && pm2 start server.js'  
