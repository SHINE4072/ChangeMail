import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {
  let [num_set, ChageSet] = useState(0);

  const SUM = (BN, AN) => {
    if (BN + AN >= 0) {
      ChageSet(BN + AN);
      BN = BN + AN;
      console.log(BN);
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
        </div>
      </div>

      <div className="guildbuf">
        <label for="guildGrade">길드 등급</label>
        <select id="guildGrade">
          <option value="1">우드</option>
          <option value="2">브론즈</option>
          <option value="3">실버</option>
          <option value="4">골드</option>
          <option value="5">플레티넘</option>
          <option value="6">마스터</option>
        </select>

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

        <label for="popularity">유명세 여부</label>
        <input type="button" name="유명세" id="popularity" class="img-POP" onclick="ChangePic()"></input>


        <label for="currentRate">현재 암시장 환율</label>
        <input type="number" id="currentRate"></input>
      </div>

    </div>
  );
}

export default App;
