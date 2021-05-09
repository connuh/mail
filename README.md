# Mail - an API wrapper. 📧
### API Wrapper for [1secmail](https://www.1secmail.com/) written in [Deno](https://deno.land)!
---
# Usage

```ts
/**
 * @author Conner
 * @since 08/05/21
 */

import Mail from "./mod.ts";

/* Generate 10 E-Mails */
let emails: string[] = await Mail.generate(10);
console.log(emails); //> [ "item", "here" ]

/* Get E-Mails from an inbox */
let inbox: string[] = await Mail.get("hi@1secmail.org");
console.log(inbox) //> [ { id: 186037980, from: "conner@ra.pe", subject: "Testing", date: "2021-05-09 15:32:23" } ]

/* Get content from an E-Mail */
let content: string[] = await Mail.get("hi@1secmail.org", "186037980");
console.log(content); //> { id: 186037980, from: "conner@ra.pe", subject: "Testing", date: "2021-05-09 15:32:23", attachments: [], body: "Testing\n", textBody: "Testing\n", htmlBody: "" }
```

### Contributions
###### All contributions are accepted, simply open an Issue / Pull request.