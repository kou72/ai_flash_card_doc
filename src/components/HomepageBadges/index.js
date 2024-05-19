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
    href: "https://itunes.apple.com/jp/app/id6476872170?mt=8",
    img: "app-store-badge.png",
  },
  {
    href: "https://play.google.com/apps/testing/ankiapp.site.ai_flash_card",
    img: "google-play-badge.png",
  },
  {
    href: "https://ankiapp.site/",
    img: "web-app-badge.png",
  },
];
