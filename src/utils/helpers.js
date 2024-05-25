
export const isBrowser = () => typeof window !== "undefined"

export const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ')
}

export const getLocalStorage = (variableName) =>{
  if (typeof window !== 'undefined') {
    let requiredVar = localStorage.getItem(variableName)
    switch (variableName) {
      case 'auth':
        return isBrowser && requiredVar
          ? JSON.parse(requiredVar)
          : null;
      default:
        return {}
    }
  }
}

// smooth scroll
export const scrollToSection = (sectionId, options = { behavior: 'smooth', block: 'start', inline: 'nearest' }) => {
  // check id
  if (typeof sectionId !== 'string' || !sectionId.trim()) {
    console.error('Invalid section ID');
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  // get right section
  const section = document.getElementById(sectionId);
  //do action
  if (section) {
    section.scrollIntoView(options);
  } else {
    console.warn(`Section with ID '${sectionId}' not found. Scrolling to the top of the page.`);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}

