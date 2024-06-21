<img src="https://capsule-render.vercel.app/api?type=waving&color=auto&height=200&section=header&text=Mountain&fontSize=70" />

# <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" /> 산 정보 웹사이트 🗻

><b>사이트 이동</b> : <a href="https://eogks0218.github.io/DH_Mountain/">🌄 DH's Mountain</a>
><br />
><br />
><b>사용(하려 했던) API</b> <br />
>>산림청_산 정보(공공데이터포털) <br />
>>카카오맵 <br />
>>openweathermap

## 📌목차

▪ [📂 프로젝트 구성](#프로젝트-구성)  
▪ [📺 페이지 설명](#페이지-설명)  
▪ [✔ 샘플데이터 사용 이유](#샘플데이터-사용-이유)  
▪ [😔 아쉬운점](#아쉬운점)  




## 📂프로젝트 구성

<img src="https://github.com/eogks0218/DH-Portfolio/assets/160206306/2cdf748e-1d5e-49d3-b45b-d63aa7ec79e8" />

<div align="right">
  
[목차로](#목차)

</div>

##  📺페이지 설명

### `Main`

<img src="https://github.com/eogks0218/DH-Portfolio/assets/160206306/4beb9821-3323-4da5-ae30-596ca702f598" width="350px" height="300px"/>
<img src="https://github.com/eogks0218/DH_Mountain/assets/160206306/d2fd53d4-80c6-4c6a-820d-3d894162021d" width="350px" height="300px"/>
<br />

<ul>
  <li>메인페이지</li>
  <li>각 메뉴로 이동 기능</li>
</ul>


### `MountainSearch`

<img src="https://github.com/eogks0218/DH_Mountain/assets/160206306/9f7a9844-6c06-44b3-b031-0fa3e3bebb3e" width="250px" height="200px" />
<img src="https://github.com/eogks0218/DH_Mountain/assets/160206306/7dbf8a37-a432-4b42-996b-adc9e541d8f7" width="250px" height="200px" />
<img src="https://github.com/eogks0218/DH_Mountain/assets/160206306/5900cf09-27a2-4a8c-b44a-5fcd432069c6" width="250px" height="200px" />
<br />

<ul>
  <li>산 검색 페이지</li>
  <li>input창에 값 입력시 Search 버튼 출력</li>
  <li>Search 버튼 클릭 시 해당 검색 값에 맞는 MountainList로 이동</li>
</ul>


### `MountainList`

<img src="https://github.com/eogks0218/DH_Mountain/assets/160206306/91526acc-281e-4b1b-b3b0-4a6b43eb33a5" width="250px" height="200px"/>
<img src="https://github.com/eogks0218/DH_Mountain/assets/160206306/6015f1b4-1835-4502-bce3-fcde94787615" width="250px" height="200px"/>
<img src="https://github.com/eogks0218/DH_Mountain/assets/160206306/c8957588-16b8-4d01-a84e-74648bd5f97c" width="250px" height="200px"/>

<br />

<ul>
  <li>산 목록 페이지</li>
  <li>페이지 이동 구현</li>
  <li>Read More 클릭 시 해당하는 산 정보 페이지로 이동</li>
  <li>일정 이상 스크롤 다운 시 Footer 출현</li>
</ul>


### `MountainInfo`

<img src="https://github.com/eogks0218/DH_Mountain/assets/160206306/e8c7d541-b9cc-4daa-b792-fa4c0ebf6290" width="200px" height="180px"/>
<img src="https://github.com/eogks0218/DH_Mountain/assets/160206306/a7a48f72-6526-48b6-b3ff-44d114a56fb2" width="200px" height="180px"/>
<img src="https://github.com/eogks0218/DH_Mountain/assets/160206306/8919268b-9016-4c3d-b450-d234f573d91f" width="200px" height="180px"/>
<img src="https://github.com/eogks0218/DH_Mountain/assets/160206306/c28842e2-10b6-4253-ac43-c93784d1ba1e" width="200px" height="180px"/>

<br />

<ul>
  <li>산 정보 페이지</li>
  <li>날씨 확인 및 날짜 선택 기능</li>
  <li>But,,, API키 배포 이슈로 샘플로 대체...</li>
</ul>


### `FamousMountain`

<img src="https://github.com/eogks0218/DH_Mountain/assets/160206306/a75b80c1-1903-4e7c-9706-883776a2e7f3" width="250px" height="200px" />
<img src="https://github.com/eogks0218/DH_Mountain/assets/160206306/c5e025f2-e754-476e-b7e7-b349a53b8891" width="250px" height="200px" />
<br />

<ul>
  <li>대한민국 100대 명산 페이지</li>
  <li>탭 이용 오름차순으로 확인</li>
  <li>🔎 아이콘 클릭 시 해당 산 정보 페이지로 이동</li>
</ul>


### `SelectDate`

<img src="https://github.com/eogks0218/DH_Mountain/assets/160206306/2ddc431e-ad97-4ffd-9de0-f04b1c4fb022" width="350px" />
<br />

<ul>
  <li>날짜 선택 모달</li>
  <li>날짜 선택 후 확인 버튼 클릭 시 날짜 변경</li>
</ul>


### `Header & Loading`

<img src="https://github.com/eogks0218/DH_Mountain/assets/160206306/c2dd9f70-16dc-44f4-9e31-89417f1d43c2" width="250px" height="200px" />
<img src="https://github.com/eogks0218/DH_Mountain/assets/160206306/976c4a8e-828e-46c4-aebd-09bc81eb1f7f" width="250px" height="200px" />
<br />

<ul>
  <li>헤더 및 로딩</li>
  <li>각 메뉴로 이동 가능</li>
  <li>API 정보 불러올 때 로딩페이지 출력</li>
  <li>But,,, API키 배포 이슈로 사용되지 않은 로딩...</li>
</ul>

<div align="right">
  
[목차로](#목차)

</div>



## ✔샘플데이터 사용 이유
  
### `github action을 아직 자유롭게 사용 불가...`

<ol>
  <li>괜히 문제될까 싶어서 일단 보류...</li>
  <li>github secret 잘 활용해보기 ⭕</li>
  <li>찾아보고 사용할 수 있으면 수정하기 ❗</li>
</ol>


<div align="right">
  
[목차로](#목차)

</div>


## 😔아쉬운점

### `API 배포...`

<ul>
  <li>github 배포여도 할 수 있는 것 같은데...</li>
  <li>좀 더 알아보자 ⭕</li>
</ul>


### `부족한 컨텐츠`

<ul>
  <li>좀 더 많은 메뉴 생성해보기 ⭕</li>
</ul>


<div align="right">
  
[목차로](#목차)

</div>



<img src="https://capsule-render.vercel.app/api?type=waving&color=auto&height=200&section=footer" />
