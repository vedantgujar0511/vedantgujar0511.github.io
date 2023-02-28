import emoji from "react-easy-emoji";

const greeting = {
    username: "Vedant Gujar",
    title: "Hi all, I'm Vedant",
    subTitle: emoji(
      "A passionate Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
    ),
    resumeLink:
      "*#*#*#*#*#*#*#*#", // Set to empty to hide the button
    displayGreeting: true // Set false to hide this section, defaults to true
  };
  const socialMediaLinks = {
    github: " https://github.com/vedantgujar0511",
    linkedin: "https://www.linkedin.com/in/vedant-gujar-177481192/",
    gmail: "vedantgujar0511@gmail.com",
    facebook: "https://www.facebook.com",
    instagram: "https://www.instagram.com/gujar__vedant/",
    // Instagram, Twitter and Kaggle are also supported in the links!
    // To customize icons and social links, tweak src/components/SocialMedia
    display: true // Set true to display this section, defaults to false
  };

  

  export {greeting,socialMediaLinks};
