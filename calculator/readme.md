For use of tailwind css in plain html need to fix these steps.

 **1.  npm install -D tailwindcss
 **2. npx tailwindcss init
 ** 3. file (tailwind.config.js) paste this  ["*.html"]
 ** 4. make file input.css & paste this @tailwind base;@tailwind components;@tailwind utilities;
 ** 5. run this npx tailwindcss -i ./input.css -o ./output.css --watch


 make sure the terminal start building when you save some code. cautiously rebuilding



 