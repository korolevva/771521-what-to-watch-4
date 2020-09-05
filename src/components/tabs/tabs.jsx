import React from "react";
import PropTypes from "prop-types";

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

Tabs.propTypes = {
  tabs: PropTypes.array,
  activeTab: PropTypes.string,
  onTabClick: PropTypes.func,
};

export default Tabs;


