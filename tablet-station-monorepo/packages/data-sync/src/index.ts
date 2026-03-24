// Reexport the native module. On web, it will be resolved to DataSyncModule.web.ts
// and on native platforms to DataSyncModule.ts
import { EventSubscription } from 'expo-modules-core';
import DataSyncModule from './DataSyncModule';
import { NetworkEventPayload } from './DataSync.types';

export const NATIVE_PI = DataSyncModule.PI;

export function getBatteryLevel(): number {
  return DataSyncModule.getBatteryLevel();
}

export function addNetworkListener(
  listener: (event: NetworkEventPayload) => void
): EventSubscription {
  DataSyncModule.startObservingNetwork();
  return DataSyncModule.addListener('onNetworkStatusChange', listener);
}