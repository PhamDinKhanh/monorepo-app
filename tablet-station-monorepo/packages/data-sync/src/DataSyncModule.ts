import { NativeModule, requireNativeModule } from 'expo-modules-core';
import { DataSyncModuleEvents } from './DataSync.types';

declare class DataSyncModule extends NativeModule<DataSyncModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
  getBatteryLevel(): number; // Hàm đồng bộ lấy pin
  startObservingNetwork(): void; // Hàm kích hoạt listener ở Android
  stopObservingNetwork(): void; // Hàm hủy listener
}

// This call loads the native module object from the JSI.
export default requireNativeModule<DataSyncModule>('DataSync');
