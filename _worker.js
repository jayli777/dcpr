export default {
    async fetch(request, env) {
      let url = new URL(request.url);
      if (url.pathname.startsWith('/')) {
        url.hostname="fcenaq.eu-hhwtruiofdjd.dopraxrocks.net";
        url.hostname="ja-31m3.onrender.com";
        let new_request=new Request(url,request);
        return fetch(new_request);
      }
      return env.ASSETS.fetch(request);
    }
  }
