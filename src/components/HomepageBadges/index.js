import clsx from "clsx";
import styles from "./styles.module.css";

export default function HomepageBadges() {
  return (
    <div className={styles.badges}>
      <div className="row">
        {BadgeList.map((props, idx) => (
          <Badge key={idx} {...props} />
        ))}
      </div>
    </div>
  );
}

function Badge({ href, img }) {
  return (
    <div className={clsx("col col--4")}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <img src={require("@site/static/img/" + img).default} alt={img} />
      </a>
    </div>
  );
}

const BadgeList = [
  {
    href: "https://apps.apple.com/jp/app/ai%E6%9A%97%E8%A8%98%E3%82%AB%E3%83%BC%E3%83%89/id1580596147",
    img: "app-store-badge.png",
  },
  {
    href: "https://play.google.com/store/apps/details?id=dev.skapp.ai_flash_card",
    img: "google-play-badge.png",
  },
  {
    href: "https://ankiapp.site/",
    img: "web-app-badge.png",
  },
];
