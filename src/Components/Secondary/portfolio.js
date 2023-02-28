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
    github: "https://github.com/saadpast",
    linkedin: "https://www.linkedin.com/in/saadpasta/",
    gmail: "saadpasta70@gmail.com",
    gitlab: "https://gitlab.com/saadpasta",
    facebook: "https://www.facebook.com/saad.pasta7",
    medium: "https://medium.com/@saadpasta",
    stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
    // Instagram, Twitter and Kaggle are also supported in the links!
    // To customize icons and social links, tweak src/components/SocialMedia
    display: true // Set true to display this section, defaults to false
  };

  

  export {greeting,socialMediaLinks};
