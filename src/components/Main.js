import PropTypes from 'prop-types'
import React from 'react'
import CardContainer from './CardContainer'
import { skills } from '../data/skills';
class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <section className="contents">
            <h3 className="headline">Name</h3>
            <p className="description">
              佐々木 祥晶 （ささき よしあき）
            </p>

            <h3 className="headline">Age</h3>
            <p className="description">
              20
            </p>

            <h3 className="headline">Profile</h3>
            <p className="description">
              一関工業高等専門学校<br />
              第 5 学年  情報・ソフトウェア系 出身<br />
              <div className="space"/>
              React を使ったフロントエンドの開発に興味を持っており、
              およそ 2 年前から独学で勉強を続けている。<br />
              <div className="space"/>
              高専のグループワーク型授業では、UI のデザインやアーキテクチャの
              設計・実装に携わり、学んだ React の知識を活かしてグループに貢献した。<br />
              <div className="space"/>
              最近は、過去に作った Web アプリケーションを TypeScript で書き直したり、
              Storybook を使ったデザイン管理やスナップショットテストを取り入れるなど、
              フロントエンドエンジニアを目指して日々研鑽に励んでいる。
            </p>
          </section>
          {close}
        </article>

        <article
          id="skill"
          className={`${this.props.article === 'skill' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Skills</h2>
          <section className="contents">
            <h3 className="headline">Language</h3>
            <p className="description">
              <CardContainer skills={skills['language']} />
            </p>

            <h3 className="headline">Framework / Library</h3>
            <p className="description">
              <CardContainer skills={skills['FnL']} />
            </p>

            <h3 className="headline">Others</h3>
            <p className="description">
              <CardContainer skills={skills['others']} />
            </p>
          </section>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://github.com/PepeikeDeteron"
                className="icon fa-github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
