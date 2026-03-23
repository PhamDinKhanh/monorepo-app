//Define types/interfaces for data exchanged between JavaScript and native code.

export type BatteryEventPayload = {
  level: number;
};

export type NetworkEventPayload = {
  isConnected: boolean;
  type: 'wifi' | 'cellular' | 'none';
};

export type DataSyncModuleEvents = {
  onNetworkStatusChange: (params: NetworkEventPayload) => void;
};