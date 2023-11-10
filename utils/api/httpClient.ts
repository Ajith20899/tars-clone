import axios from 'axios';
import cookie from 'js-cookie';
import { getAccessIdToken, logout } from '@/utils/amplify';
import { Cookies } from '@/utils/cookie/types';
import { IHttpRequestResponse, StatusCodes } from './types';

const getHeaders: any = async () => {
    const { accessToken, idToken } = await getAccessIdToken();
    if (!(accessToken || idToken)) {
        logout();
        return;
    }
    return {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Access-Token': accessToken || '',
        Authorization: idToken || '',
    };
};

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(async function (config) {
    config.headers = await getHeaders();
    return config;
});

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error?.message === 'Network Error') {
            // dispatch(updateNetworkConnectionStatus(false));
        }
        return Promise.reject(error);
    }
);

export const getRequest = async (
    url: string,
    params?: any
): Promise<IHttpRequestResponse<any>> => {
    try {
        const userEkey = cookie.get(Cookies.USER_EKEY);
        params = params || {};
        params['userEkey'] = userEkey;
        const { data } = await axiosInstance({
            method: 'GET',
            url,
            params,
        });
    
        return {
            statusCode: StatusCodes._200,
            data,
        };
    } catch (e: any) {
        return {
            data: null,
            statusCode: e?.response?.status,
            errorMessage: e?.response?.data?.message,
        };
    }
};

export const postRequest = async (
    url: string,
    payload: any
): Promise<IHttpRequestResponse<any>> => {
    try {
        payload = payload || {};
        payload['userEkey'] = cookie.get(Cookies.USER_EKEY);
        const { data } = await axiosInstance({
            method: 'POST',
            url,
            data: payload,
        });
        return {
            statusCode: StatusCodes._200,
            data,
            errorMessage: '',
        };
    } catch (e: any) {
        return {
            data: e?.response?.data,
            statusCode: e?.response?.status,
            errorMessage: e?.response?.data?.errorMessage,
        };
    }
};

export const putRequest = async (
    url: string,
    payload: any
): Promise<IHttpRequestResponse<any>> => {
    try {
        payload = payload || {};
        payload['userEkey'] = cookie.get(Cookies.USER_EKEY);
        const { data } = await axiosInstance({
            method: 'PUT',
            url,
            data: payload,
        });
        return {
            statusCode: StatusCodes._200,
            data,
        };
    } catch (e: any) {
        return {
            data: e?.response?.data,
            statusCode: e?.response?.status,
            errorMessage: e?.response?.data?.errorMessage,
        };
    }
};

export const deleteRequest = async (
    url: string,
    payload: any
): Promise<IHttpRequestResponse<any>> => {
    try {
        payload = payload || {};
        payload['userEkey'] = cookie.get(Cookies.USER_EKEY);
        const { data } = await axiosInstance({
            method: 'DELETE',
            url,
            data: payload,
        });
        return {
            statusCode: StatusCodes._200,
            data,
        };
    } catch (e: any) {
        return {
            statusCode: e?.response?.data?.status,
            errorMessage: e?.response?.data?.errorMessage,
        };
    }
};
