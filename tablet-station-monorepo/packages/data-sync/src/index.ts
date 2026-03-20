// Reexport the native module. On web, it will be resolved to DataSyncModule.web.ts
// and on native platforms to DataSyncModule.ts
export { default } from './DataSyncModule';
export { default as DataSyncView } from './DataSyncView';
export * from  './DataSync.types';
