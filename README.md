# Sample-Tenant-Website
A full-stack tenant management web app featuring authentication, tenant profiles, rent tracking, and service requests. Built with modern front-end and back-end technologies, enabling secure data handling and smooth user interaction.





PART 1 — Deploy Frontend on GitHub Pages
Step 1: Create a GitHub repo
Example name: tenant-app
Step 2: Upload ONLY your frontend files into the root of the repo:
✔ index.html
✔ style.css
✔ script.js
Structure should look like:
tenant-app/
   index.html
   script.js
   style.css
(Frontend folder must NOT remain — move files out)
Step 3: Enable Pages
Go to Settings
Go to Pages
Select:
Branch: main Folder: /root
Save
Now your UI becomes available at:
https://<username>.github.io/tenant-app/


PART 2 — Deploy Backend on a Platform
Your backend is Node.js so these platforms work well:
Platform Free? Difficulty
Railway Yes Easy
Render Yes Medium
Vercel Yes Medium
Fly.io Yes Harder


I recommend:
⭐ Railway (easiest for beginners)
Steps (summary):
Sign up on railway.app
New Project → Deploy from GitHub
Select your backend repo
Railway detects Node project
Click Deploy
Railway gives you a URL like:
https://tenant-backend.up.railway.app
CONNECTING FRONTEND + BACKEND
Once backend is live, update frontend JS API calls:
Example:
fetch("https://tenant-backend.up.railway.app/api/tenants")
instead of:
Copy code
Js
fetch("http://localhost:3000/api/tenants")
