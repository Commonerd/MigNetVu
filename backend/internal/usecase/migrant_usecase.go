Go Backend API Structure

1. 요구사항 정의 기능별 요구사항 회원가입: 사용자 정보(이메일, 비밀번호, 닉네임 등) 등록 비밀번호 암호화 저장 이메일 유효성 검사 및 중복 확인 이메일 인증(Optional) 로그인: 이메일 및 비밀번호 인증 JWT를 통한 인증 토큰 발급 세션 만료 관리 및 재발급(리프레시 토큰) 네트워크 조회: 사용자의 네트워크 목록 조회 (페이징 및 필터링 지원) 네트워크의 상세 정보 조회 네트워크 등록: 새로운 네트워크 생성 중복 네트워크 이름 및 ID 체크 사용자와의 관계(소유권 등) 설정 네트워크 수정: 네트워크 정보 업데이트 (네트워크 이름, 설명 등) 수정 권한 체크 네트워크 삭제: 네트워크 삭제 (Soft Delete 또는 Hard Delete) 삭제 권한 체크 보충 요구사항 로그 및 감사 기록: 각 주요 API 호출에 대한 로그 저장 (로그인, 네트워크 생성/수정/삭제 등) 사용자의 활동 내역 감사 기록 에러 관리: 공통 에러 핸들링 모듈 사용자와 관리자용 에러 로그 구분 테스트: 단위 테스트, 통합 테스트, e2e 테스트 클린 아키텍처를 고려한 테스트 모듈 분리 보안: 비밀번호 암호화(예: bcrypt) 토큰 기반 인증 및 권한 검증 API rate-limiting 및 IP 차단(Optional) API 문서화: Swagger 또는 Postman을 사용해 API 문서화 각 엔드포인트의 예제 요청 및 응답 정의 2. 기술 스택 필수 스택 언어: Go API 프레임워크: Gin 또는 Echo (경량 프레임워크로 성능이 좋고 RESTful API 작성에 유리) 데이터베이스: SQL DB: PostgreSQL(MySQL 또는 SQLite도 가능하지만, PostgreSQL은 Go와 궁합이 좋고 클린 아키텍처 구현에 적합) NoSQL DB (Optional): MongoDB (사용자 활동 로그 및 캐시 저장소 등으로 활용 가능) 인증: JWT (JSON Web Token) 기반 인증 및 리프레시 토큰 관리 캐싱: Redis (인증 토큰 저장, API 응답 캐싱 등) API 문서화: Swagger 로그 관리: logrus 또는 zap (구조화된 로그 관리) 추가 스택 의존성 관리: Go Modules CI/CD: GitHub Actions 테스트: 단위 테스트: testing 패키지 통합 테스트: Testcontainers (mongoDB, Redis 등 모킹) 배포: 컨테이너화: Docker 클라우드 배포 (Optional): AWS, GCP, Azure 등 환경 변수 관리: Viper 또는 Dotenv (개발, 테스트, 프로덕션 환경 설정 분리) 3. 클린 아키텍처 설계 Go의 모듈화를 고려해 클린 아키텍처를 설계할 때 기본적으로 다음 레이어로 구성할 수 있습니다:
Entities: 핵심 비즈니스 로직과 규칙 정의
Use Cases: 인터페이스를 통해 특정 기능을 호출하고 데이터 흐름을 제어
Controllers: API 엔드포인트를 통한 외부 호출 수신
Repository: 데이터베이스 및 외부 리소스와의 상호작용 담당 (ORM 사용 가능)
Infrastructure: 특정 외부 서비스나 라이브러리 연결 (로그, 인증, 이메일 전송 등)
Dependency Injection: 모듈별 의존성을 주입하여, 테스트 및 유지보수 용이

3. 현재 프론트에서 쓰고 있는 목데이터형식 참고
*** 이주자 ***
"id": 56,
"name": "Fatima Al-Najjar",
"nationality": "Egyptian",
"ethnicity": "Korean",
"latitude": 30.0444,
"longitude": 31.2357,
"migrationYear": 2010,
"age": 34,
"occupation": "Journalist",
"education": "Bachelor's in Journalism",
"languagesSpoken": ["Korean", "Arabic", "English"],
"connections": [
{ "targetId": 40, "targetType": "migrant", "strength": 5, "type": "media" },
{ "targetId": 43, "targetType": "migrant", "strength": 4, "type": "friend" },
{ "targetId": 39, "targetType": "migrant", "strength": 3, "type": "collaborator" },
{ "targetId": 41, "targetType": "migrant", "strength": 2, "type": "network" },
{ "targetId": 44, "targetType": "migrant", "strength": 2, "type": "mentor" }
],
"registrantId": 10
},

*** 단체 ***
{
"id": 43,
"name": "Korean American Coalition",
"latitude": 34.0522,
"longitude": -118.2437,
"foundationYear": 1999,
"type": "Advocacy",
"mission": "Advocate for Korean Americans' rights",
"services": ["Advocacy", "Education"],
"contactInfo": "info@kac.org",
"registeredId": 8,
"connections": [
{ "targetId": 18, "targetType": "organization", "strength": 5, "type": "advocacy" },
{
"targetId": 15,
"targetType": "organization",
"strength": 4,
"type": "education"
}
]
},

I'll help design a Go backend API following clean architecture principles for your migrant network platform. Let's break this down into manageable pieces.

Go Backend API Structure

npm install
main.go
internal/models/migrant.go
internal/models/organization.go
internal/models/connection.go
internal/models/user.go
go.mod
.env
I've created a basic structure for your Go backend API following clean architecture principles. Here's what's included:

Main Application Structure:

Clean separation of concerns with models, handlers, and middleware
JWT-based authentication
CORS middleware
Environment variable configuration
Models:

Migrant: Represents individual migrants with their details
Organization: Represents organizations and their information
Connection: Manages relationships between migrants and organizations
User: Handles authentication and user management
Database:

Using PostgreSQL with GORM as ORM
Soft delete support for all models
Proper indexing and relationships
API Endpoints:

Authentication: /api/v1/auth/*
Migrants: /api/v1/migrants/*
Organizations: /api/v1/organizations/*
Connections: /api/v1/connections/*
To complete the implementation, you'll need to:

Create the handlers for each endpoint
Implement the authentication middleware
Add validation logic
Set up proper error handling
Add logging
Implement the database initialization
Add tests
Would you like me to implement any specific part in detail?


Rollback to Checkpoint
회원가입, 로그인, 네트워크 조회, 네트워크 등록, 네트워크 수정, 네트워크 삭제까지 API도 추가해줘야지

I'll add the necessary handlers and services for authentication and network operations. Let's organize this in a clean, modular way.

Add Authentication and Network Handlers

internal/handlers/auth.go
internal/handlers/migrant.go
internal/services/auth.go
internal/middleware/auth.go
internal/database/db.go
I've added the core functionality for authentication and migrant management. Here's what's included:

Authentication:

Register: Create new user accounts
Login: Authenticate users and generate JWT tokens
Refresh Token: Generate new tokens for authenticated users
Middleware: Protect routes with JWT authentication
Migrant Management:

CRUD operations for migrants
Pagination support
Authorization checks for modifications
Database:

PostgreSQL initialization
Auto-migration for all models
Connection management
Security Features:

Password hashing with bcrypt
JWT token generation and validation
Role-based access control
Input validation
Would you like me to add the handlers for organizations and connections as well? Or would you like to see any specific part of the implementation in more detail?


Rollback to Checkpoint
1. 프로젝트 파일을 전체적으로 클린아키텍처로 재구성할 것 2. 처음 기동시 어느정도 준비된 데이터를 디비에 넣을 수 있도록 스크립트를 마련할 것.
I'll help reorganize the project following clean architecture principles and add data seeding functionality. Let's break this down into clear, modular components.

Restructure project with clean architecture and add seeding

internal/domain/entity/migrant.go
internal/domain/repository/migrant_repository.go
internal/infrastructure/persistence/postgres/migrant_repository.go
internal/usecase/migrant_usecase.go
internal/infrastructure/seed/seed.go
cmd/api/main.go
internal/interface/http/server.go
internal/interface/http/handler/migrant_handler.go
I've restructured the project following clean architecture principles and added seeding functionality. Here's what's been done:

Clean Architecture Layers:

Domain Layer: Contains entities and repository interfaces
Use Case Layer: Business logic implementation
Interface Layer: HTTP handlers and routing
Infrastructure Layer: Database implementation and seeding
Key Features:

Dependency injection for better testability
Clear separation of concerns
Repository pattern for data access
Modular and maintainable code structure
Data Seeding:

Added seeding functionality for development environment
Sample data for users, migrants, organizations, and connections
Automatically runs during development startup
Project Structure:


.
├── cmd/
│   └── api/
│       └── main.go
├── internal/
│   ├── domain/
│   │   ├── entity/
│   │   └── repository/
│   ├── infrastructure/
│   │   ├── persistence/
│   │   └── seed/
│   ├── interface/
│   │   └── http/
│   └── usecase/
└── pkg/
Would you like me to add similar clean architecture implementations for the Organization and Connection entities as well?


Rollback to Checkpoint
프론트엔드로 부터 들어오는 URI를 환경설정에 정의해서 프로젝트 전체적으로 적용할 수 있나? 그 부분만 따로 수정해줄래

프론트엔드 URI를 환경 설정으로 관리하고 전역적으로 사용할 수 있도록 수정하겠습니다.

Add frontend URI configuration

.env
internal/config/config.go
internal/interface/http/server.go
internal/handlers/auth.go

Report Issue

Undo

10K daily tokens remaining.Subscribe to Pro for 66x more usage




package usecase

import (
	"errors"
	"migrant-network-api/internal/domain/entity"
	"migrant-network-api/internal/domain/repository"
)

type MigrantUseCase interface {
	GetMigrants(page, limit int) ([]entity.Migrant, int64, error)
	GetMigrant(id uint) (*entity.Migrant, error)
	CreateMigrant(migrant *entity.Migrant) error
	UpdateMigrant(migrant *entity.Migrant, userID uint) error
	DeleteMigrant(id, userID uint) error
}

type migrantUseCase struct {
	migrantRepo repository.MigrantRepository
}

func NewMigrantUseCase(repo repository.MigrantRepository) MigrantUseCase {
	return &migrantUseCase{
		migrantRepo: repo,
	}
}

func (uc *migrantUseCase) GetMigrants(page, limit int) ([]entity.Migrant, int64, error) {
	return uc.migrantRepo.FindAll(page, limit)
}

func (uc *migrantUseCase) GetMigrant(id uint) (*entity.Migrant, error) {
	return uc.migrantRepo.FindByID(id)
}

func (uc *migrantUseCase) CreateMigrant(migrant *entity.Migrant) error {
	return uc.migrantRepo.Create(migrant)
}

func (uc *migrantUseCase) UpdateMigrant(migrant *entity.Migrant, userID uint) error {
	existing, err := uc.migrantRepo.FindByID(migrant.ID)
	if err != nil {
		return err
	}

	if existing.RegistrantID != userID {
		return errors.New("unauthorized to modify this migrant")
	}

	return uc.migrantRepo.Update(migrant)
}

func (uc *migrantUseCase) DeleteMigrant(id, userID uint) error {
	existing, err := uc.migrantRepo.FindByID(id)
	if err != nil {
		return err
	}

	if existing.RegistrantID != userID {
		return errors.New("unauthorized to delete this migrant")
	}

