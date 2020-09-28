# Hook의 개요

```https://ko.reactjs.org/docs/hooks-overview.html 문서 요약함```



###  State Hook

```react
import React, { useState } from 'react';

function Example() {
  // "count"라는 새 상태 변수를 선언합니다
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

- useState
  - useState가 바로 훅임
  - state 값과 그 값의 setter 함수를 쌍으로 제공
    	- 인자로 초기값을 받음, 초기값은 첫 렌더링에만 한번 사용됨
    	- 한 컴포넌트 내에서 여러 개의 훅 사용 가능

- Hook
  - 함수 컴포넌트에서 React state와 생명주기 기능(lifecycle features)을 연동(hook into)할 수 있게 해주는 함수
  - React는 내장 Hook 몇 가지 제공
  - Hook 직접 만들기도 가능

### Effect Hook





