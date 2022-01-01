interface Execution {
  timeout: {
    contract: number;
  };
}

interface Sequential {
  pid: number
}

export interface ServiceInstances {
  sequential: Sequential[];
  concurrent: never[];

}

export interface Service {
  name: string;
  instances: ServiceInstances;
  execution: Execution;
  transaction: number;
}


export enum Contract {
  linger = 0,
  kill,
  terminate,
}

export enum Transaction {
  //! join transaction if present else start a new transaction
  automatic = 0,
  //! join transaction if present else execute outside transaction
  join = 1,
  //! start a new transaction regardless
  atomic = 2,
  //! execute outside transaction regardless
  none = 3,
  //! branch transaction if present, else start a new transaction
  branch,
}
