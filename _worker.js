export default {
    async fetch(request, env) {
      let url = new URL(request.url);
      if (url.pathname.startsWith('/')) {
        url.hostname="34fa031d-0607-4553-8fe6-b736315bdb79-00-1hacpp1eb4se5.janeway.replit.dev";
        let new_request=new Request(url,request);
        return fetch(new_request);
      }
      return env.ASSETS.fetch(request);
    }
  }
