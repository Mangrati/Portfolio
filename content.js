/* ==========================================================
   content.js  –  EDIT ONLY THIS FILE TO UPDATE YOUR PORTFOLIO
   Change the text, links, skills, jobs and projects below.
   (Colors live in style.css, page structure in index.html.)
   ========================================================== */
const CONTENT = {

  /* ---------- Personal details ---------- */
  profile: {
    name: "Muna Mangrati",
    availability: "Available for Remote & Full-time roles",
    email: "munamangrati0123@gmail.com",
    phone: "+977-9847978192",
    location: "Kathmandu, Nepal",
    photo: "images/muna.jpg",    
    cv: "Files/cv.pdf",    // put your photo in an "images" folder next to index.html
    stats: [                         // numbers shown under the hero text
      { value: "3+", label: "Years experience" },
     
     
    ],
    social: [                        // shown in the footer
      { label: "LinkedIn", url: "www.linkedin.com/in/moona-magrati-890b0b26a" },
      { label: "Whatsapp" },
      
    ]
  },

  /* ---------- Text blocks ---------- */
  hero: {
    before: "Designing interfaces",
    highlight: "people love",
    after: "to use.",
    text: "UI/UX and graphic designer who turns ideas into clear, beautiful and usable digital products."
  },
  about: {
    text: "UI/UX designer skilled in Figma, wireframing, prototyping and design systems, with a graphic design background in branding and visual communication. I design user-centered interfaces, collaborate closely with developers, and deliver clean, consistent, build-ready work. Available for remote and full-time roles.",
    tags: ["UI/UX Designer", "Graphic Designer"]
  },
  contact: {
    title: "Let’s work together",
    text: "I am open to Full-time and Remote UI/UX design opportunities. HR teams and hiring managers, send me a message and I will reply within 24–48 hours.",
    tags: ["Full-time", "Remote", "Hybrid"],
    jobTypes: ["Full-time", "Remote", "Contract"],
    formEndpoint: "https://formspree.io/f/mnpdodqr"                 // paste your Formspree URL here to receive real emails
  },
  

  /* ---------- Skills (one card per group) ---------- */
  skills: [
    { icon: "🎨", title: "UI/UX",          items: ["Figma", "Wireframing", "Prototyping", "User research", "Design systems"] },
    { icon: "✏️", title: "Graphic design", items: ["Photoshop", "Illustrator", "Indesign", "Meta","Branding", "Social media"] },
    { icon: "🤝", title: "Collaboration",  items: ["Dev handoff", "HTML/CSS basics", "Git", "Usability testing"] }
  ],

  /* ---------- Experience (newest first, copy a block to add a job) ---------- */
  experience: [
    { role: "Graphic Designer", company: "Northsea Construction & Developers Pvt. Ltd.", place: "Kathmandu", dates: "2025 May – Present",
      points: ["Designed engaging social media creatives, digital advertisements, promotional campaigns, and marketing materials across multiple platforms.",
        "Created branding and print collaterals, including brochures, product catalogs, company profiles, banners, flyers, ID cards, and warranty cards, ensuring professional print-ready output.",
      "Produced motion graphics and promotional videos while maintaining brand consistency and showcasing product features through creative visual storytelling."] },
    { role: "Graphic Designer", company: "AR Graphics", place: "Hetuada", dates: "2023 Sep – 2025 Feb",
      points: ["Designed and prepared print-ready files for colleges, organizations, corporate clients, and various businesses, ensuring professional layouts and accurate output.",
        "Worked on a wide range of printing materials, including brochures, banners, flex prints, flyers, posters, certificates, ID cards, invitations, and corporate stationery.",
      "Managed pre-press design requirements, including layout adjustments, typography, color modes (CMYK), bleed, resolution, and file preparation for high-quality printing."], tools: "" },
     { role: "UI/UX Designer", company: "Virtual Technology Pvt. Ltd.", place: "Pokhara", dates: "2026 Sep – Present",
      points: ["Designed user-friendly and visually appealing website and mobile app interfaces using Figma.",
        "Created wireframes, user flows, prototypes, and design layouts to improve user experience and usability.",
      "Applied UI/UX principles, including user-centered design, typography, color theory, responsive design, and visual hierarchy."], tools: "" }
    ],

  /* ---------- Project categories (these become the filter tabs) ---------- */
  categories: [
    { id: "social",   label: "Social Media Designs", icon: "📱"},
    { id: "brochure", label: "Brochures",            icon: "📖" },
    { id: "logo",     label: "Logos",                icon: "◎" },
    { id: "print",    label: "Printing Designs",     icon: "🖨" },
    { id: "email",    label: "Email Signature",      icon: "✉" }
    
  ],

  /* ---------- Projects: "category" must match a category id above ---------- */
  projects: [
    { category: "social",   title: "Design 1", image: "Project-Sample/Social-Media-Designs/1.jpg" },
    { category: "social",   title: "Design 2", image: "Project-Sample/Social-Media-Designs/2.jpg" },
    { category: "social",   title: "Design 3", image: "Project-Sample/Social-Media-Designs/3.jpg" },
    { category: "social",   title: "Design 4", image: "Project-Sample/Social-Media-Designs/4.jpg" },
    { category: "social",   title: "Design 5", image: "Project-Sample/Social-Media-Designs/5.jpg" },
    { category: "social",   title: "Design 6", image: "Project-Sample/Social-Media-Designs/6.jpg" },
    { category: "social",   title: "Design 7", image: "Project-Sample/Social-Media-Designs/7.jpg" },
    { category: "social",   title: "Design 8", image: "Project-Sample/Social-Media-Designs/8.jpg" },
    { category: "social",   title: "Design 9", image: "Project-Sample/Social-Media-Designs/9.jpg" },
    { category: "social",   title: "Design 10", image: "Project-Sample/Social-Media-Designs/10.jpg" },
    { category: "social",   title: "Design 11", image: "Project-Sample/Social-Media-Designs/11.jpg" },
    { category: "social",   title: "Design 12", image: "Project-Sample/Social-Media-Designs/12.jpg" },
    { category: "social",   title: "Design 13", image: "Project-Sample/Social-Media-Designs/13.jpg" },
    { category: "social",   title: "Design 14", image: "Project-Sample/Social-Media-Designs/14.jpg" },
    { category: "social",   title: "Design 15", image: "Project-Sample/Social-Media-Designs/15.jpg" },
    { category: "brochure", title: "Project title", result: "One-line result", image: "" , file: "Project-Sample/Brochures/Asset 1.pdf"},
    { category: "logo",     title: "Project title", result: "One-line result", image: "Project-Sample/logo/1.jpg" },
    { category: "print",    title: "Envelop", image: "Project-Sample/Printing-Designs/env.jpg",  file: "Project-Sample/Printing-Designs/Envelope.pdf" },
    { category: "print",    title: "ID Card", image: "Project-Sample/Printing-Designs/ID Card.jpg",  file: "Project-Sample/Printing-Designs/ID Card.pdf" },
    { category: "print",    title: "Quotation Cover", image: "Project-Sample/Printing-Designs/Quo.jpg",  file: "Project-Sample/Printing-Designs/Quotation Envelope.pdf" },
    { category: "email",    title: "Design 1", image: "Project-Sample/Email-Signature/img.jpg" },

    // To add work: copy a line, set the category, title, result and image (e.g. "images/logo1.jpg")
  ]
};
