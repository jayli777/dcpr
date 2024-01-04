export default {
    async fetch(request, env) {
      let url = new URL(request.url);
      if (url.pathname.startsWith('/')) {
        url.hostname="dc2bf827-9b59-4e79-9d0f-c7ae7214c194-00-cz68bduz3efw.global.replit.dev";
        let new_request=new Request(url,request);
        return fetch(new_request);
      }
      return env.ASSETS.fetch(request);
    }
  }
