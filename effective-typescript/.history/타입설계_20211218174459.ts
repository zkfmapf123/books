/**
 * 올바른 타입설계
 */


interface State {
    pageText : string;
    isLoading : boolean;
    error?: string;
}

function renderPage(state: State){
    if(state.error){
        /**
         * error
         */
    }else if(state.isLoading){
        /**
         * loading
         */
    }

    /**
     * none error
     * none loading
     */
}

function changePage(state: State, newPage: string){
    state.isLoading = true;

    try{
        /**
         * page 전환
         */
    }catch(e){
        /**
         * error
         */
    }
}