---
title: "How to migrate from bottle.py to Flask micro framework?"
date: "2012-06-03"
categories: 
  - "technology"
---

I started [Sangeet Planner](http://sangeetplanner.com/) based on [bottle.py](http://bottlepy.org/) micro framework, which allowed for rapid prototyping. Soon I hit some problems with the plug-ins (lack of them) as well as [issue supporting multiple plugins](https://github.com/defnull/bottle/issues/295). Hence I decided to move over to [Flask](http://flask.pocoo.org), which has a much bigger ecosystem. Below are the steps I took to convert most of the application to Flask.

### Fix the imports

Use these imports:

```
from flask import Flask, render_template as template, request, make_response, jsonify, abort from flask.ext.sqlalchemy import SQLAlchemy 
```

instead of

```
from bottle import route, run, template, install, static_file, response 
import bottle 
```

The important part was importing flask.render\_template as template. This lets you continue using the bottle style call to template.

Similarly, I imported

```
from flask.ext.sqlalchemy import SQLAlchemy 
```

instead of

```
from bottle.ext import sqlalchemy 
```

### Change the startup process

```
if __name__ == "__main__": 
    bottle.debug(True)
    run(reloader=True)
```

changed to

```
# towards the beginging of the file, soon after imports 
app = Flask(__name__, template_folder='views',static_folder='public/static') 
# towards the end of the file 
if __name__ == "__main__": 
    app.run(debug=True) 
```

important to note, we are overriding the flask defaults to make them use the bottle conventions of having the templates stores in the views folder (template\_folder='views') and tell flask to serve all files from public/static as static files. This allows us to remove the static serving routes needed in bottle. For e.g. I had a few routes like the below, which are no longer needed.

```
@route('/static/:filename') 
def server_static(filename): 
    return static_file(filename, root='public/static') 
```

### Fixing the sqlalchemy plugin

The plugins in Flask are initialised differently to bottle. So I needed to change the bottle style sqlalchemy load as below:

```
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///mysqlite.db' 
conn = SQLAlchemy(app) 
db = conn.session 
```

The db object is not injected anymore in functions, so remove the input param. Along with other changes needed to account for the differences between bottle and flask the routes will look like this:

```
@route('/') 
def index(db): 
    #no change to function body 
    return template('index') 
```

```
@app.route('/') 
def index(): 
    #no change to function body 
    return template('index.tpl') 
```

### Reading request values

There are subtle differences in bottle and flask. I think some of them can be fixed with some monkey patching, but a quick find/replace did the trick for me.

A comparative table:

| Bottle | Flask |
| --- | --- |
| request.forms | request.form |
| request.POST | request.form |
| request.POST.getunicode(key) | request.form.get(key) |
| request.GET | request.args |
| request.GET.getall | request.args.getlist |
| request.get\_cookie | request.cookies.get (haven't looked into secure cookies yet) |
| response.set\_cookie | response = make\_response(...) response.set\_cookie |

### Declare the HTTP methods allowed

One last change was how allowed HTTP methods are delared.

In bottle:

```
@post('/some/route') 
```

In changed in flask to:

```
@app.route(' some/route', methods=['POST']) 
```

### Finally

Well, a few changes would have been less for me if I had used an app object in bottle as well, but the fixes were trivial.

Hope this guide helps you. In case you run into some other difference, please leave a comment below.
