---
title: "Django Flowchart"
date: "2009-12-09"
categories: 
  - "education"
  - "technology"
tags: 
  - "django"
  - "flowchart"
  - "python"
---

Based on my current understanding of Django, this is how a user request is responded to.

![Django Flowchart](images/120909_1217_DjangoFlowc1.png)

1. User requests a page
2. Request reaches _Request Middlewares_, which could manipulate or answer the request
3. The _URLConf_finds the related View using urls.py
4. _View Middlewares_ are called, which could manipulate or answer the request
5. The _view_ function is invoked
6. The view could optionally access data through models
7. All _model_\-to-DB interactions are done via a _manager_
8. Views could use a special _context_ if needed
9. The context is passed to the _Template_ for rendering

1. Template uses _Filters_ and _Tags_ to render the output
2. Output is returned to the view
3. _HTTPResponse_ is sent to the _Response Middlerwares_
4. Any of the response middlewares can enrich the response or return a completely new response
5. The response is sent to the user's browser.

Please leave a comment if I have got something wrong.
