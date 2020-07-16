// Bash Parse Logs
// In the Bash script, wite a program that gets the raw output logs that exist at URL https://coderbyte.com/api/challenges/logs/web-logs-raw. The logs there are a sample of real web server logs. Each line begins with a date, e.g. Apr 10 11:17:35. Your program should do the following:

// Loop through each log item, and find the lines that contain the string coderbyte heroku/router. For each of those, echo the request_id value to a new line, and if the fwd key has the value of MASKED, then add a [M] to the end of the line with a space before it. Your final output should look something like the following:

// b19a87a1-1bbb-000-00000
// b19a87a1-1bbb-000-11111
// 8bb2413c-3c67-4180-22222 [M]
// 10f93da3-2753-48a3-33333 [M]

// #!/bin/bash
// curl -s https://coderbyte.com/api/challenges/logs/web-logs-raw -O > /dev/null
// cat web-logs-raw