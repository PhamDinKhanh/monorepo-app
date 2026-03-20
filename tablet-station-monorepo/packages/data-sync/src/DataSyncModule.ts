import { NativeModule, requireNativeModule } from 'expo';

import { DataSyncModuleEvents } from './DataSync.types';

declare class DataSyncModule extends NativeModule<DataSyncModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<DataSyncModule>('DataSync');
