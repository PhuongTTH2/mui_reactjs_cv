export enum DemandState {
  INITIALIZING = 'INITIALIZING',
  READY = 'READY',
  SCHEDULED = 'SCHEDULED',
  WAITING = 'WAITING',
  RUNNING = 'RUNNING',
  CANCELED = 'CANCELED',
  SUCCEEDED = 'SUCCEEDED',
  FAILED = 'FAILED',
}

export enum DemandType {
  RENDERING = 'RENDERING',
  MACHINE_LEARNING = 'MACHINE_LEARNING',
}
