<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
  </head>
  <body>
    <h1>Hi, Easy Invoice Team</h1>
<p>This is sending Mail from Laravel.</p>


<h2>Email from: {{$fullname}}</h2>
<p>Email address: {{$email}}</p>
<p>Phone: {{$phone}}</p> 
<p>Organisation: {{$organisation}}</p> 


<p>Message for you: </p>
<p>{{$text}}</p>

<em>This email was sent from your site https://easy-invoice.codeboot.cz/ contact form.</em>
  </body>
</html>