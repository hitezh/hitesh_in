---
title: "Adding context to your logs"
date: "2010-03-06"
categories: 
  - "technology"
tags: 
  - "log4j"
  - "log4net"
  - "logging"
---

\[caption id="" align="alignright" width="316" caption="joysaphine @ flickr"\][![](images/4366947275_0327144c7b.jpg "Logs with markings")](http://www.flickr.com/photos/joysaphine/4366947275/)\[/caption\]

If you have ever worked on a multi-threaded application or even any application of significant scope, one of the unwritten requirement is a log file that helps in supporting the application.

The challenge is to be able to piece together all the scattered log entries that belong together, may be as a single transaction, or a user's session. So the goal is to have a unique identifier in each log entry that will aid _greping._ If you have ever faced this, you either did it cleanly as I will detail below, or you had to hack in a 'context' to each log entry by appending / prefixing some unique id.

I will talk about the two most commonly used logging frameworks are [Apache's log4j and log4net](http://logging.apache.org/).

#### The bad (obvious) way:

logger.**info**(uid + " I am doing something important");
logger.**debug**(uid + " I am doing something else");

The problems with this approach are

- might not have access to the uid in each function that is called
- need to remember to append the uid everywhere
- no way to do it in common code, utility libraries, etc.

The good news is, support for such a use case is baked into log4j and log4net.

### Mapped Diagnostics Context - log4j [MDC](http://logging.apache.org/log4j/1.2/apidocs/org/apache/log4j/MDC.html)

MDC class has a thread local hashtable, in which you need to inject your context at the beginning of the transaction. All subsequent log entries will automatically contain the context as well.

MDC.**put**("uid", uid);
logger.**info**("I am doing something important");
logger.**debug**("I am doing something else");

logger.**debug**("I am in a completely different code block.");

You can inject as many key/value pairs into MDC as you like. To print the values contained in the MDC context, change the logging format to include the %X{uid} or whatever keys you have passed to the MDC. Something like:

log4j.appender.R.layout.ConversionPattern=%p %t %c **%X{uid}** - %m%n

Now each log entry will contain the uid that was set in the beginning of the transaction.

### ThreadContext.Properties - log4net

The equivalent in log4net is the [ThreadContext.Properties](http://logging.apache.org/log4net/release/sdk/log4net.ThreadContext.html)

The usage is pretty similar, instead of MDC.put, call

ThreadContext.Properties\["uid"\] = uid;

and include **%property{uid}** in the output format. Something like:

<conversionPattern value="%timestamp \[%thread\] %level %logger **%property{uid}** - %message%newline" />

That is all, ain't this cleaner? BTW, have a look at [NDC](http://logging.apache.org/log4j/1.2/apidocs/org/apache/log4j/NDC.html) / [ThreadContext.Stacks](http://logging.apache.org/log4net/release/sdk/log4net.ThreadContext.Stacks.html) as well.
