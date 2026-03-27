//Define types/interfaces for data exchanged between JavaScript and native code.
export type NetworkInfo = {
    isConnected: boolean
    isValidated: boolean
    type: 'WIFI' | 'CELLULAR' | 'NONE'
}

export type NetworkModuleEvents = {
    networkChanged: (params: NetworkInfo) => void;
};
