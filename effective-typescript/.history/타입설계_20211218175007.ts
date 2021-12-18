interface RequestPending {
    state: 'pending'
}

interface RequestError {
    state : 'error',
    error : 'string'
};

interface RequestSuccess {
    status : 'ok',
    PageText : string
};

type RequestType = RequestPending | RequestError | RequestSuccess

interface State {
    currentPage: string
    requests : {[page : string] : RequestType}
}