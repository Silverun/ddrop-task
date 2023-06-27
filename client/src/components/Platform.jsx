import PlatformStyle from "../styles/components/Platform.styled";

const Platform = (props) => {
  let result;

  switch (props.platform) {
    case "Twitch":
      result = (
        <PlatformStyle.Img src="https://www.designbust.com/download/1049/png/twitch_transparent_logo256.png" />
      );
      break;
    case "YouTube":
      result = (
        <PlatformStyle.Img src="https://cdn.iconscout.com/icon/free/png-256/free-youtube-86-226404.png?f=webp" />
      );
      break;
    case "Kick":
      result = (
        <PlatformStyle.Img src="https://www.sauber-group.com/wp-content/uploads/2023/01/KICK_400x400_black-01-01.png" />
      );
      break;
    case "TikTok":
      result = (
        <PlatformStyle.Img src="https://www.designbust.com/download/1010/png/tik_tok_logo_png_transparent256.png" />
      );
      break;
    case "Rumble":
      result = (
        <PlatformStyle.Img src="https://companiesmarketcap.com/img/company-logos/256/RUM.png" />
      );
      break;
  }

  return result;
};

export default Platform;
