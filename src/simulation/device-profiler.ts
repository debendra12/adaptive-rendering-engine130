export interface DeviceProfile {
  name: string;
  cpuScore: number;
  memoryMB: number;
}

export class DeviceProfiler {

  getLowEndDevice():
    DeviceProfile {

    return {
      name: "Low-End Mobile",
      cpuScore: 25,
      memoryMB: 2048
    };
  }

  getMidRangeDevice():
    DeviceProfile {

    return {
      name: "Mid-Range Device",
      cpuScore: 60,
      memoryMB: 4096
    };
  }

  getHighEndDevice():
    DeviceProfile {

    return {
      name: "High-End Desktop",
      cpuScore: 95,
      memoryMB: 16384
    };
  }
}