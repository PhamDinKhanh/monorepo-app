// Reexport the native module. On web, it will be resolved to DataSyncModule.web.ts
// and on native platforms to DataSyncModule.ts
import { EventSubscription } from 'expo-modules-core';
import DataSyncModule from './DataSyncModule';
import { NetworkEventPayload } from './DataSync.types';

export const NATIVE_PI = DataSyncModule.PI;

// 2. Hàm lấy pin (gọi phát ăn ngay)
export function getBatteryLevel(): number {
  return DataSyncModule.getBatteryLevel();
}

// 3. Quản lý lắng nghe mạng
export function addNetworkListener(
  listener: (event: NetworkEventPayload) => void
): EventSubscription {
  // Kích hoạt logic Native (đã viết ở Kotlin)
  DataSyncModule.startObservingNetwork();
  
  // Trả về subscription để App có thể .remove() khi unmount
  return DataSyncModule.addListener('onNetworkStatusChange', listener);
}