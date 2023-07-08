import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [num_set, ChageSet] = useState(0);

  const SUM = (BN, AN) => {
    if (BN + AN >= 0) {
      BN = BN + AN;
      ChageSet(BN);
      console.log(BN);
    }
  }
  let [POP,chagePOP] = useState(0);

  const ChangePic = (여부) => {
    chagePOP()
    if (여부 != 0) {
      
      POP = 1;
    } else {
      POP = 0;
    }
}

  return (
    <div className="App">
      <div className="Title">
        <h2>엽서 교환 계산</h2>
      </div>

      <div className='set'>
        <h3 id='set_title'>교환할 세트 수</h3>
        <input type='button' id='set' value={num_set}></input>
        {/* 위에꺼 온클릭시 숫자 키패드 등장 */}
        <div className='buttons'>
          <button id='up' onClick={() => SUM(num_set, 1)}></button>
          <button id='down' onClick={() => SUM(num_set, -1)}></button>
        </div>
      </div>

      <div className='SELECT_MAIL'>
        <div className='MailtoSend'>
          <h4 id='send_title'>보낼 엽서 선택</h4>
          <div className='MAILS'>
            <input type="button" name="보낼 일반 엽서" id="NO_send" class="img-NO"></input>
            <input type="button" name="보낼 고급 엽서" id="AD_send" class="img-AD"></input>
            <input type="button" name="보낼 주사위 엽서" id="DI_send" class="img-DI"></input>
            <input type="button" name="보낼 깜짝 엽서" id="SU_send" class="img-SU"></input>
          </div>
          <div className='summary_box'>
            <text>대충 엽서 개수 요약 부분</text>
          </div>
        </div>

        <div className='MailtoGet'>
          <h4>받을 엽서 선택</h4>
          <div className='MAILS'>
            <input type="button" name="받을 일반 엽서" id="NO_get" class="img-NO"></input>
            <input type="button" name="받을 고급 엽서" id="AD_get" class="img-AD"></input>
            <input type="button" name="받을 주사위 엽서" id="DI_get" class="img-DI"></input>
            <input type="button" name="받을 깜짝 엽서" id="SU_get" class="img-SU"></input>
            {/* <input type="button" name="받을 () 엽서 " id="()_get"></input> */}
          </div>
          <div className='summary_box'>
            <text>대충 엽서 개수 요약 부분</text>
          </div>
        </div>
      </div>

      <div className="guildbuf">
        <div className='grade'>
          <label for="guildGrade">길드 등급</label>
          <select id="guildGrade">
            <option value="1">우드</option>
            <option value="2">브론즈</option>
            <option value="3">실버</option>
            <option value="4">골드</option>
            <option value="5">플레티넘</option>
            <option value="6">마스터</option>
          </select>
        </div>
        <div className='level'>
          <label for="buildingLevel">동상 레벨</label>
          <select id="buildingLevel">
            <option value="0">없음</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </div>
        <div className='pop'>
          <label for="popularity">유명세 여부</label>
          <input type="button" name="유명세" id="popularity" class="img-POP_X" onClick={()=>ChangePic(POP)}></input>
        </div>
        <div className='rate'>
          <label for="currentRate">암시장 환율</label>
          <input type="number" id="currentRate"></input>
        </div>
      </div>
      <Tab></Tab>
    </div>
  );
}

// 맨 아래 탭 기능을 구현하는 부분
export const Tab = () => {
  // Tab Menu 중 현재 어떤 Tab이 선택되어 있는지 확인하기 위한 currentTab 상태와 currentTab을 갱신하는 함수가 존재해야 하고, 초기값은 0.
  const [currentTab, clickTab] = useState(0);

  const menuArr = [
    { name: '기본', content: 'Tab menu ONE' },
    { name: '루블 ➡ 루나', content: 'Tab menu TWO' },
    { name: '루나 ➡ 루블', content: 'Tab menu THREE' },
  ];

  const [tabOrder, setStyle] = useState(0);

  const selectMenuHandler = (index) => {
    // parameter로 현재 선택한 인덱스 값을 전달해야 하며, 이벤트 객체(event)는 쓰지 않는다
    // 해당 함수가 실행되면 현재 선택된 Tab Menu 가 갱신.
    clickTab(index);
  };

  return (
    <>
      <div className='result_box'>
        <div className='TabMenu'>
          {menuArr.map((el, index) => (
            <li className={index === currentTab ? "submenu focused" : "submenu"}
              onClick={() => selectMenuHandler(index)}>{el.name}</li>
          ))}
        </div>

        <div className={currentTab === 0 ? "Desc" : "desc"}>
          <p>{menuArr[currentTab].content}</p>
        </div>
      </div>
    </>
  );
};

export default App;
