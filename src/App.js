import React from 'react';
import './App.css';
import { BsCheck2Circle } from 'react-icons/bs';
import { MdAccessTimeFilled } from 'react-icons/md';
import { AiFillCheckCircle } from 'react-icons/ai';
import { AiFillExclamationCircle } from 'react-icons/ai';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';
import { AiFillEye } from 'react-icons/ai';
import { BiMessageError } from 'react-icons/bi';
import img1 from './img1.png';

function App() {
  return (
    <div className="app">
      {/* <h1>Hello</h1> */}
      <div className="main">
        <div className="body">
          <div className="item1">
            <div className="part1">
              <div> Avnita's Daily Nudge</div>
              <div className="s">Day 5</div>
            </div>
            <div className="part2">
              <div className="p2">
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box1"></div>
              </div>
              <div className="s text">Effort</div>
            </div>
          </div>

          <div className="item2">
            <div className="p3">
              <div>You got a subscriber boost as a result of task!!</div>
              <div>(WhatsApp status)</div>
            </div>
          </div>

          <div className="item3">
            <div className="title">
              <div className="t1">
                <BsCheck2Circle className="i1" />
                <h4 className="text1">Today's Task</h4>
              </div>
              <div className="t2">Conversion</div>
            </div>
            <div className="p4">
              <ul>
                <li className="list1">
                  Must in thumbnails: Subject of the video (baby), large font
                  text, short title reference
                </li>
                <li className="list2">
                  Improves Impression click-through rate
                </li>
              </ul>
            </div>
          </div>

          <div className="item4">
            <div className="title">
              <div className="t1">
                <MdAccessTimeFilled className="i2" />
                <h4 className="text1">Watch Time</h4>
                <AiFillCheckCircle className="i3" />
              </div>
              <div className="t2">Last 7 days</div>
            </div>

            <div className="p5">
              <div className="t2">
                <div className="text2">
                  14.8 <span className="s1">hr</span>
                </div>
                <div>Watch Time</div>
              </div>

              <div className="t3">
                <div>
                  <span className="para">Total</span>{' '}
                  <span className="e">90.6</span> <span className="s1">hr</span>
                </div>
                <div>
                  <span className="para"> Goal</span>{' '}
                  <span className="e">4000</span> <span className="s1">hr</span>
                </div>
              </div>
            </div>
          </div>

          <div className="item5">
            <div className="title">
              <div className="t1">
                <h4>Impressions click-through</h4>
                <AiFillExclamationCircle className="i4" />
              </div>
              <div>Last 7 days</div>
            </div>

            <div>
              <div className="list3">
                Improve clicks by using good thumbnails, title
              </div>
              <div className="list4">
                <div className="para3">
                  Impressions click through rate (CTR)
                  <span className="s2">2.7%</span>
                </div>
                <div className="para3">
                  Click through rate <span className="s3">17%</span>
                  <BsFillArrowDownCircleFill className="i4" />
                </div>
              </div>
            </div>
          </div>

          <div className="item6">
            <div className="title">
              <div className="t1">
                <AiFillEye className="i2" />
                <h4>Views</h4>
                <AiFillExclamationCircle className="i4" />
              </div>
              <div>Last 7 days</div>
            </div>

            <div className="para">
              <div className="list3">
                Impressions went up, but lower CTR meant less views
              </div>

              <div className="list4">
                <div className="para3">
                  Views
                  <span className="l1">1.6k</span>
                </div>
                <div className="para3">
                  Views Compared to last week <span className="l2">55%</span>
                  <BsFillArrowDownCircleFill className="i4" />
                </div>
              </div>
            </div>
          </div>

          <div className="item7">
            <BiMessageError className="i5" />
            <h4>
              If you find the nudge useful, reply with{' '}
              <span className="s4">&#128077;</span>
            </h4>
          </div>

           <div>
            <img src={img1} alt="img" className="logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
