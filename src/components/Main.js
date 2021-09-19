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
              およそ 2 年前から独学で勉強を続けています。<br />
              <div className="space"/>
              高専のグループワーク型授業では、UI のデザインやアーキテクチャの
              設計・実装に携わり、学んだ React の知識を活かしてグループに貢献しました。<br />
              <div className="space"/>
              最近は、過去に作った Web アプリケーションを TypeScript で書き直したり、
              Storybook を使ったデザイン管理やスナップショットテストを取り入れるなど、
              フロントエンドエンジニアを目指して日々研鑽に励んでいます。
            </p>
          </section>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
       }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <section>
            <h3 className="headline">卒業研究</h3>
            <p className="description">
              現在私が取り組んでいる卒業研究は、既存の校内地図データに代わり 3D のデータを実装することで、設備の場所 及び内装まで把握が可能になる、
              施設案内に最適化された Web ベースの新しい校内地図サービス「一関高専Map」の開発です。
            </p>

            <h3 className="headline">一関高専Map とは</h3>
            <p className="description">
              既存の校内地図データでは、外部から高専行事に来た人達が校内で迷ってしまうという事態が発生していたため、直感的でわかりやすい新たな校内地図サービスを作る必要があるという理念のもと立ち上げられた、
              昨年度のグループワーク型授業で取り組んだプロジェクトのことを指します。<br />

              <div className="space"/>
              授業で開発した実際のシステムの動作は、以下の動画をご覧ください。

              <div className="space"/>
              <video
                src="https://firebasestorage.googleapis.com/v0/b/photourl-204a2.appspot.com/o/Video%2Fkosen-map.mp4?alt=media&token=90afd3c3-83b3-4790-86da-593cf2621c7a"
                controls
                controlsList="nodownload"
                onContextMenu="return false;"
                className="video"
              ></video>

              <div className="space"/>
              React を用いて構築したトップページに、高専内の全貌を表示する 2D 地図と、一部の建物を立体的に表示する 3D地図を実装しました。<br />

              <div className="space"/>
              2D 地図は、図板作成 Web サービス draw.io を用いて作成した自作画像の上に、地図ライブラリ Leaflet を用いて、
              特定の座標に詳細情報付きのピンを立ててマウスホバーで表示するシステムを実装しました。<br />

              <div className="space"/>
              3D 地図は、一関高専サンドボックス部が作成した Minecraft での高専ワールドデータを元に、 Mineways を用いて建物のデータを抽出し、3D モデリングソフト Blender で OBJ 形式のデータに
              変換 & 改装毎に切り分け、WebGL を扱うためのライブラリ Three.js で読み込みと表示をしています。<br />

              <div className="space"/>
              また、トップページ上には実装されていないものの、分割された 3D モデルの特定の場所をボタンで光らせる機能も完成しているため、階層だけでなく部屋ごとにデータを分割することで、検索機能の利便性が
              増すだけでなく、立体地図ならではの視認性の良さも相極まり、使いやすい校内地図サービスが実現されることでしょう。<br />
            </p>

            <p className="description">
            <h3 className="headline">今後の目標</h3>
              このプロジェクトは授業内だけで完遂されたわけではなく、当初実装する予定だった機能が欠けていたり、3D データの読み込みが遅かったりと、お世辞にも利便性の高いものになったとは言えないため、
              私個人でこのプロジェクトを引き継ぎ、この作品の完成及び実用化を目指そうとしています。<br />
              また、グループワーク型授業の成果発表会後日、学生会関係者からこの地図を実際に運用してほしいとの旨の伝達もあったため、実用性のあるシステムとして完成させた成果物を高専に提供することで、
              一学生として学校への貢献を果たしたいと考えています。<br />
            </p>
          </section>
          {close}
        </article>

        <article
          id="skills"
          className={`${this.props.article === 'skills' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Skills</h2>
          <section className="contents">
            <h3 className="headline">Language</h3>
            <div className="card_container">
              <CardContainer skills={skills['language']} />
            </div>

            <h3 className="headline">Framework / Library</h3>
            <div className="card_container">
              <CardContainer skills={skills['FnL']} />
            </div>

            <h3 className="headline">Others</h3>
            <div className="card_container">
              <CardContainer skills={skills['others']} />
            </div>
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
