import clsx from "clsx";
import styles from "./styles.module.css";

export default function HomepageBadges() {
  return (
    <div className={styles.badges}>
      <a
        // href="https://apps.apple.com/jp/app/ai%E6%9A%97%E8%A8%98%E3%82%AB%E3%83%BC%E3%83%89/id1580596147"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={require("@site/static/img/app-store-badge.png").default}
          alt="app-store-badge.png"
        />
      </a>
      <a
        // href="https://play.google.com/store/apps/details?id=dev.skapp.ai_flash_card"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={require("@site/static/img/google-play-badge.png").default}
          alt="google-play-badge.png"
        />
      </a>
      <a href="https://ankiapp.site/" target="_blank" rel="noopener noreferrer">
        <img src={require("@site/static/img/web-app-badge.png").default} alt="web-app-badge.png" />
      </a>
    </div>
  );
}
