
# Stops the website from running.
# updates the site from git hub
# puts together a production build
# starts the build as a pm2 instance
# saves pm2 so the system will reload current instances on reboot

pm2 flush
pm2 stop "planet-snake-website"
pm2 delete "planet-snake-website"
pm2 start "yarn start" --name "planet-snake-website"
pm2 save
pm2 logs --raw