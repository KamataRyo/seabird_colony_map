#! /usr/bin
if $1 -eq ""; then
	echo aaa
fi
git add .
git commit -m "some fix"
git push origin gh-pages