1. 문서개요

1.1 목적 

이번 형상관리 계획서에서는 소프트웨어공학 프로젝트 산출물에 대해서
식별 및 버전관리 규칙, 변경 관리와 Commit 메시지 작성과 변경로그 및 이력을 
관리함에 있어서 정의하는 것을 목적으로 작성함.

1.2 적용범위

요구사항 명세서
설계서
일정 계획서
테스트 계획서
소스코드

2. 형상 식별 방법

2.1 산출물 식별 규칙 

각 산출물에 대해서 다음과 같은 형식을 따른다.

[문서종류]_[프로젝트명]_[버전]

문서종류에서는 다음과 같은 규칙을 적용한다.

[문서 버전 규칙]
Ver.[주차].[수정횟수]
- 예시: Ver.3.5 → 3주차에 5번째 수정본
- 주차는 수업 진행 주차를 따르나, 변경이 없을 경우 증가하지 않는다.
- 수정횟수는 해당 주차 내에서 문서 수정 때마다 증가.

[소스코드 버전 규칙]
v[Major].[Minor].[Patch]
- Major: 주요 기능 추가/변경 (v1.0.0 → v2.0.0)
- Minor: 부분 기능 추가/개선 (v1.0.0 → v1.1.0)
- Patch: 버그 수정 및 미세 조정 (v1.0.0 → v1.0.1)

[산출물 파일명 규칙]
- [GTW]_[산출물종류]_Ver.[주].[수]
  예시: 
- [GTW]_요구사항명세서_Ver.3.2
- [GTW]_설계서_Ver.5.1
- [GTW]_테스트계획서_Ver.7.0

3. Git 브랜치 및 태그 전략

3.1 브랜치 전략
- main: 최종 제출 버전
- develop: 개발 통합 브랜치
- feature/[기능명]: 기능별 개발
- hotfix/[버그명]: 긴급 수정

3.2 태그 전략
기준선(Baseline)		설명
requirements_v1.0		요구사항 명세서 1차 완료 (3주차)
design_architecture_v1.0	아키텍처 설계 완료 (5주차)
design_detail_v1.0		상세 설계 완료 (6주차)
implementation_beta	핵심 기능 구현 완료 
testing_complete		테스트 및 버그 수정 완료 
final_release_v1.0		최종 제출 버전 

Git 명령 예: 
git tag requirements_v1.0
git tag design_architecture_v1.0 -m "신호인식/햅틱/긴급신고 아키텍처 설계 완료"
git push origin --tags

4. 변경 관리 및 Commit 메시지 작성 기준
4.1 Commit 메시지 규칙
[타입] - [수정/개선/추가사항]

타입 
feat - 새 기능 추가시
fix - 버그 수정 
docs - 문서 수정
style - 코드 스타일 수정
refactor - 코드 리팩토링
test - 테스트 코드 추가
chore - 빌드 / 패키지 매니저 부분 코드 수정

예시)
feat - GPS 기능을 인식하여 햅틱(진동) 기능과 연동

4.1 변경 관리 절차
1. 기능 개발 또는 수정은 feature 브랜치에서 수행
2. 개발 완료 후 develop 브랜치로 병합
3. 테스트 완료 후 main 브랜치로 반영

5. CHANGELOG 및 이력 관리 방법

5.1 CHANGELOG.md 작성
- Added (추가), Changed (변경), Fixed (수정), Removed (제거) 
  항목으로 구분
- 버전별, 날짜별로 기록

5.2 이력 관리 도구
- Git: git log, git blame, git diff
- GitHub: Issues, Pull Requests, Releases
