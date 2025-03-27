(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();const c=s=>{localStorage.setItem("user",JSON.stringify(s))},d=()=>JSON.parse(localStorage.getItem("user")),x=()=>{localStorage.removeItem("user")};class i{constructor(e,t={}){this.$target=e,this.props=t,this.render()}template(){return""}setEvent(){}render(){this.$target.innerHTML=this.template(),this.setEvent()}}class u extends i{template(){return`
    <main class="bg-gray-100 flex items-center justify-center min-h-screen">
      <div class="bg-white p-8 rounded-lg shadow-md w-full text-center" style="max-width: 480px">
        <h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
        <p class="text-4xl font-bold text-gray-800 mb-4">404</p>
        <p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
        <p class="text-gray-600 mb-8">
          요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
        </p>
        <a href="/" class="bg-blue-600 text-white px-4 py-2 rounded font-bold">
          홈으로 돌아가기
        </a>
      </div>
    </main>
    `}}const m=()=>`
 <footer class="bg-gray-200 p-4 text-center">
     <p>&copy; 2024 항해플러스. All rights reserved.</p>
  </footer>
`;class p extends i{template(){const e=d(),t=window.location.hash||"#/",r=o=>t===`#${o}`?"text-blue-600 font-bold":"text-gray-600";return`
      <header class="bg-blue-600 text-white p-4 sticky top-0">
            <h1 class="text-2xl font-bold">항해플러스</h1>
    </header>

    <nav class="bg-white shadow-md p-2 sticky top-14">
      <ul class="flex justify-around">
        <li><a href="/" id="home" class="${r("/")}">홈</a></li>
        ${e?`<li>
                  <a href="/profile" id="profile" class="${r("/profile")}">
                    프로필
                  </a>
              </li>`:""}
      <li>
    ${e?'<a href="/login" id="logout" class="text-gray-600">로그아웃</a>':'<a href="/login" id="login" class="text-gray-600">로그인</a>'}
  </li>
      </ul>
    </nav>
    `}}const y=[{id:1,src:"https://placehold.co/40",name:"홍길동",time:"5분 전",detail:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!"},{id:2,src:"https://placehold.co/40",name:"김철수",time:"15분 전",detail:"새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!"},{id:3,src:"https://placehold.co/40",name:"이영희",time:"30분 전",detail:"오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?"},{id:4,src:"https://placehold.co/40",name:"박민수",time:"1시간 전",detail:"주말에 등산 가실 분 계신가요? 함께 가요!"},{id:5,src:"https://placehold.co/40",name:"정수연",time:"2시간 전",detail:"새로 나온 영화 재미있대요. 같이 보러 갈 사람?"}];class f extends i{template(){const{user:e}=this.props;return`
    <div class="bg-gray-100 min-h-screen flex justify-center">
    <div class="max-w-md w-full">
    ${new p({user:e}).template()}
      <main class="p-4">
        <div class="mb-4 bg-white rounded-lg shadow p-4">
          <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
          <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
        </div>

        <div class="space-y-4">
  ${y.map(t=>`
           <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img src="${t.src}" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">${t.name}</p>
                <p class="text-sm text-gray-500">${t.time}</p>
              </div>
            </div>
            <p>${t.detail}</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>
    `).join("")}
      </main>
     ${m()}
    </div>
  </div>
    `}}class h extends i{template(){return`
        <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">항해플러스</h1>
      <form id="login-form">
        <div class="mb-4">
          <input type="text" id="username" name="username" placeholder="사용자 이름" class="w-full p-2 border rounded">
        </div>
        <div class="mb-6">
          <input type="password" name="password"  placeholder="비밀번호" class="w-full p-2 border rounded">
        </div>
        <button type="submit" id="login" class="w-full bg-blue-600 text-white p-2 rounded font-bold">로그인</button>
      </form>
      <div class="mt-4 text-center">
        <a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
      </div>
      <hr class="my-6">
      <div class="text-center">
        <button class="bg-green-500 text-white px-4 py-2 rounded font-bold">새 계정 만들기</button>
      </div>
    </div>
  </main>
    `}setEvent(){const e=this.$target.querySelector("#login-form");e&&e.addEventListener("submit",t=>{t.preventDefault();const r=e.querySelector("#username").value.trim();r.length?(c({username:r,email:"",bio:""}),n.navigateTo("/")):alert("아이디를 입력해주세요.")})}}class b extends i{template(){const{user:e}=this.props;return`
    <div>
  <div class="bg-gray-100 min-h-screen flex justify-center">
    <div class="max-w-md w-full">
    ${new p({user:e}).template()}

      <main class="p-4">
        <div class="bg-white p-8 rounded-lg shadow-md">
          <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
            내 프로필
          </h2>
          <form id="profile-form">
            <div class="mb-4">
              <label
                for="username"
                class="block text-gray-700 text-sm font-bold mb-2"
                >사용자 이름</label
              >
              <input
                type="text"
                id="username"
                name="username"
                value="${e.username}"
                class="w-full p-2 border rounded"
              />
            </div>
            <div class="mb-4">
              <label
                for="email"
                class="block text-gray-700 text-sm font-bold mb-2"
                >이메일</label
              >
              <input
                type="email"
                id="email"
                name="email"
                value="${e.email}"
                class="w-full p-2 border rounded"
              />
            </div>
            <div class="mb-6">
              <label
                for="bio"
                class="block text-gray-700 text-sm font-bold mb-2"
                >자기소개</label
              >
              <textarea
                id="bio"
                name="bio"
                rows="4"
                class="w-full p-2 border rounded"
              >${e.bio}</textarea
              >
            </div>
            <button
              type="submit"
              class="w-full bg-blue-600 text-white p-2 rounded font-bold"
            >
              프로필 업데이트
            </button>
          </form>
        </div>
      </main>

      ${m()}
    </div>
  </div>
</div>
    `}setEvent(){(()=>{const t=document.getElementById("profile-form");t&&t.addEventListener("submit",r=>{r.preventDefault();const o=t.querySelector("#username").value.trim(),l=t.querySelector("#email").value.trim(),a=t.querySelector("#bio").value.trim(),v={...JSON.parse(localStorage.getItem("user")),username:o,email:l,bio:a};c(v),alert("프로필이 수정되었습니다"),g()})})()}}const g=()=>{const s=window.location.pathname,e=document.getElementById("root"),t=d();if(t&&s==="/login"){history.pushState({},"","/"),g();return}s==="/"?document.getElementById("root").innerHTML=f(t):s==="/profile"?t?new b(e,{user:t}):alert("로그인이 필요합니다"):s==="/login"?new h(e):document.getElementById("root").innerHTML=u()};class w{constructor(){this.routes={},window.addEventListener("popstate",this.handlePopState.bind(this))}addRoute(e,t){this.routes[e]=t}navigateTo(e){const r=`${"/front_5th_chapter1-1/".replace(/\/$/,"")}${e}`;history.pushState(null,"",r),this.handleRoute(r)}handlePopState(){this.handleRoute(window.location.pathname)}handleRoute(e){const t="/front_5th_chapter1-1/".replace(/\/$/,""),r=e.replace(t,"")||"/",o=this.routes[r],l=document.getElementById("root"),a=d();if(a&&r==="/login"){this.navigateTo("/");return}if(!a&&r==="/profile"){this.navigateTo("/login");return}o?o(a):l&&new u(l)}}const n=new w,E={init:()=>{n.addRoute("/",s=>{const e=document.getElementById("root");new f(e,{user:s})}),n.addRoute("/login",()=>{const s=document.getElementById("root");new h(s)}),n.addRoute("/profile",s=>{const e=document.getElementById("root");new b(e,{user:s})}),n.handleRoute(window.location.pathname),document.addEventListener("click",s=>{var t;const e=s.target.closest("a");if(e&&e.id==="logout"&&(s.preventDefault(),x(),n.navigateTo("/login")),e&&((t=e.getAttribute("href"))!=null&&t.startsWith("/"))){s.preventDefault();const r=e.getAttribute("href");n.navigateTo(r)}})}};export{E as C,u as E,h as L,f as M,b as P,d as g,x as r};
