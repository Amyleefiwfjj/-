import React, { useState } from 'react';
import './SignUp.css';

function SignUp() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    name: '',
    email: '',
    phone: '',
    studentnumber: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    //폼 필드의 값이 변경될 때 호출되는 이벤트 핸들러 함수 정의
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };//name과 value 추출하여 폼 필드 값 업데이트

  const validateStep = () => {
    const newErrors = {};
    if (step === 1) {
      if (!formData.terms) newErrors.terms = "서비스 약관에 동의해야 합니다.";
      if (!formData.privacy) newErrors.privacy = "개인 정보 수집 및 이용에 동의해야 합니다.";
    } else if (step === 2) {
      if (!formData.username) newErrors.username = "아이디를 입력해주세요.";
      if (!formData.password) newErrors.password = "비밀번호를 입력해주세요.";
      if (!formData.confirmPassword) newErrors.confirmPassword = "비밀번호 확인을 입력해주세요.";
      if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "비밀번호가 다릅니다.";
      if (!formData.name) newErrors.name = "이름을 입력해주세요.";
      if (!formData.email) newErrors.email = "이메일을 입력해주세요.";
      if (!formData.phone) newErrors.phone = "전화번호를 입력해주세요.";
      if (!formData.studentnumber) newErrors.studentnumber = "학번을 입력해주세요.";
    }
    //단계 따라 폼 데이터 검증하는 함수
    //에러 있으면 newErrors객체에 추가 - 없을시 True반환 
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) setStep(step + 1);
  };//현재 단계의 검증을 통과할 시 다음 단계로 이동

  const prevStep = () => setStep(step - 1);
  //이전 단계로 이동

  const handleSubmit = (e) => {
    e.preventDefault();//기본 폼 제출 동작 방지
    if (validateStep()) {//최종 검증 수행 시
      // back
      console.log(formData);//폼 데이터를 콘솔에 출력
    }
  };//폼이 제출될 때 호출됨

  return (
    <div className="SignUp">
      <header className="signup-header">
      </header>
      <h2>회원가입</h2>
      <div className="signup-progress">
        <div className={`progress-step ${step >= 1 ? 'active' : ''}`}>1</div>
        <div className={`progress-step ${step >= 2 ? 'active' : ''}`}>2</div>
        <div className={`progress-step ${step >= 3 ? 'active' : ''}`}>3</div>
      </div>{/*회원가입 상태를 시각적으로 표시하는 진행 막대*/}
      <div className="signup-content">
        <form className="signup-form" onSubmit={handleSubmit}>
          {/*폼 제출시 hanldesubmit함수 호출*/}
          {step === 1 && (
            <div className="step">
              <h3>약관 동의</h3>
              <div className="form-group">
                <label>서비스 약관 동의</label>
                <textarea readOnly value="약관 내용" />
                <input type="checkbox" name="terms" onChange={handleChange} /> 동의합니다.
                {/*input type=checkbox:체크박스 제공
                   name=terms:체크박스 이름 설정-폼 제출 시 데이터 구분하는데 사용
                   onChange:체크박스 상태가 변경될 때 호출되는 이벤트 핸들러 설정
                   handleChange:상태 업데이트에 사용*/}
                {errors.terms && <p className="error">{errors.terms}</p>}
                {/*동의하지 않으면 에러 메세지 표시
                  className=error:css클래스를 통해 스타일 적용
                  errors.terms: errors객체에서 오류 메세지 표시*/}
              </div>
              <div className="form-group">
                <label>개인 정보 수집 및 이용 동의</label>
                <textarea readOnly value="개인 정보 수집 및 이용 동의 내용" />
                {/*readOnly:사용자가 텍스트영역을 편집하지 못하게
                  value:표시될 내용*/}
                <input type="checkbox" name="privacy" onChange={handleChange} /> 동의합니다.
                {errors.privacy && <p className="error">{errors.privacy}</p>}
              </div>
              <button type="button" onClick={nextStep}>다음</button>
              {/*다음 버튼 클릭하면 nextStep함수 호출*/}
            </div>
          )}
          {step === 2 && (
            <div className="step">
              <h3>정보 입력</h3>
              <div className="form-group">
                <label htmlFor="username">아이디</label>
                <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
                {errors.username && <p className="error">{errors.username}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="password">비밀번호</label>
                <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                {errors.password && <p className="error">{errors.password}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="confirm-password">비밀번호 확인</label>
                <input type="password" id="confirm-password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
                {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="name">이름</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                {errors.name && <p className="error">{errors.name}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="email">이메일</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                {errors.email && <p className="error">{errors.email}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="phone">전화번호</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                {errors.phone && <p className="error">{errors.phone}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="studentnumber">학번</label>
                <input type="text" id="studentnumber" name="studentnumber" value={formData.studentnumber} onChange={handleChange} required />
                {errors.studentnumber && <p className="error">{errors.studentnumber}</p>}
              </div>
              <button type="button" onClick={prevStep}>이전</button>
              <button type="button" onClick={nextStep}>다음</button>
            </div>
          )}
          {step === 3 && (
            <div className="step">
              <h3>가입 완료</h3>
              <p>가입이 완료되었습니다. 아래 버튼을 클릭하여 로그인하세요.</p>
              <button type="submit">회원가입 완료</button>
            </div>
          )}
        </form>
      </div>
      <footer>
        <p>© 2024 CNU </p>
        <div className="footer-links">
          <a href="/about">About Us</a> | <a href="/contact">Contact</a> | <a href="/privacy">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
}

export default SignUp;
