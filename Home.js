import React from 'react';
import { Link } from 'react-router-dom';//header에 다른 페이지 연결할 때 쓸 link
import { IoPerson } from "react-icons/io5";//아이콘 가져옴
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <header className="App-header">
      {/*헤더에 IoPerson 아이콘, 로그인 및 회원가입 링크*/}
        <div className="login-signup">
          <IoPerson size={24} />
          <Link to="/login">로그인</Link> | <Link to="/signup">회원가입</Link>
        </div>
      </header>
      {/*main태그-페이지의 주요 콘텐츠 담고 있음
         페이지의 다른 부분과 구별되며 각 페이지에는 하나만 있어야*/}
      <main className="App-content">
      {/*className="App-content":css클래스 지정*/}
        <section className="hero">
        {/*section:특정 주제를 나타내는 구획
          독립적인 제목 가질 수 있음, 종종 section 여러개가 모여 하나의 main구성
        hero:웹 페이지에서 시각적으로 눈에 띄는 큰 배너나 강조된 섹션을 의미하는 경우 많음*/}
          <div className="hero-text">
          {/*div:특별한 의미 없는 컨테이너 */}
            <h1>팀 프로젝트 관리 서비스</h1>
            <p>쉬운 진행 상황 체크, 목표 상기</p>
            {/*main->section->div->p구조, p:텍스트 단락 나타내고 실제 콘텐츠 담는 요소로 사용 */}
            <button className="cta-button">지금 시작하기</button>
          </div>
        </section>
        <section className="features">
          <h2>주요 기능</h2>
          <div className="feature-list">
            <div className="feature-item">
              <img src="contribute.png" alt="Feature 1" />
              <h3>과제별 기여도 측정</h3>
              <p>전체, 월별, 주별 기여도를 자동으로 제공</p>
            </div>
            <div className="feature-item">
              <img src="" alt="Feature 2" />
              {/*src:이미지 가져올 위치
                 alt:대체 택스트*/}
              <h3>역할, 업무 분담</h3>
              <p>과제별, 인원별 명확한 업무 분담, 정리</p>
              <p>해야하는 활동에 대한 가이드라인 제시</p>
            </div>
            <div className="feature-item">
              <img src="whentomeet.png" alt="Feature 3" />
              <h3>회의 시간 정하기</h3>
              <p>가능한 시간대를 직접 고를 수 있는 편리한 서비스</p>
            </div>
          </div>
        </section>
        <section className="how-it-works">
          <h2>서비스 이용 방법</h2>
          <p>학번으로 팀원을 간편하게 초대해고, 일정과 목표 상기를 통한 편리한 프로젝트 관리</p>
        </section>
        <section className="testimonials">
          <h2>사용자 후기</h2>
          <div className="testimonial-list">
            <div className="testimonial-item">
              <p>"이 서비스 덕분에 프로젝트 관리가 정말 쉬워졌어요!"</p>
              <p>- 사용자 1</p>
            </div>
            <div className="testimonial-item">
              <p>"프로젝트 목표를 달성하는 데 큰 도움이 되었습니다."</p>
              <p>- 사용자 2</p>
            </div>
          </div>
        </section>
        <section className="faq">
          <h2>자주 묻는 질문</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h3>질문 1</h3>
              <p>질문 1에 대한 답변</p>
            </div>
            <div className="faq-item">
              <h3>질문 2</h3>
              <p>질문 2에 대한 답변</p>
            </div>
          </div>
        </section>
        <footer>
          <p>© 2024 CNU </p>
          <div className="footer-links">
            <a href="/about">About Us</a> | <a href="/contact">Contact</a> | <a href="/privacy">Privacy Policy</a>
            {/*a:앵커 태그-주로 하이퍼링크 생성하는데 사용
                 href:링크할 대상의url지정
                 target:링크를 클릭했을 때 새 창이나 탭에서 열릴지 기존 창에서 열리게할지
                 (_blank:새탭이나 창/_self:같은 창이나 탭(기본값)
                  _parent:부모프레임에서 엶/_top:최상위 프레임에서 엶)
                title:링크에 대한 추가 정보 제공*/}
          </div>
        </footer>
      </main>
    </div>
  );
}

export default Home;
