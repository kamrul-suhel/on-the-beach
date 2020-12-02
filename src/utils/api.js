import axios from 'axios'
import fn from './functions'
import _ from 'lodash'
import NetInfo from "@react-native-community/netinfo"
import {Platform} from "react-native";

export default {
    /**
     * Sends a get request to API
     *
     * @author  Kamrul Ahmed
     * @version 1.0
     * @since   2019-07-21
     * @param   {string}   url        Request URL
     * @return  {object}            Response or the error
     */
    get(url, api = true) {
        return this.send(url, 'GET', {}, api);
    },

    /**
     * Sends a post request to API with the set data
     *
     * @author  Kamrul Ahmed
     * @version 1.0
     * @since   2019-07-21
     * @param   {string}   url        Request URL
     * @param   {object}   data        Form data
     * @return  {object}            Response or the error
     */
    post(url, data, api = true) {
        return this.send(url, 'POST', {data}, api);
    },

    /**
     * Sends an update request to API with the set data
     *
     * @author  Kamrul Ahmed
     * @version 1.0
     * @since   2019-07-21
     * @param   {string}   url        Request URL
     * @param   {object}   data        Form data
     * @return  {object}            Response or the error
     */
    put(url, data) {
        return this.send(url, 'PUT', {data});
    },

    /**
     * Sends a delete request to API with the set data
     *
     * @author  Kamrul Ahmed
     * @version 1.0
     * @since   2019-07-21
     * @param   {string}   url        Request URL
     * @param   {object}   data        Form data
     * @return  {object}            Response or the error
     */
    delete(url, data) {
        return this.send(url, 'DELETE', {data}, true);
    },

    /**
     * Sends the request to API with the set method and data.
     * This function sets the URL and the token, returns the response or catches the error.
     *
     * @author  Kamrul Ahmed
     * @version 1.0
     * @since   2019-07-21
     * @param   {string}   url        Request URL which adds to the baseURL
     * @param   {string}   method    Request method (GET, POST, PUT, DELETE)
     * @param   {object}   data        Form data
     * @return  {object}            Response or the error
     */
    async send(url, method, data, api) {

        const isNetConnected = await NetInfo.fetch()
        console.log('net info is: ', isNetConnected)
        // Check is Ios
        if(Platform.OS === 'ios'){
            if(!isNetConnected.isConnected){
                return new Promise(res => res())
                    .then(() => {
                        return {
                            data: {
                                success: false,
                                error: 'networkDisable',
                                message: 'no network connection'
                            }
                        }
                    });
            }
        }

        if(Platform.OS === 'android'){
            // Android
            if (
                !isNetConnected.isWifiEnabled
            ) {
                return new Promise(res => res())
                    .then(() => {
                        return {
                            data: {
                                success: false,
                                error: 'networkDisable',
                                message: 'no network connection'
                            }
                        }
                    });
            }
        }

        // Check network connection.

        data = _.assign({}, {method}, data)
        let path = 'https://backend.studio-you.co.uk' // In AWS link
        axios.defaults.baseURL = path

        let callingPath = api ? `/api/v1/app/${url}` : url
        axios.defaults.withCredentials = true
        axios.defaults.headers = {
            RequestType: 'app',
            ApiKey:'xam6kJZenkc7RyI6zjO00l7JWcK6skVd'
        }
        try {
            return await axios(callingPath, data)
        } catch (error) {
            return new Promise(res => res())
                .then(() => {
                    return {
                        data: {
                            success: false,
                            error: 'serverError',
                            message: error.message
                        }
                    }
                });
        }
    },

    /**
     * Generates and shows the error message
     *
     * @author  Kamrul Ahmed
     * @version 1.0
     * @since   2019-07-21
     * @param   {object}    response    API response
     * @return  {boolean}                True if found error, false if not found
     */
    error(response) {
        if (!response) {
            return true;
        }

        if (response.status === 200) {
            return false;
        }

        if (response.status === 424 || response.status === 401) {
            return true;
        }

        const errors = [];

        this.getErrors(errors, response.data);

        // fn.showAlert(errors[0], 'error');
        return true;
    },

    getErrors(array = [], errors) {
        if (_.isObject(errors)) {
            _.map(errors, error => this.getErrors(array, error));
        } else {
            // check if server error then return a shorter message
            if (_.size(errors) > 2000) {
                return array.push('Something went wrong. Please try again later.');
            }
            return array.push(errors);
        }

        return false;
    },

};
