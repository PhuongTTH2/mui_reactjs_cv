import './Content.css'
import { useEffect, useState } from 'react'
import Announcements from './Announcements'
import ModalCommunication from './ModalCommunication'
import ModalEvent from './ModalEvent'
import ModalPoll from './ModalPoll'
const Content = () => {
  const [activeTab, setActiveTab] = useState('tab1')
  const handleTab = async (tab) => {
    setActiveTab(tab)
  }
  const [modalCommunication, setModalCommunication] = useState(false)
  const [modalEvent, setModalEvent] = useState(false)
  const [modalPoll, setModalPoll] = useState(false)

  const handleCloseModal = () => {
    setModalCommunication(false)
    setModalEvent(false)
    setModalPoll(false)
  }

  const handleModalSave = () => {}

  return (
    <>
      <div className="content">
        <div className="content-header">
          <div>Updates</div>

          <ul>
            <li className={` ${activeTab === 'tab1' ? 'active' : ''}`} onClick={() => handleTab('tab1')}>
              All
            </li>
            <li className={` ${activeTab === 'tab2' ? 'active' : ''}`} onClick={() => handleTab('tab2')}>
              Announcements
            </li>
            <li className={` ${activeTab === 'tab3' ? 'active' : ''}`} onClick={() => handleTab('tab3')}>
              Polls
            </li>
            <li className={` ${activeTab === 'tab4' ? 'active' : ''}`} onClick={() => handleTab('tab4')}>
              Events
            </li>
          </ul>
        </div>
        <div className="create">
          <div className="create-post" onClick={() => setModalCommunication(true)}>
            <div className="create-post-img">
              <img src="/assets/images/news/icon-add.png" alt="" />
            </div>
            <div className="create-post-title">
              <span>Post a/an </span>
              <span>Communication </span>
              <span>(Text, Image, Video or File)</span>
            </div>
          </div>
          <div className="create-post" onClick={() => setModalEvent(true)}>
            <div className="create-post-img">
              <img src="/assets/images/news/icon-add.png" alt="" />
            </div>
            <div className="create-post-title">
              <span>An Events </span>
            </div>
          </div>
          <div className="create-post" onClick={() => setModalPoll(true)}>
            <div className="create-post-img">
              <img src="/assets/images/news/icon-add.png" alt="" />
            </div>
            <div className="create-post-title">
              <span>Polls</span>
            </div>
          </div>
        </div>
        {activeTab === 'tab1' || activeTab === 'tab2' ? <Announcements /> : ''}
        {activeTab === 'tab1' || activeTab === 'tab3' ? (
          <div className="content-poll">
            <div className="content-poll-info">
              <div className="content-poll-info-line" />
              <div className="content-poll-info-img">
                <img src="/assets/images/gpt3/ai.png" alt="" />
                <a>Passbarn Study Union </a>-<span>Life is precious</span>-<p>Poll</p>
              </div>
              <div className="content-poll-info-select">
                <div className="content-poll-info-select-question">
                  <span>Should we change our stance of divinity?</span>
                  <span>9 mins ago</span>
                </div>
                <div className="content-poll-info-select-answer">
                  <div className="content-poll-info-select-answer-radio">
                    <input type="radio" />
                    <div className="content-poll-info-select-answer-radio-progress-bar">
                      <span>Libero enim sed faucibus turpis.</span>
                      <div style={{ width: '83%' }}></div>
                    </div>
                    <span>18 votes</span>
                  </div>
                  <div className="content-poll-info-select-answer-radio">
                    <input type="radio" />
                    <div className="content-poll-info-select-answer-radio-progress-bar">
                      <span>In hac habitasse platea dictumst vestibulum.</span>
                      <div style={{ width: '53%' }}></div>
                    </div>
                    <span>7 votes</span>
                  </div>
                  <div className="content-poll-info-select-answer-radio">
                    <input type="radio" />
                    <div className="content-poll-info-select-answer-radio-progress-bar">
                      <span>Tempus egestas sed sed risus pretium.</span>
                      <div style={{ width: '0%' }}></div>
                    </div>
                    <span>0 votes</span>
                  </div>
                  <div className="content-poll-info-select-answer-radio">
                    <input type="radio" />
                    <div className="content-poll-info-select-answer-radio-progress-bar">
                      <span>In hac habitasse platea dictumst vestibulum.</span>
                      <div style={{ width: '10%' }}></div>
                    </div>
                    <span>1 votes</span>
                  </div>
                </div>
              </div>
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
        ) : (
          ''
        )}
        {activeTab === 'tab1' || activeTab === 'tab4' ? (
          <div className="content-event">
            <div className="content-event-info">
              <div className="content-poll-info-img">
                <img class="icon-ui" src="/assets/images/gpt3/ai.png" alt="" />
                <a>Staprinclock Church </a> - <span>We improve you</span> - <p>Event</p>
              </div>
              <div className="content-event-info-line" />
              <div className="content-poll-info-content">
                <div className="content-poll-info-content-user">
                  <span>
                    <a className="message-blue">Hoshi Union Fall Picnic</a> Come picnic with us under the trees. Enjoy a
                    ribs and chicken bbq.
                  </span>
                  <div>10 mins ago</div>
                </div>
                <div className="margin-top-bottom">
                  Event Date: <span className="message-green">May 19, 2019 Saturday • 2pm</span>
                </div>
                <div className="content-poll-info-content-button">
                  <div>
                    <button className="button-blue">RSPV</button>
                    <button className="marginLeft">Maybe</button>
                    <button className="marginLeft">Can't go</button>
                  </div>
                  <div>
                    <button>Invite</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-event-comment"></div>
          </div>
        ) : (
          ''
        )}

        <ModalCommunication
          modalCommunication={modalCommunication}
          handleCloseModal={handleCloseModal}
          handleModalSave={handleModalSave}
        />
        <ModalEvent modalEvent={modalEvent} handleCloseModal={handleCloseModal} handleModalSave={handleModalSave} />
        <ModalPoll modalPoll={modalPoll} handleCloseModal={handleCloseModal} handleModalSave={handleModalSave} />
      </div>
    </>
  )
}
export default Content
