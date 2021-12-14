{
    interface RequestFail {
        state : 'error',
        error : string
    }

    interface RequestSuccess{
        state: 'ok',
        erorr : string
    }

    type RequestState = RequestFail | RequestSuccess

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