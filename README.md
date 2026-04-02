# Your Company LLC — Website

A clean, professional website built with Python and Flask.

## Pages

| Page     | Description                                   |
|----------|-----------------------------------------------|
| Home     | Landing page with hero, features, and CTA     |
| About    | Mission statement and company values           |
| Services | Service offerings and work process             |
| Contact  | Contact form and business info                 |

---

## Run Locally

**Prerequisites:** Python 3.10 or newer.

```bash
# 1. Navigate to the project folder
cd llc-website

# 2. Create a virtual environment
python3 -m venv venv
source venv/bin/activate        # macOS / Linux
# venv\Scripts\activate         # Windows

# 3. Install dependencies
pip install -r requirements.txt

# 4. Start the dev server
python app.py
```

Open **http://localhost:5000** in your browser.

---

## Deploy to Render (Free)

Render is the easiest option for beginners. Here's how:

1. **Push your code to GitHub**
   - Create a free account at [github.com](https://github.com) if you don't have one.
   - Create a new repository and push this `llc-website` folder.

2. **Sign up at [render.com](https://render.com)** (free tier available).

3. **Create a New Web Service**
   - Click **New → Web Service**.
   - Connect your GitHub account and select the repository.
   - Render auto-detects the `render.yaml` config.
   - Click **Create Web Service**.

4. **Your site is live!** Render gives you a URL like `https://llc-website.onrender.com`.

5. **Custom domain (optional)**
   - In Render dashboard → Settings → Custom Domains.
   - Add your domain (e.g., `yourcompany.com`) and update your DNS records.

---

## Customize

### Change the company name
Search for "Your Company" across the templates and replace with your LLC name.

### Change colors
Edit the CSS variables at the top of `static/css/style.css`:

```css
:root {
    --color-primary: #4f46e5;    /* Main brand color */
    --color-accent: #7c3aed;     /* Gradient accent  */
}
```

### Add email functionality to the contact form
The contact form works but currently just logs submissions. To receive emails,
integrate a service like [SendGrid](https://sendgrid.com) or
[Mailgun](https://mailgun.com) — both have free tiers.

---

## Project Structure

```
llc-website/
├── app.py                 # Flask application and routes
├── requirements.txt       # Python dependencies
├── render.yaml            # Render deployment config
├── static/
│   ├── css/
│   │   └── style.css      # All styles
│   └── js/
│       └── main.js        # Mobile nav and scroll effects
└── templates/
    ├── base.html           # Shared layout (nav + footer)
    ├── index.html          # Home page
    ├── about.html          # About page
    ├── services.html       # Services page
    └── contact.html        # Contact page
```
