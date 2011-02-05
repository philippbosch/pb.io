def jekyll(opts="", path="")
  sh path + "jekyll " + opts
end

desc "Build site using Jekyll"
task :build do
  jekyll "--no-server --no-auto"
end

desc "Serve on Localhost with port 4000"
task :default do
  jekyll "--server --auto"
end

desc "Copy generated 404.html file to root directory"
task :copy404 do
  sh "cp _site/404.html ."
  sh "git add 404.html"
end

desc "Deploy to GitHub Pages"
task :deploy do
  sh "git push origin gh-pages"
end
