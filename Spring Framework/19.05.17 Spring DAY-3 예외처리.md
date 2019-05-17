# Exception

## Checked Exception / UnChecked Exception

|Checked Exception   | UnChecked Exception  |
|---|---|
| 엄격한 예외처리 과정   | 강제하지 않는 처리과정  |
|컴파일 단계|실행단계|
|roll-back ❌| roll-back ⭕|
|RuntimeException을 제외한 모든 예외|RuntimeException 의 하위 예외|


## Service와 Exception
> 대개 Service계층에서는 비즈니스 로직을 수행하는 본 목적에 맞게 Exception처리는 하지 않는다.
이 말은 필수적인 것 과는 다른 의미로써 Exception처리의 필요성이 없다고 이해하고 넘어가자.

### ❓ 그럼 어떻게 처리해야 할까
> Service와 Controller 계층에서 처리하는것이 아닌 **DAO에서 Exception처리가 이루어진다.**
[예제](https://github.com/jihunhong/mysite2/blob/master/src/main/java/com/cafe24/mysite/repository/UserDao.java)의 UserDAO에 SQLException은 처리는 Exception을 상속받아 직접 정의한 [UserDAOException 클래스](https://github.com/jihunhong/mysite2/blob/master/src/main/java/com/cafe24/mysite/exception/UserDAOException.java)에서 `RuntimeException`을 사용해 전환하는것으로 이루어졌다.

```java
try{
		~
} catch (SQLException e) {
   throw new UserDAOException();
	 //원래는 RuntimeException.
}
```
> 이처럼 @ExceptionHandler Annotation을 사용한 Exception 핸들러 매핑은 개별적인 예외처리 보다
- 모든 Exception을 한 메서드에서 처리 할 수 있다는 점
- 해당 퍼를리케이션의 같은 종류의 예외처리로 인한 복구의 가능성이 높아진다는점
- 각각의 다른 예외상황들에 관해 각기 다른 뷰를 반환 할 수 있다는 장점이 있다.
