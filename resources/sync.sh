#!/bin/sh

mntdir=~/localmnt/dav
www_remote=${mntdir}/www


mount -v ${mntdir}
bundle exec jekyll build
cp -R _site/* ${www_remote}
cp -R _site/index.html ${www_remote}/index.php
