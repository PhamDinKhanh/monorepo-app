// Reexport the native module. On web, it will be resolved to DataSyncModule.web.ts
// and on native platforms to DataSyncModule.ts
import { EventSubscription } from 'expo-modules-core';
import NetworkModule from './NetworkModule/NetworkModule'
import { NetworkInfo } from './NetworkModule/Network.types';
import DataSyncModule from './DataSync/DataSyncModule';

export const NATIVE_PI = DataSyncModule.PI;

export function getBatteryLevel(): number {
  return DataSyncModule.getBatteryLevel();
}

export function getNetworkInfo(): Promise<NetworkInfo> {
  return NetworkModule.getNetworkInfo()
}

export function isConnected(): Boolean {
  return NetworkModule.isConnected()
}


export const addNetworkListener = (
  callback: (info: NetworkInfo) => void
): (() => void) => {
  const subscription = NetworkModule.addListener('networkChanged', callback);

  // Trả về hàm cleanup thuần túy
  return () => {
    subscription.remove();
  };
};


