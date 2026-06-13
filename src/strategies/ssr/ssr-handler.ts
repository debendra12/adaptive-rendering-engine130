export class SSRHandler {

  async fetchData() {
    return {
      timestamp: Date.now(),
      source: "server"
    };
  }

  async processRequest() {
    return {
      status: "success"
    };
  }
}