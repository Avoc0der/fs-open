title Process when write some in text field and click submit

User->Browser: enter some text in text field and sumbit Browser->Server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note note over Browser: redirect end note browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes server-->browser: HTML-code browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css server-->browser: main.css browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js server-->browser: main.js

title Going to SPA browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa server->browser: HTML-code browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css server->browser: main.css browser->server: https://studies.cs.helsinki.fi/exampleapp/spa.js server->browser: spa.js browser->server: https://studies.cs.helsinki.fi/exampleapp/data.json server->browser: data.json

title Process when write some in text field and click submit (SPA)

User->Browser: enter some text in text field and sumbit Browser->Server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa Server->Browser: {"message":"note created"}
