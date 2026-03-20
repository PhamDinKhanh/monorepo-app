import { registerWebModule, NativeModule } from 'expo';

import { DataSyncModuleEvents } from './DataSync.types';

class DataSyncModule extends NativeModule<DataSyncModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(DataSyncModule, 'DataSyncModule');
