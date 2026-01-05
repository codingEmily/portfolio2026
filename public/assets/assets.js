import CanvaLogo from "./MyLogo.png"

// export images here
export const assets = {
  CanvaLogo,
}

// export data here - currently fake data, but make whatever objects necessary to store real info in a reasonable way
export const workData = [
  {
    title: "Frontend Prject",
    description: "Web Design",
  },
  {
    title: "Geo based app",
    description: "Mobile App",
  },
]

// 1 example derived from YT video
export const serviceData = [
  {
    icon: assets.CanvaLogo,
    title: "Web Design",
    description: "Web development is the process of building, prgramming...",
    link: "",
  },
]

export const infoList = [
  {
    icon: assets.CanvaLogo,
    iconDark: assets.CanvaLogo,
    title: "Languages",
    description: "HTML, CSS, JavaScript, React, Next.js, Go",
  },
  {
    icon: assets.CanvaLogo,
    iconDark: assets.CanvaLogo,
    title: "Education",
    description: "No HS Diploma, 1 year of PCC",
  },
  {
    icon: assets.CanvaLogo,
    iconDark: assets.CanvaLogo,
    title: "Projects",
    description: "Have built more than 12 projects in React with JS",
  },
]

// just an example. I can use this kind of structure to export all the images of tools I use, or all project related images, etc.
export const toolsData = [assets.CanvaLogo]
