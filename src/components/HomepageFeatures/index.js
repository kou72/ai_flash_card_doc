import clsx from "clsx";
import styles from "./styles.module.css";

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <h2>Ai暗記カードの特徴</h2>
      <h3>写真をアップロード！あとはAIにお任せ！</h3>
      <p className="text--center">
        アップロードした画像のテキストから、自動で重要キーワードを抽出し、あっという間に暗記カードを生成。
        <br />
        暗記に集中して、学習効率をグッとアップさせましょう！
      </p>
      <img src={require("@site/static/img/robot.png").default} alt="robot.png" width="300px" />
      <div>画像からカードを生成してみる</div>
      <div className="container">
        <div className="row">
          <div className={clsx("col col--6")}>
            <div className="text--center">
              <img
                src={require("@site/static/img/sampledoc.png").default}
                alt="sampledoc.png"
                height="300px"
              />
            </div>
          </div>
          <div className={clsx("col col--6")}>
            <div className="text--center">
              <img
                src={require("@site/static/img/screenshot_test_play.png").default}
                alt="screenshot_test_play.png"
                width="200px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
