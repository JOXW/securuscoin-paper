######################################
#!/usr/bin/env bash
# For display purposes only.
# If you use this script, you'll die.
######################################

cd /var/www/html/wallet # make sure we're being called in the right place
rm -rf /var/www/html/wallet/* # lol yolo
rm -rf /var/www/html/wallet/.git # Rage commit
git clone https://github.com/turtlecoin/paper-turtle . # this would have been git pull, but isn't
chmod +x pull.sh # get perms ready for next time
echo COMPLETE # bet you didnt know you can echo without quotes

# comment
