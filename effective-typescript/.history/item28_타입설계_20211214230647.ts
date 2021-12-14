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
}