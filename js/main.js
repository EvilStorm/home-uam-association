// 스크롤 시 헤더 그림자
const header = document.getElementById('siteHeader');
addEventListener('scroll', () => {
  header.classList.toggle('scrolled', scrollY > 10);
}, { passive: true });

// 모바일 메뉴
const menuBtn = document.getElementById('menuBtn');
const gnb = document.getElementById('gnb');
menuBtn.addEventListener('click', () => gnb.classList.toggle('open'));
gnb.addEventListener('click', e => {
  if (e.target.tagName === 'A') gnb.classList.remove('open');
});

// 스크롤 리빌
const io = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      en.target.classList.add('on');
      io.unobserve(en.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// 문의 폼 (백엔드 연동 전 임시 처리)
function fakeSubmit(e) {
  e.preventDefault();
  const note = document.getElementById('formNote');
  note.textContent = '문의가 접수되었습니다. 담당자가 확인 후 회신드리겠습니다. (데모)';
  e.target.reset();
  return false;
}
