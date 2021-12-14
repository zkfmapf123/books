{
    // 여기는 좀더 읽어보자 ... 지금은 이해가 안된다
    interface RequestFail {
        state : 'error',
        error : string
    }

    interface RequestSuccess{
        state: 'ok',
        erorr : string
    }

    type RequestState = RequestFail | RequestSuccess

    // 어떻게 이런 코드가 나오지?
    interface State {
        currentPage: string;
        requests: {[page: string] : RequestState}
    }

    function renderPage(state: State){
        const {currentPage} = state;
        const requestState = state.requests[currentPage]

        switch(requestState.state){
            case 'error':
                break;
            case 'ok':
                break;
        }
    }
}