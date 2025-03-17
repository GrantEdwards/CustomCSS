## Custom CSS

This extension allows the user to configure custom CSS that will be
added to all email messages (including replies and forwards) when they
are "composed".

Each time an email is opened in a compose window (write, reply, forward),
the custom CSS will be added to a newly created <style> element in the
email's head. If the head already contains a <style> element that was
added by this extension, it is replaced.

For example, here is the configuration I use

~~~
blockquote {
  background: #f9f9f9;
  border-left: 3px solid #ccc;
  margin: 1.5em 10px;
  padding: 0.5em 10px;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  max-width: 50em;
}
pre {
  font-family: 'Courier New', monospace;
}
~~~

For more inforation on CSS, this is a good place to start:

[https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics)

[https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Getting_started](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Getting_started)
