type MiniAppsType = {
  miniApps: {
    title: string
    section: string
    webUrl: string
    gitUrl: string
    excerpt: string
    image: string
  }[]
}

type ProjectInfoType = {
  description: {
    text: string
  }[]
  webUrl: string
  gitUrl: string
  title: string
  builtWith: {
    title: string
    iconName: string
  }[]
}

type DeveloperInfoType = {
  devInfo: {
    title: string
    iconName: string
    excerpt: {
      text: string
    }[]
  }
}

type MySkillsType = {
  mySkills: {
    title: string
    iconName: string
    skills: {
      title: string
    }[]
  }[]
}
