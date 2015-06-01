#! /usr/bin
if [[ $1 -eq "" ]]; then
	msg = "some fix"
else
	msg = $1
fi

git add .
git commit -m {$msg}
git push origin gh-pages