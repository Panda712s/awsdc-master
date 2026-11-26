# Gauteng Debate Website Agent Guide

## 1. Project Identity
Gauteng Debate is a South Africa based debate, conference, and workshop organisation. We build community through youth, kids, and young adults programmes that encourage growth, critical thinking, and open discourse on topics society often finds uncomfortable. We do this by organising debate championships, conferences, workshops, and the Gauteng Forum conference series.

## 2. Primary Goals of the Website
The website should clearly communicate who Gauteng Debate is and what it stands for.  
It should showcase our programmes and flagship events.  
It should make it easy to register for events and apply for roles such as adjudicators, tab team members, volunteers, and speakers.  
It should publish announcements, schedules, and key documents.  
It should attract partners and sponsors through credibility and clear storytelling.  
It should provide a simple way to contact us and join our wider community.

## 3. Target Audiences
High school learners and debate clubs  
University students and young professionals  
Parents and educators  
Coaches and adjudicators  
Partners and sponsors  
Community members interested in civic discourse

## 4. Brand Voice
The tone should be warm, clear, ambitious, and grounded.  
Community first and growth oriented.  
Youth empowering without being patronising.  
Confident but not corporate.  
Accessible language with minimal jargon.

## 5. Visual Direction
The design should be modern and clean with bold typography and generous spacing.  
High contrast and strong readability are essential.  
The African context should feel authentic and contemporary without clichés.  
Photography should feel real and community based.  
Tailwind CSS must be used for all styling without heavy UI kits unless explicitly requested.

## 6. Core Pages and Sections

### Home
Hero section clearly stating the mission with a primary call to action  
Featured media section highlighting recent tournaments  
Upcoming event highlight card  
What we do section with three or four core pillars  
Gauteng Forum spotlight section  
Testimonials or credibility signals  
Sponsors and partners strip  
Join the community or newsletter call to action  
Footer with contact information and links

### About
Mission and organisational story  
Values and approach to community building  
Team section  
Impact metrics if available

### Events
Listing of upcoming and past events  
Each event must have its own page  

Event pages should include  
Overview  
Dates and location  
Who the event is for  
Fees if applicable  
Schedule highlights  
Registration call to action  
Downloads section for documents  
Media section with images and video if available

### Gauteng Forum
Explanation of the Forum and its purpose  
Past editions and themes  
Upcoming Forum announcements  
Speaker or partner highlights

### Programmes
Youth workshops  
Schools outreach  
Training and coaching  
Community dialogues

### Resources
Rules and formats  
Handbooks  
Code of conduct  
Judging resources  
Media kit

### News and Updates
Announcements  
Applications opening and closing  
Tournament results and recaps  
Partner announcements

### Contact
Contact form  
Email and social links  
Location context

## 7. Media Assets and Embedded Content

### YouTube Videos
The website must prominently feature two official videos from recent Gauteng Debate tournaments. These videos are core credibility and storytelling assets.

Video one  
Displayed title Gauteng Debate Championship Highlights  
YouTube link https://youtu.be/QoA3KNNjBb8  

Primary usage  
Homepage featured media section  
Events recap sections  
Tournament specific pages

Video two  
Displayed title Gauteng Debate Tournament Recap  
YouTube link https://youtu.be/uQJLPl-KY1Q  

Primary usage  
Homepage secondary media section  
Events archive pages  
Community and impact sections

Implementation rules  
Videos must be embedded using responsive iframes  
Aspect ratio must be preserved on all screen sizes  
Autoplay must be disabled  
Accessible titles and aria labels are required  
Do not replace videos with placeholders or thumbnails unless explicitly instructed

### Images Folder
All images are stored locally in the `/images` folder.

Rules for image usage  
Always reference images from the local images folder  
Do not use external stock images unless explicitly instructed  
Prioritise real event photography and community engagement  
Every image must include descriptive alt text

Recommended usage  
Hero sections should use strong event imagery  
Event pages should include image galleries  
About and Programmes pages should showcase youth and community participation  
Avoid overly staged or corporate looking visuals

## 8. Key Calls To Action
Register for an event  
Apply to judge  
Apply to tab or CAP  
Volunteer  
Partner or sponsor  
Join the mailing list

## 9. Content Requirements
All content must be written in clear English using South African or UK spelling.  
No lorem ipsum placeholders in final pages.  
Dates must be explicit and consistent.  
If information is missing, use clearly labelled placeholders such as exact dates to be confirmed or registration link to be added.

## 10. Technical Requirements
Tailwind CSS must be used for all styling.  
Mobile first responsive layout is required.  
Accessibility is mandatory including semantic HTML, keyboard navigation, good contrast, and alt text.  
Performance matters through image optimisation and minimal animation.  
Use reusable components.  
If the stack is not specified, default to Next.js App Router with Tailwind CSS.

## 11. Navigation Structure
Home  
About  
Events  
Gauteng Forum  
Programmes  
Resources  
News  
Contact

## 12. Deliverables Expected From The Agent
A complete website scaffold styled with Tailwind CSS  
Reusable components for navigation, footer, cards, and section headers  
An event listing page and event detail template  
A news listing page with a post template  
A resources page with download cards  
Embedded YouTube video sections  
Local image galleries sourced from the images folder  
SEO basics including titles, descriptions, and open graph placeholders

## 13. What Not To Do
Do not invent sponsors, partners, or impact statistics.  
Do not add donation or payment systems unless explicitly requested.  
Do not introduce complex backend functionality unless asked.  
Do not remove or rename core navigation items without approval.

## 14. Questions The Agent Should Ask Only If Blocked
If the tech stack is unclear, default to Next.js and Tailwind.  
If brand colours are not provided, choose a neutral, professional palette.  
If event details are missing, use structured placeholders and keep layouts ready.

## 15. Success Criteria
A visitor understands Gauteng Debate within twenty seconds.  
Upcoming events are easy to find and register for.  
The website feels credible, modern, and community driven.  
The site performs well on mobile.  
Content can be updated easily for new events and announcements.