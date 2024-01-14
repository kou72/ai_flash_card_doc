import clsx from "clsx";
import styles from "./styles.module.css";
import { Button, Box } from "@mui/material";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
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
          <div className={styles.aisection}>
            <div className="row">
              <div className={clsx("col col--6")}>
                <SmartToyIcon
                  sx={{
                    fontSize: 50,
                    color: "primary.main",
                  }}
                />
                <h3>写真をアップロード！あとはAIにお任せ！</h3>
                <p>
                  画像のテキストから、自動で重要キーワードを抽出し、あっという間に暗記カードを生成。
                  <br />
                  暗記に集中して、学習効率をアップさせましょう！
                </p>
              </div>
              <div className={clsx("col col--6")}>
                <img
                  src={require("@site/static/img/homepagegif1.gif").default}
                  alt="homepagegif1.gif"
                  width="450px"
                />
              </div>
            </div>
          </div>
          <div className={styles.trysection}>
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
                    カードを生成を試してみる
                  </Button>
                </div>
              </div>

              <div className={clsx("col col--6")}>
                <div className={styles.uploadimg}>
                  <img
                    src={require("@site/static/img/sampledoc.png").default}
                    alt="sampledoc.png"
                  />
                </div>
                <Button variant="contained">画像を変更する</Button>
                <p>
                  <a href="https://ankidoc.site/privacy">プライバシーポリシー</a>
                  を確認してください
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
        </div>
      </section>
    </ThemeProvider>
  );
}
