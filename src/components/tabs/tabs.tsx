import * as React from "react";

interface Props {
  tabs: Array<string>,
  activeTab: string,
  onTabClick: (tab: string) => void,
}

const Tabs = ({tabs, activeTab, onTabClick}) => {
  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {tabs.map((tab, i) => {
          const activeClass = tab === activeTab ? `movie-nav__item--active` : ``;
          return (
            <li key={`${tab}-${i}`} className={`movie-nav__item ${activeClass}`}>
              <a href="#" className="movie-nav__link"
                onClick={(evt) => {
                  evt.preventDefault();
                  onTabClick(tab);
                }}
              >
                {tab}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Tabs;


