---
title: "Javafx 1.2 - First impressions"
date: "2009-06-13"
categories: 
  - "technology"
tags: 
  - "javafx"
  - "totw"
---

Spent the last couple of days looking at Javafx, Sun's response to Silverlight and Flex. It is an interesting mix of ideas. Clearly inspired by dynamic languages as well as Silverlight. Maybe Flex as well, but I couldn't tell as I have not tried Flex.

###### Things I liked:

- **Type inference**: Could have been better, but I will take this any day over the verbose Java alternate
- **Binding**: In fact this is a great thing. Two way binding and binding with expression.
- **Triggers**: Need to explore more, but shows promise.
- **Timelines**: This along with the exceptional support for multimedia will help in creating the next killer app.
- **Collections**: You can iterate over collections in SQL like syntax which,to me, looks better than LINQ.
- **Strings and Dates**: Finally they get treated with the respect they deserve, since most of the time one is juggling text and dates.

###### Things I am meh about:

- **Declarative UI design**: I believe UI design is best left to designers (software not people)
- **Using all the available brackets**: All examples look like they have used up every possible punctuation mark
    
    :,=,{},\[\],(),;
    
- **Init vs. assignment**: The ambiguity on where to use a _variable : value_ and where to use a _variable = value_

Overall looks good and I am going to spend some time learning the innards of Javafx.

Finally, what I will like to see guidance on how patterns will evolve to address this new form of development. I immediately see a lot of older patterns not longer needed like Singleton, Visitor Pattern, Lazy Loading, Thread Pool Pattern, Observer Pattern and more. Similarly we need to recalibrate a few like the MVC, MVP patterns.
