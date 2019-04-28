![enter image description here](https://seekcomau.corewebdna.net.au/web_images/blogs/214/1670/How%20to%20mine%20your%20network_940x485.jpg)
## 🌏 InputStream 과 OutputStream

### 1. DNS( Domain Name System)
> DNS 또는 Domain Name System은 사람이 읽을 수 있는 도메인 이름을 머신이 읽을 수 있는 IP 주소(예: 192.0.2.44)로 변환합니다.

``` bash
# nslookup (/usr/bin/nslookup)
- 도메인 네임 서버의 정보를 쿼리하기 위해 사용.
```

### InetAddress
> This class represents an Internet Protocol (IP) address.

|Method   |  description |
|---|---|
|static InetAddress getLocalHost()   | 로컬호스트의 주소 반환 |
| getHostName()  | 호스트 이름을 문자열로 반환  |
| getHostAddress()  | 호스트 IP 반환  |
| getAddress()   |  InetAddress 객체의 IP주소를 반환 |

#### NSLookup

1. Scanner와 nextLine()을 도메인을 입력받는다.
1. 입력받은 도메인의 IP주소를 출력.
1. "exit"일 경우 프로그램 종료.
1. InetAddress의 static 메서드 getAllByName(String host)를 사용.
  - getAllByName() : "www.google.com" 같은 호스트를 입력받아 해당 주소에서 모든 IP를 가져오는 메서드
