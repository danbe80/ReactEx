# React ( 웹 프레임워크 )

- React.js 는 자바스크립트 라이브러리의 하나임
- 사용자 인터페이스를 만들기 위해 페이스북(조던 워크)에서 개발
- 싱글 페이지 어플리케이션 및 모바일 어플리케이션 개발 가능
- 2011년 페이스북의 뉴스피드에 처음 적용, 2012년 인스타그램닷컴에 적용.
- 2013년 발표. 오픈소스화 됨

# React 사이트

- 배우는 차원에서 스스로 할 수 있는 수준까지 되도록 끊임없이 고민
- 공식문서 및 검색에 익숙해져야 함

## 리액트의 동작원리

- 초기 랜더링
- 가상 DOM 변경
- 재조정
- 실제 DOM  업데이트

# 리액트 초기 셋팅 ( 타입스크립트 )

```cmd
    npx create-react-app my-app --template typescript
```
my-app => 본인이 지정한 파일 이름

## 기존 ts와 다른 점
```tsx
  <div className='App'>
      <h1> Hello</h1>
    </div>
```

class 속성이 리액트에선 'className'으로 쓰인다

# jsx 문법
변수를 태그안에서 사용하는 방법
```tsx
    let name = 'Hello';


    <div className='App'>
      <h1>{name}</h1>
    </div>
```

## Inline Style ( 인라인 스타일 )

```tsx
const style = {
    backgroundColor: 'black',
    color: 'white',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: '20px'
  }
  return (
    <div style={style}>
      <h1 className='test'>Hello, {
      name === '리액트' ? (<h1>YES</h1>): (<h1>NO</h1>)
    }
      !!</h1>
      <p>반갑습니다.</p>
    </div>
  );
```
또는
```tsx
  return (
    <div style={{
    backgroundColor: 'black',
    color: 'white',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: '20px'
  }}>
      <h1 className='test'>Hello, {
      name === '리액트' ? (<h1>YES</h1>): (<h1>NO</h1>)
    }
      !!</h1>
      <p>반갑습니다.</p>
    </div>
  );

```

jsx 에서는 닫는 태크가 필요

```tsx
    <br></br>
```
이 방법을 아래와 같이 바꿀 수 있다.
```tsx
    <br />
```

# 주석 작성법
```js
/*
  작성자 : 
  작성일 :
  내용 : 기능에 대한 내용
*/
```

# 함수형 컴포넌트와 클래스형 컴포넌트

```tsx
import { Component } from "react";

class ClassCom extends Component{
    render() {
        return (
            <div>
                클래스형 컴포넌트
            </div>
        )
    }
}

export default ClassCom;

```

```tsx
function FuncCom() {
    return(
        <div>
            함수형 컴포넌트
        </div>
    )
}

export default FuncCom;
```
state와 라이프사이클 사용이 불가능 했지만 현재 16버전에선 수정이 되었다.
현재 권장되는 방법은 함수형 컴포넌트이다.

화살표 함수형 컴포넌트 사용 ( 함수형이랑 같음 )
```tsx
const FuncCom = () => {
    return(
        <div>
            화살표 함수형 컴포넌트
        </div>
    )
}
```