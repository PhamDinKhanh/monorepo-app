import { requireNativeView } from 'expo';
import * as React from 'react';

import { DataSyncViewProps } from './DataSync.types';

const NativeView: React.ComponentType<DataSyncViewProps> =
  requireNativeView('DataSync');

export default function DataSyncView(props: DataSyncViewProps) {
  return <NativeView {...props} />;
}
