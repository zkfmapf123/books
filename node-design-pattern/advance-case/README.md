## Nodejs 고급 레시피

> 비동기적으로 초기화되는 컴포넌트 처리 (case_1)

- 요청되는 작업의 대해서 init이 되지 않을 경우 전체 프로그램을 늦추거나, 다시 실행시켜야 하는데 -> 프로그램 성능 낮아진다
- init이 되지 않을경우에은 task Queue에 쌓아놓고, init후에 작업을 진행시키는 방식

> 비동기식 요청 일괄 처리 및 캐싱 (case_2)

- totalSales

  - 기본적인 Product의 모든 Item들을 순회하면서 Sum을 리턴한다.

- totalSalesBatch (Caching 불가)

  - Map으로 관리하며, totalSales 위에 Layer형식으로 동작
  - Map으로 이미 Proimse가 존재하면 반환

- totalCaching
  - Map으로 관리하며, totalSales 위에 Layer형식으로 동작
  - 계속 Caching형태로 관리되기 위해서, TTL 옵션을 넣어서 보존 후 지워줌

<table>
    <th></th>
    <th> 다수의 비동기 작업이 한번에 실행되는가? </th>
    <th> 다수의 비동기 작업이 모두 끝나기를 기다리는가? </th>
    <tr>
        <td>forEach</td>
        <td>O</td>
        <td>X</td>
    </tr>
    <tr>
        <td>Promise.all</td>
        <td>O</td>
        <td>O</td>
    </tr>
    <tr>
        <td>for await of</td>
        <td>X</td>
        <td>O</td>
    </tr>
</table>

```
    forEach는 비동기적으로 동작하나 모두 끝나는걸 기디라지 않아 -> 사용 X
    Promise.all은 병렬 수행
    await of 순차적으로 진행하되 -> 끝나기를 기다린다
```

> CPU Bounded 작업의 취소 (case_3)

- 만약, 완료하는데 오랜 시간이 걸리고 -> 이벤트 루프에 제어권을 돌려주지 않는 동기작업이 실행되면 어떻게 될까?
- 기본적인 Nodejs 이벤트 루프로 동작하기 때문에, 많은 IO 작업에 적합하지만 무거운 CPU 작업에는 적합하지 못하다 (CPU Bounded vs IO Bounded)
- Node로 하지 말자 (CPU 작업)
- 만약한다면 ...
