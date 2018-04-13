export interface HttpResponse {
    code: number;
    data?: any;
    message?: string;
    isRedirect?: Boolean;
    redirectUrl?: string;
};