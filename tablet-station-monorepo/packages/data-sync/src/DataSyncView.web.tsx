import * as React from 'react';

import { DataSyncViewProps } from './DataSync.types';

export default function DataSyncView(props: DataSyncViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
