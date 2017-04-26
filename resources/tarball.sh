#!/bin/sh

local=_site

bundle exec jekyll build


rm ${local}/feed.xml
cp ${local}/index.html ${local}/index.php
(cd ${local}; 7z a ../issisp_www.zip *)
