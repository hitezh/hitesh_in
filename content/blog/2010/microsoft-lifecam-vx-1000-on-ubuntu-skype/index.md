---
title: "Microsoft LifeCam VX-1000 on Ubuntu + Skype"
date: "2010-07-11"
categories: 
  - "technology"
tags: 
  - "lifecam"
  - "skype"
  - "ubuntu"
---

Quick note to self, to save some searching next time.

Microsoft LifeCam VX-1000 does not quite work on Ubuntu and even worse with Skype. To get video working on Skype, start it as : `env LD_PRELOAD=/usr/lib/libv4l/v4l1compat.so skype`

And to get the microphone working, run this in a terminal `sudo rmmod gspca_sonixj sudo modprobe gspca_sonixj`
