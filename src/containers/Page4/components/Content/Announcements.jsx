import React from 'react'

import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import { isEmpty } from 'lodash'
const Announcements = () => {
  const files = [
    'https://www.youtube.com/watch?v=CHw1b_1LVBA',
    'https://www.youtube.com/watch?v=ZbZSe6N_BXs',
    'https://www.youtube.com/watch?v=NwOvu-j_WjY'
  ]
  const options = {
    merge: true,
    loop: true,
    margin: 10,
    nav: false,
    video: true,
    lazyLoad: true,
    center: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      700: {
        items: 1,
      },
      800: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  }
  return (
    <div className="content-poll">
      <div className="content-poll-info">
        <div className="content-poll-info-img">
          <img src="/assets/images/gpt3/ai.png" alt="" />
          <a>Passbarn Study Union </a>-<span>Life is precious</span>-<p>Poll</p>
        </div>
        <OwlCarousel className="owl-carousel owl-theme" {...options}>
          {files.map((subitem, index) =>
            isEmpty(subitem.match(/\.(jpg|jpeg|png|gif)$/i)) ? (
              <div class="item">
                <div class="item-video" style={{ height: 278 }} data-merge={index}>
                  <a class="owl-video" href={subitem}></a>
                </div>
              </div>
            ) : (
              <img
                alt="alt"
                src={subitem}
                style={{
                  height: 278,
                  objectFit: 'cover',
                }}
              />
            )
          )}
        </OwlCarousel>
      </div>

      <div className="content-poll-comment">
        <div className="content-poll-comment-header">
          <div className="content-poll-comment-img">
            <img src="/assets/images/icons/comments_96px.png" alt="" />
            <span> 3 comments </span>
          </div>
          <div className="content-poll-comment-img">
            <img src="/assets/images/icons/share_96px.png" alt="" />
            <span>Share</span>
          </div>
          <div className="content-poll-comment-img">
            <img src="/assets/images/icons/flagpole_96px.png" alt="" />
            <span> Report </span>
          </div>
        </div>
        <div className="content-poll-comment-message">
          <div className="content-poll-comment-message-img">
            <img src="/assets/images/gpt3/ai.png" alt="" />
            <span>
              <a> Jenna Smith </a>Aliquet bibendum enim facilisis gravida neque. Quis varius quam quisque id diam.
            </span>
          </div>
          <div className="content-poll-comment-message-img-content">
            <div>
              <img src="/assets/images/gpt3/ai.png" alt="" />
              <span>
                <a>Tom Jones</a> <span></span>Erat velit scelerisque in dictum non consectetur.
              </span>
            </div>
            <div>
              <img src="/assets/images/gpt3/ai.png" alt="" />
              <span>
                <a>Melissa Gertrude</a> Porttitor eget dolor morbi non.
              </span>
            </div>
            <div className="content-poll-comment-message-img-content-input">
              <img class="icon-ui" src="/assets/images/gpt3/ai.png" alt="" />
              <input type="text" placeholder="Enter..." />
              <img class="icon-asset" src="/assets/images/icons/telegram_app_96px.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Announcements
