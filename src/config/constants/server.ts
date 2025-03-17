export default {
  // local
  // baseUrl: "http://192.168.110.35:3333/",
  // production
  baseUrl: "https://ahsan-server-production.up.railway.app/",
  imageUrl: function (url: string): string {
    return this.baseUrl + url;
  },
  apiUrl: function (url: string = ""): string {
    return this.baseUrl + url;
  },
  crypto: {
    AES_SECRET: "kXp2s5v8y/B?E(H+MbQeThWmZq3t6w9z",
    AES_IV: "I8zyA4lVhMCaJ5Kg",
  },
};
