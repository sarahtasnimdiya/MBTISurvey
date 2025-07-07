# MBTI Personality Research Survey

This is a web-based MBTI (Myers-Briggs Type Indicator) personality data collection form, developed for academic research purposes. Participants are instructed to complete the MBTI test on [16Personalities.com](https://www.16personalities.com/) and submit their results along with demographic information through this form.

This project aims to support the collection of structured MBTI personality data for use in personality prediction, behavioral analysis, and psychological research.

## Live Demo

[Visit the Website](https://mbti-research.web.app/)  

## Features

- Responsive and user-friendly survey form
- Collects the following fields:
  - Name/ID
  - Age
  - Gender
  - Education Level
  - Primary Area of Interest
  - MBTI result link
  - Optional writing sample
- Firebase Firestore integration for storing submissions
- Clean interface modeled to visually align with 16Personalities design
- Redirects to a Thank You confirmation page upon successful submission

## Folder Structure

MBTI-site/
├── index.html # Main survey form
├── thankyou.html # Confirmation page after submission
├── script.js # Firebase logic and form handling
├── style.css # Styling for all components
├── assets/
│ └── puzzle.png # Icon used in the favicon and header
└── README.md # Project documentation

markdown
Copy
Edit

## Getting Started

### Prerequisites

- A Firebase project with Firestore enabled
- Firebase SDK configuration keys
- A modern web browser for testing or deployment

### Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/mbti-survey.git
   cd mbti-survey
Add your Firebase configuration to script.js:

js
Copy
Edit
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  ...
};
Replace the icon in assets/puzzle.png with your preferred image, if necessary.

Deploy the site using your preferred hosting provider (Firebase Hosting, GitHub Pages, Netlify, Vercel, etc.).

License
This project is licensed under the GNU Affero General Public License v3.0 (AGPL-3.0).

Summary of License Terms
You are permitted to copy, modify, and distribute this software.

Any public use or deployment of a modified version requires publishing its corresponding source code under the same license.

The full license text is available at: GNU AGPL v3.0

Acknowledgements
MBTI test provided externally via 16Personalities.com

Firebase used for cloud data storage and hosting

Designed and implemented by Your Name

Contact
For research inquiries or collaboration requests, please contact:
diya15-5423@diu.edu.bd
