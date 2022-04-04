## Custom CSS

This extension allows the user to configure custom CSS that will be
added to all email messages (including replies and forwards) when they
are "composed".

Each time an email is opened in a compose window (write, reply, forward),
the custom CSS will be added to a newly created <style> element in the
email's head. If the head already contains a <style> element that was
added by this extension, it is replaced.
