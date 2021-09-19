using motion on raspberry pi was massively laggy and didn't support HTTPS, this is the new method

sudo nano /etc/motion/motion.conf for editing motion configuration

https://www.sigmdel.ca/michel/ha/rpi/streaming_en.html
https://github.com/jacksonliam/mjpg-streamer

SWITCHED TO RESTREAMER VIA DOCKER

https://datarhei.github.io/restreamer/docs/guides-embedding.html
https://datarhei.github.io/restreamer/docs/guides-usb-camera.html

trying this command now

[video4linux2,v4l2 @ 0x2011280] Cannot find a proper format for codec 'h264' (id 27), pixel format 'none' (id -1)

ffmpeg -ar 44100 -ac 2 -acodec pcm*s16le -f s16le -ac 2 -i /dev/zero -f v4l2 -thread_queue_size 10240 -codec:v h264 -s 1920x1080 -i /dev/video0 -codec:v copy -codec:a copy -f flv rtmp://a.rtmp.youtube.com/live2/\_key_removed*

ffmpeg -ar 44100 -ac 2 -acodec pcm_s16le -f s16le -ac 2 -i /dev/zero -f v4l2 -codec:v h264 -framerate 30 -video_size 1280x720 -i /dev/video0 -codec:v copy -f flv rtmp://live-lhr.twitch.tv/app/{stream_key}

https://www.npmjs.com/package/node-media-server

SEPTEMBER 13
https://www.okdo.com/project/streaming-server/
THIS IS TO RECEIVE STREAMS, NOT SEND THEM
