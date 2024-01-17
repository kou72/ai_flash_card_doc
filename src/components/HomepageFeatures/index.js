import { useState, useRef } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import clsx from "clsx";
import styles from "./styles.module.css";
import { Button, Box, Card, CircularProgress } from "@mui/material";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import TaskIcon from "@mui/icons-material/Task";
import StyleIcon from "@mui/icons-material/Style";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blueGrey } from "@mui/material/colors";
import axios from "axios";

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
          <h3>画像をアップロード、あとはAIにお任せ</h3>
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
  const { siteConfig } = useDocusaurusContext();
  const [cardList, setCardList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [uploadFile, setUploadFile] = useState(null);
  const fileInputRef = useRef(null);

  const generateImageToQaWeb = async () => {
    try {
      const formData = new FormData();
      const url = "http://127.0.0.1:5001/flash-pdf-card/us-central1/generateImageToQaWeb";

      if (uploadFile) {
        const encodedFileName = btoa(encodeURIComponent(uploadFile.name));
        formData.append("file", uploadFile, encodedFileName);
      } else {
        const sampledocPath = siteConfig.url + "/img/sampledoc.png";
        const sampledoc = await fetch(sampledocPath);
        const blob = await sampledoc.blob();
        const encodedFileName = btoa(encodeURIComponent("sampledoc.png"));
        const file = new File([blob], encodedFileName, { type: blob.type });
        formData.append("file", file);
      }

      setIsLoaded(true);
      console.log("generating...");
      const response = await axios.post(url, formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      console.log(response.data);
      setCardList(response.data);
      setIsLoaded(false);
    } catch (error) {
      console.error(error);
    }
  };

  const Question = (card) => {
    return <div className={styles.question}>{card.question}</div>;
  };

  const Answer = (card) => {
    return <div className={styles.answer}>{card.answer}</div>;
  };

  const FlashCard = (card, index) => {
    const [isFlipped, setIsFlipped] = useState(false);
    return (
      <div key={index} onClick={() => setIsFlipped(!isFlipped)} className={styles.cardbase}>
        <Card className={styles.card}>{isFlipped ? Answer(card) : Question(card)}</Card>
      </div>
    );
  };

  const Empty = () => {
    return (
      <div className={styles.empty}>
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
    );
  };

  const Loading = () => {
    return (
      <div className={styles.loading}>
        <CircularProgress size="6rem" />
        <Box sx={{ color: "primary.light" }} className={styles.loadingtext}>
          <p>生成には30秒程度かかります</p>
        </Box>
      </div>
    );
  };

  const FlashCards = () => {
    if (isLoaded) return <Loading />;
    if (cardList.length == 0) return <Empty />;
    return (
      <>
        {cardList.map((card, index) => {
          return FlashCard(card, index);
        })}
      </>
    );
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    setUploadFile(file);
  };

  const handleChangeImageClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className={styles.trialsection}>
      <div className="row">
        <div className={clsx("col col--12")}>
          <div className={styles.trybutton}>
            <Button
              variant="contained"
              size="large"
              startIcon={<SmartToyIcon />}
              style={{
                background: "linear-gradient(45deg, #5B7FFF 30%, #F57EFF 90%)",
                color: "white",
              }}
              onClick={generateImageToQaWeb}
            >
              カード生成を試してみる
            </Button>
          </div>
        </div>
        <div className={clsx("col col--6")}>
          <div className={styles.uploadimg}>
            {uploadFile ? (
              <img src={URL.createObjectURL(uploadFile)} alt={uploadFile.name} />
            ) : (
              <img src={require("@site/static/img/sampledoc.png").default} alt="sampledoc.png" />
            )}
          </div>
          <Button variant="contained" onClick={handleChangeImageClick}>
            画像を変更する
          </Button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/jpeg, image/png"
            style={{ display: "none" }}
          />
          <p>
            実行前に
            <a href="https://ankidoc.site/privacy">プライバシーポリシー</a>
            をご確認ください
          </p>
        </div>
        <div className={clsx("col col--6")}>
          <div className={styles.result}>
            <FlashCards />
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
