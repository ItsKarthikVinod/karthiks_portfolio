const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Achievements", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const Achievements = [
  {
    id: 1,
    authority: "IIT Madras x Guvi",
    title: "Python Course on Multiple Languages",
    image: "/images/cert1.png",
  },
  {
    id: 2,
    authority: "freeCodeCamp",
    title: "Responsive Web Design",
    image: "/images/cert2.jpg",
  },
  {
    id: 3,
    authority: "HP",
    title: "Agile Project Management",
    image: "/images/cert3.png",
  },
  {
    id: 4,
    authority: "HackerRank",
    title: "Frontend Developer - React",
    image: "/images/cert4.png",
  },
  {
    id: 5,
    authority: "TCSion x TATA",
    title: "Communication Skills",
    image: "/images/cert5.png",
  },
  {
    id: 6,
    authority: "Google",
    title: "Gemini Certified Google AI",
    image: "/images/cert6.png",
  },
];

const techStack = [
  {
    category: "Languages",
    items: ["Python", "Javascript", "HTML", "CSS"],
  },
  {
    category: "Database",
    items: ["MongoDB", "MySQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Figma", "Firebase"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "CSS", "Bootstrap"],
  },
  {
    category: "Frontend",
    items: ["React JS", "Vanilla JS", "Next JS"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#4bcb63",
    link: "https://github.com/ItsKarthikVinod",
  },
  {
    id: 2,
    text: "YouTube",
    icon: "icons/youtube.svg",
    bg: "#f4656b",
    link: "https://www.youtube.com/@KarthikVinod9",
  },
  {
    id: 3,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/itskarthikvinod/",
  },
  {
    id: 4,
    text: "Mail",
    icon: "/icons/mail.svg",
    bg: "#FF866B",
    link: "mailto:karthivinu1122@gmail.com?subject=Want%20to%20connect!",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  Achievements,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "LifeMastery - Unlock Your True Potential",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "LifeMastery.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Engineered a full-stack productivity platform with secure Firebase authentication and real-time per-user cloud persistence",
            "Developed advanced goal management with nested subgoals, deadline tracking, reminders, and dynamic progress visualization",
            "Built a configurable Pomodoro system with background audio, session logging, and device sleep prevention ",
            "Designed habit tracker featuring streak analytics, AI-generated insights, and speech synthesis ",
            "Integrated AI-powered journaling with automated summaries and productivity analysis",
            "Implemented gamification (XP system, levels, rewards), oAline-first PWA support, and responsive light/dark UI ",
            "Enhanced user productivity and consistency by unifying task management, habit tracking, and focus tools into a single streamlined platform ",
          ],
        },
        {
          id: 2,
          name: "lifemastery.netlify.app",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://lifemastery.netlify.app",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "lifemastery_dark.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-60 right-90",
          imageUrl: "/images/project-11.png",
        },
        {
          id: 4,
          name: "lifemastery_light.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-30 right-60",
          imageUrl: "/images/project-12.png",
        },
        {
          id: 5,
          name: "Logo.ico",
          icon: "/images/logo-1.png",
          kind: "file",
          fileType: "img",
          imageUrl: "/images/logo-1.png",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Monthable",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "Monthable.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "Developed an interactive browser-based learning application to help users practice and memorize months through a guided typing quiz ",
            "Implemented dynamic DOM manipulation and keyboard event handling for real time letter-card generation and answer validation ",
            "Integrated the Web Speech API to provide audio pronunciation support for enhanced auditory learning ",
          ],
        },
        {
          id: 2,
          name: "monthable.netlify.app",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://monthable.netlify.app",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "monthable.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-2.png",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Pixelated",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "Pixelated.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Pixelated is a tool that lets you draw pixelated images.",
            "It enables you to draw various images in the platform itself.",
            "You can customise the panel dimensions according to your desire. ",
            "The image can be downloaded easily.",
            "No login required.",
          ],
        },
        {
          id: 2,
          name: "pixelated.vercel.app",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://pixelatedk.vercel.app",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "pixelated-1.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-31.png",
        },
        {
          id: 5,
          name: "pixelated-2.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-60 right-20",
          imageUrl: "/images/project-32.png",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/karthik.png",
    },
    {
      id: 2,
      name: "talk-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/gal3.png",
    },
    {
      id: 3,
      name: "address-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/gal5.png",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/karthik.png",
      description: [
        "Hey! I’m Karthik 👋, someone who loves creating things and figuring out how stuff works.",
        "I’m into  interests—like coding, studying science, design, and so much more.I enjoy turning ideas into something real.",
        "I like keeping things simple, clear, and actually useful—whether it’s in my work or how I learn.",
        "Outside of that, you’ll probably find me overthinking random ideas, staying up way too late, or getting obsessed with something new for no reason 😅",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
