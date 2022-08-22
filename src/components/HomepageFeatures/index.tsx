import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Tài liệu kĩ thuật",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Nơi chia sẻ các bài hướng dẫn về kĩ thuật được sử dụng nhiều trong dự án
        thực tế sẽ được mình tổng hợp tại đây
      </>
    ),
  },
  {
    title: "Blog kiến thức",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Chia sẻ về những kiến thức xung quanh cuộc sống lập trình viên, vui,
        buồn, sướng khổ, đủ mùi vị cuộc sống lập trình viên 🙂
      </>
    ),
  },
  {
    title: "Cùng nhau chia sẻ kiến thức",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Có những kiến thức có thể mình hiểu chưa tới hoặc hiểu sai thì hãy góp ý
        với mình để cùng hoàn thiện hơn.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
