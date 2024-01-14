import clsx from "clsx";
import styles from "./styles.module.css";
import { Button, Box } from "@mui/material";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import TaskIcon from "@mui/icons-material/Task";
import StyleIcon from "@mui/icons-material/Style";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blueGrey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: blueGrey,
  },
});

export default function HomepageFeatures() {
  return (
    <ThemeProvider theme={theme}>
      <section className={styles.features}>
        <h2>Ai暗記カードの特徴</h2>
        <div className="container">
          <AiSection />
          <TrialSection />
          <TestSection />
          <DeckSection />
        </div>
      </section>
    </ThemeProvider>
  );
}

const AiSection = () => {
  return (
    <div className={styles.subsection}>
      <div className="row">
        <div className={clsx("col col--6")}>
          <SmartToyIcon
            sx={{
              fontSize: 50,
              color: "primary.main",
            }}
          />
          <h3>写真をアップロード、あとはAIにお任せ</h3>
          <p>
            画像のテキストからキーワードを抽出し、自動で暗記カードを生成。
            <br />
            暗記に集中して、学習効率をアップさせましょう。
          </p>
        </div>
        <div className={clsx("col col--6")}>
          <img
            src={require("@site/static/img/aisection.gif").default}
            alt="aisection.gif"
            width="450px"
          />
        </div>
      </div>
    </div>
  );
};

const TrialSection = () => {
  return (
    <div className={styles.trialsection}>
      <div className="row">
        <div className={clsx("col col--12")}>
          <div className={styles.trybutton}>
            <Button
              variant="contained"
              startIcon={<SmartToyIcon />}
              style={{
                background: "linear-gradient(45deg, #5B7FFF 30%, #F57EFF 90%)",
                color: "white",
              }}
            >
              カード生成を試してみる
            </Button>
          </div>
        </div>
        <div className={clsx("col col--6")}>
          <div className={styles.uploadimg}>
            <img src={require("@site/static/img/sampledoc.png").default} alt="sampledoc.png" />
          </div>
          <Button variant="contained">画像を変更する</Button>
          <p>
            実行前に
            <a href="https://ankidoc.site/privacy">プライバシーポリシー</a>
            をご確認ください
          </p>
        </div>
        <div className={clsx("col col--6")}>
          <div className={styles.result}>
            <div className="text--center">
              <LocalOfferIcon
                sx={{
                  fontSize: 70,
                  color: "primary.light",
                }}
              />
              <Box sx={{ color: "primary.light" }}>
                <p>ここに結果が表示されます</p>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TestSection = () => {
  return (
    <div className={styles.subsection}>
      <div className="row">
        <div className={clsx("col col--6")}>
          <TaskIcon
            sx={{
              fontSize: 50,
              color: "primary.main",
            }}
          />
          <h3>シンプルで直感的なテストモード</h3>
          <p>
            親指一つの簡単操作で、作ったカードのテストができます。
            <br />
            〇△✕の三つの状態で学習具合を管理しましょう。
          </p>
        </div>
        <div className={clsx("col col--6")}>
          <img
            src={require("@site/static/img/testsection.gif").default}
            alt="homepagegif1.gif"
            width="450px"
          />
        </div>
      </div>
    </div>
  );
};

const DeckSection = () => {
  return (
    <div className={styles.subsection}>
      <div className="row">
        <div className={clsx("col col--6")}>
          <StyleIcon
            sx={{
              fontSize: 50,
              color: "primary.main",
            }}
          />
          <h3>カードはデッキにして管理</h3>
          <p>
            作ったカードはデッキという単位で管理できます。
            <br />
            ジャンルや単元ごとに整理して、効率的に学習しましょう。
          </p>
        </div>
        <div className={clsx("col col--6")}>
          <img
            src={require("@site/static/img/decksection.png").default}
            alt="decksection.png"
            width="450px"
          />
        </div>
      </div>
    </div>
  );
};
