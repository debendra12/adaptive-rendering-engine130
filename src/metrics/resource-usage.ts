export class ResourceUsage {

  getMemoryUsage() {
    return process.memoryUsage();
  }

  getCPUUsage() {
    return process.cpuUsage();
  }

  generateReport() {
    return {
      memory: this.getMemoryUsage(),
      cpu: this.getCPUUsage()
    };
  }
}