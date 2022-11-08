export class TokenConfiguration  {
        config:{ headers: { Authorization: string; }; }
        constructor() {
                const config = {
                        headers: {
                                'Authorization': 'bearer ' + this.getToken()
                        }
                }
                this.config = config
        }

        private getToken(): string { return (window.localStorage.getItem('token') ?? "") }
   
}






