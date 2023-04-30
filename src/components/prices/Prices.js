import css from './prices.css';

import { AiOutlineCheckCircle } from 'react-icons/ai';

const Prices = () => {
  return (
    <div className="price_container">
      <div className="price_container_title">
        <h2 className="price_container_title__text">
          Google Chrome Extension Plans
        </h2>
        <div className="price_card__container">
          {/* <!-- Modern pricing table - Free --> */}
          <div className="price_card">
            <div>
              <div>
                <div>
                  <h5 className="price_card_title__text">Free</h5>
                  <div className="price_card_cost__container">
                    <span className="price_card_cost__span__dollar">$</span>
                    <span className="price_card_cost__span__number">0</span>
                    <span className="price_card_cost__span__mo">/mo</span>
                  </div>
                </div>

                <ul className="price_card_list">
                  <li className="price_card_list__item">
                    <AiOutlineCheckCircle className="price_card_icon" />
                    Word Definitions
                  </li>
                  <li className="price_card_list__item">
                    <AiOutlineCheckCircle className="price_card_icon" />
                    Up to 10 Lists
                  </li>
                </ul>

                <div>
                  <button className="price_card_button">
                    <a
                      className="price_card_button__text"
                      href="https://boostvocab.com/register"
                    >
                      Sign up today
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- {/* END : Modern pricing table - Free --> */}
          {/* <!-- Modern pricing table - MOnthly --> */}
          <div className="price_card">
            <div>
              <div>
                <div>
                  <h5 className="price_card_title__text">Monthly</h5>
                  <div className="price_card_cost__container">
                    <span className="price_card_cost__span__dollar">$</span>
                    <span className="price_card_cost__span__number">3.99</span>
                    <span className="price_card_cost__span__mo">/mo</span>
                  </div>
                </div>

                <ul className="price_card_list">
                  <li className="price_card_list__item">
                    <AiOutlineCheckCircle className="price_card_icon" />
                    Word Definitions
                  </li>
                  <li className="price_card_list__item">
                    <AiOutlineCheckCircle className="price_card_icon" />
                    Unlimited Lists
                  </li>
                  <li className="price_card_list__item">
                    <AiOutlineCheckCircle className="price_card_icon" />
                    Directly add words from any site using Chrome Extension
                  </li>
                </ul>

                <div>
                  <button className="price_card_button">
                    <a
                      className="price_card_button__text"
                      target="new"
                      href="https://buy.stripe.com/5kAdRpbLh3k71RS6oo"
                    >
                      Sign up today
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- END : Modern pricing table - Monthly --> */}

          {/* <!-- Modern pricing table - Yearly --> */}
          <div className="price_card">
            <div>
              <div className="popular_container">
                <span className="popular_span">POPULAR</span>
              </div>
              <div>
                <div>
                  <h5 className="price_card_title__text">Yearly</h5>
                  <div className="price_card_cost__container">
                    <span className="price_card_cost__span__dollar">$</span>
                    <span className="price_card_cost__span__number">29.99</span>
                    <span className="price_card_cost__span__mo">/year</span>
                  </div>
                </div>

                <ul className="price_card_list">
                  <li className="price_card_list__item">
                    <AiOutlineCheckCircle className="price_card_icon" />
                    Word Definitions
                  </li>
                  <li className="price_card_list__item">
                    <AiOutlineCheckCircle className="price_card_icon" />
                    Unlimited Lists
                  </li>
                  <li className="price_card_list__item">
                    <AiOutlineCheckCircle className="price_card_icon" />
                    Directly add words from any site using Chrome Extension
                  </li>
                </ul>

                <div>
                  <button className="price_card_button">
                    <a
                      className="price_card_button__text"
                      target="new"
                      href="https://buy.stripe.com/aEU6oX3eL6wjdAA7st"
                    >
                      Sign up today
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- // END : Modern pricing table - Yearly --> */}

          {/* <!-- // Modern pricing table - Lifetime --> */}
          <div className="price_card">
            <div>
              <div>
                <div>
                  <h5 className="price_card_title__text">Lifetime</h5>
                  <div className="price_card_cost__container">
                    <span className="price_card_cost__span__dollar">$</span>
                    <span className="price_card_cost__span__number">99</span>
                    <span className="price_card_cost__span__mo">one time</span>
                  </div>
                </div>

                <ul className="price_card_list">
                  <li className="price_card_list__item">
                    <AiOutlineCheckCircle className="price_card_icon" />
                    Word Definitions
                  </li>
                  <li className="price_card_list__item">
                    <AiOutlineCheckCircle className={css.price_card_icon} />
                    Unlimited Lists
                  </li>
                  <li className="price_card_list__item">
                    <AiOutlineCheckCircle className="price_card_icon" />
                    Directly add words from any site using Chrome Extension
                  </li>
                </ul>

                <div>
                  <button className="price_card_button">
                    <a
                      className="price_card_button__text"
                      target="new"
                      href="https://buy.stripe.com/4gwfZxbLh8Er54428a"
                    >
                      Sign up today
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- // END : Modern pricing table - Lifetime --> */}
        </div>
      </div>
    </div>
  );
};

export default Prices;
