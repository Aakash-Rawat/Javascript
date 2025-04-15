/* Modules

Modules in JavaScript are files that contain code you want to reuse or organize better. You can export stuff from one file and import it into another.

Think of them like containers or boxes:
📦 File A (exports something) → 📦 File B (imports it and uses it)
🟩 JavaScript Modules

✅ Modules help organize code into separate files.
✅ Use `export` to send variables/functions from a file.
✅ Use `import` to receive them in another file.

🧩 Named Export:
  export const name = 'Krishna';
  import { name } from './file.js';

🧩 Default Export:
  export default myFunc;
  import myFunc from './file.js';

📌 Use <script type="module"> in HTML
📌 Modules only run on servers (live server or bundler)

Benefits:
✔ Cleaner Code
✔ Reusability
✔ Separation of concerns

*/


import playGuitar from "./guitars.js";
import { shredding as shred ,plucking as picking} from "./guitars.js";
console.log(playGuitar());
console.log(shred());
console.log(picking());

import user from "./user.js";
const me = new user("email@gmail.com", "dave");
console.log(me);
console.log(me.greeting());




