import { useState } from "react";
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
import { height } from "@mui/system";

const testcardList = [
  {
    question:
      "情報通信白書で取り上げられている、ICTとデジタル経済の進化の先にあるとされる社会の形態は何か？",
    answer: "Society 5.0",
    note: "",
  },
  {
    question: "情報通信白書で語られている、ICTの新たな潮流として挙げられている3つの要素は何か？",
    answer: "デジタル・プラットフォーマー、AI、サイバーセキュリティ",
    note: "",
  },
  {
    question: "情報通信白書で示されている、ICTがもたらした新たな経済の姿を表す4つの用語は何か？",
    answer: "xTech、シェアリングエコノミー、ギグエコノミー、デジタル・プラットフォーマー",
    note: "",
  },
  {
    question:
      "情報通信白書で取り上げられている、ICTの発展により生じた新たな働き方について説明する用語は何か？",
    answer: "ギグエコノミー",
    note: "",
  },
  {
    question:
      "情報通信白書で取り上げられている、ICTの発展により生じた新たな経済の形態について説明する用語は何か？",
    answer: "デジタル経済",
    note: "",
  },
  {
    question:
      "情報通信白書で取り上げられている、ICTの発展により生じた新たなサービス形態について説明する用語は何か？",
    answer: "シェアリングエコノミー",
    note: "",
  },
  {
    question:
      "情報通信白書で取り上げられている、ICTの発展により生じた新たな技術領域について説明する用語は何か？",
    answer: "AI",
    note: "",
  },
  {
    question:
      "情報通信白書で取り上げられている、ICTの発展により生じた新たな通信技術について説明する用語は何か？",
    answer: "5G",
    note: "",
  },
  {
    question:
      "情報通信白書で取り上げられている、ICTの発展により生じた新たなデータ活用の形態について説明する用語は何か？",
    answer: "ビッグデータ",
    note: "",
  },
  {
    question:
      "情報通信白書で取り上げられている、ICTの発展により生じた新たなデバイスについて説明する用語は何か？",
    answer: "スマートフォン",
    note: "",
  },
  {
    question:
      "情報通信白書で取り上げられている、ICTの発展により生じた新たなネットワークの形態について説明する用語は何か？",
    answer: "IoT",
    note: "",
  },
];

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
  const [isLoaded, setIsLoaded] = useState(true);

  const generateImageToQaWeb = async () => {
    try {
      const sampledocPath = siteConfig.url + "/img/sampledoc.png";
      const sampledoc = await fetch(sampledocPath);
      const blob = await sampledoc.blob();

      const encodedFileName = btoa(encodeURIComponent("sampledoc.png"));
      const file = new File([blob], encodedFileName, { type: blob.type });
      const formData = new FormData();
      const url = "http://127.0.0.1:5001/flash-pdf-card/us-central1/generateImageToQaWeb";
      formData.append("file", file);
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
