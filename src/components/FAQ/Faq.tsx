import React, { useEffect, useState } from "react";
import { useGlobalState } from "../../state/global-state";
import Collapse from "./components/Collapse/Collapse";

import "./Faq.css";

export default function Faq() {
  const response = useGlobalState((state) => state.response);
  const [faqs, setFaqs] = useState([]);
  const [category, setCategory] = useState(0);

  const handleCategoryChange = (categoryIndex: number) => {
    console.log(category);
    setCategory(categoryIndex);
  };

  return (
    <div className="faq">
      <div className="header">
        <div className="title text-primary">Frequently asked questions</div>
        <div className="filter">
          <span>filter by:</span>
          <div className="actual-filter">
            <span>selected Text</span>
            <ul
              className="select"
              style={{
                height:
                  (response?.scholarship.faqs.categories.length || 1) + 1 * 60,
              }}
            >
              {response?.scholarship.faqs.categories.map((category, i) => {
                return (
                  <li key={i} onClick={() => handleCategoryChange(i)}>
                    {category}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="body">
        <div className="collapsibles">
          <div className="line"></div>
          {response?.scholarship.faqs.items
            .filter(
              (item) =>
                item.type === response?.scholarship.faqs.categories[category]
            )
            .map((item, i) => {
              return (
                <Collapse
                  key={i}
                  type={item.type}
                  title={item.question}
                  content={item.answer}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
