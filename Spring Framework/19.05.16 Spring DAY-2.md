# 📖 Spring Basic

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->
<!-- code_chunk_output -->

* [📖 Spring Basic](#spring-basic)
	* [📢 DispatcherServlet](#dispatcherservlet)
		* [💨 DispatcherServlet  동작 방식](#dispatcherservlet-동작-방식)
	* [🔖 주요 Annotation](#주요-annotation)
		* [@ResponseBody](#responsebody)
		* [@RequestMapping](#requestmapping)
		* [@RequestParam](#requestparam)
		* [@Autowired](#autowired)
		* [@PathVariable](#pathvariable)
		* [@ModelAndView](#modelandview)
	* [🎧Listener](#listener)
	* [🏛️ Layered Architecture](#️-layered-architecture)
	* [📌 Service](#service)

<!-- /code_chunk_output -->


## 📢 DispatcherServlet
> 브라우저에서 보내는 요청을 가장 먼저 받는 Front Controller로써, request받은 요청을 HandlerMapping에게 질의한다.

### 💨 DispatcherServlet  동작 방식
![99F8E4335A06F70930](https://i.imgur.com/oDq5qlG.png)

- **HandlerMapping**
 	- `Map` 구조 처럼 key(url) : value(method name or Parameter)로 구성되어 있는 형태이다.

1. DispatcherServlet이 HandlerMapping에게 질의한 결과 찾아낸 URL이 `Controller에게` 전달되어
1. 전달된 Parameter에 해당하는 메서드의 실행과 함께
1. Service계층에 정의되어있는 비즈니스 로직이 실행된다.
1. 이후 실행한 메서드의 컨트롤러에서 비즈니스 로직의 결과로 리턴된 `Model`객체와 뷰 이름과 함께 반환되고
1. `ViewResolver`가 응답할 View를 찾아내
1. View객체에 요청을 전달하며 최종결과가 출력된다.

## 🔖 주요 Annotation
### @ResponseBody
> Annotation이 위치한 메서드에 View를 출력하는것이 아닌 return되는 자료형이 MessageConverter에 의해 변환되어 **HTTP Response Body에 쓰여져 전송**된다.

> Controller에서 View가 아닌 객체를 리턴해야 할 상황에서 (Ajax같은) **메서드의 리턴 자료형을 지정** 할때 쓰인다.

### @RequestMapping
> 기본적으로 @RequestMapping(value="parameter", method.RequestMethod.**(method_name)**)의 형태를 띄는 Annotation이다.
method를 지정할 경우 `value`프로퍼티 형식은 **필수적** 이다.
복수의 urlMapping을 위해서는 value={"parameter1", "parameter2"}로 나타낸다.

### @RequestParam
> HttpServleRequest객체의 getParamter()와 비슷한 역할을 한다 특정 @RequestMapping로 실행된 메서드의 파라미터 유형을 `/url?key=value`처럼 지정할 수 있는 역할을 한다.

### @Autowired
> web.xml -> \<context-param> -> **`<context-annotation-config/>`** 를 통해 Autowired Annotation을 사용한 클래스의 의존성을 낮춰 사용할 수 있게하는 역할을 한다

### @PathVariable
`@RequestParam`의 value값을 {param}으로 설정했을때의 값을 `@PathVariable`로 받아 메서드 매개변수로 선언한다

### @ModelAndView
> 뷰에서 Controller로의 객체 전달이 이루어져야 할때 메서드의 매개변수로 사용한다.


## 🎧Listener
> ContextLoaderListener를 상속받아 contextIntialized 함수에 루트 컨테이너를 web.xml에 입력한 경로의 설정을 이용해 빌드하도록하는 역할

> (예제에서는 /WEB-INF/applicationContext.xml를 토대로 스프링 컨테이너를 빌드하고 모든 서블릿이 공유하도록 했다.)

## 🏛️ Layered Architecture
![enter image description here](https://img.viralpatel.net/2010/10/spring3-hibernate-application-architecture.png)

## 📌 Service
> 스프링에서의 비즈니스 영역을 일반적으로 서비스라고 한다.
비즈니스 계층은 컨트롤러와 DAO사이의 중복코드와 객체지향의 목적에 맞는 의존성을 유지하기 위해 사용하는 계층이다.

 	- DAO의 메서드 단위가 트랜잭션 단위가 된다.
	- DAO의 CRUD기능 이외에 페이징 구현시 Service계층을 이용하는것이 대표적이다.
	- applicationContext.xml에서 특정 패키지가 @Service를 사용하도록 설정할 수 있다.
	- ERD를 이용한 방식과 유저 스토리를 작성하는 것으로 비즈니스 로직을 설계하고 `Service계층을` 구현한다.
