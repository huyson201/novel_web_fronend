declare global {
    interface Window {
      FB: any;
      fbAsyncInit: any;
    }
  }
  
  export function initFacebookSdk() {
    if(window.FB && window.FB.XFBML)
    {
        window.FB.XFBML.parse()
    }
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: import.meta.env.VITE_FACEBOOK_APP_ID,
        cookie: true,
        xfbml: true,
        version: "v2.5",
      });
    };
  
    (function (d, s, id) {
      var js: any,
        fjs: any = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = `https://connect.facebook.net/vi_VN/sdk.js`;
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }
  