import axios from 'axios'


export class AxiosFunctions    {


        protected getToken(): string { return (window.localStorage.getItem('token') ?? "") }

        protected setHeader(validToken: string) {
                const config = {
                        headers: {
                                'Authorization': 'bearer '+ validToken
                        }
                }
                return config;
        }


        async fetchData(Endpoint: string): Promise<any> {
                        const data = await axios.get(
                                Endpoint,
                                this.setHeader(this.getToken())
                        )
                        return data
        }

        public async submitData(Endpoint: string ,payload: any): Promise<any> {
                try {
                        const data = await axios.post(
                                Endpoint,
                                payload,
                                this.setHeader(this.getToken())
                        )
                        return data
                } catch (error) {
                        return error
                }

        }

        public async updateData(Endpoint: string ,payload: any): Promise<any> {
                try {
                        const data = await axios.put(
                                Endpoint,
                                payload,
                                this.setHeader(this.getToken())
                        )
                        return data
                } catch (error) {
                        return error
                }

        }

        public async delete(Endpoint: string): Promise<any> {
                try {
                        const data = await axios.delete(
                                Endpoint,
                                this.setHeader(this.getToken())
                        )
                        return data
                } catch (error) {
                        return error
                }

        }


}



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






