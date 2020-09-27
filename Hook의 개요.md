# Hook의 개요

```https://ko.reactjs.org/docs/hooks-overview.html 문서 요약함```



###  State Hook

```react
import React, { useState } from 'react';

function Example() {
  /** useState
  	- useState가 바로 훅임
  	- state 값과 그 값의 setter 함수를 쌍으로 제공
  	- 인자로 초기값을 받음, 초기값은 첫 렌더링에만 한번 사용됨
  **/
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





