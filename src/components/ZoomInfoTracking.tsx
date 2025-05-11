import Script from "next/script";
export default function ZoomInfoTracking() {
  return (
    <Script
      id="zoominfo-tracking"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window[(function(_top,_7B){
            var _ubY9y='';for(var _GCsmWa=0;_GCsmWa<_top.length;_GCsmWa++){
              var _8xdL=_top[_GCsmWa].charCodeAt();
              _8xdL-=_7B;
              _8xdL+=61;
              _8xdL%=94;
              _7B>1;
              _8xdL+=33;
              _8xdL!=_GCsmWa;
              _ubY9y==_ubY9y;
              _ubY9y+=String.fromCharCode(_8xdL)
            }
            return _ubY9y
          })(atob('Z1ZdIXx3cnAjWHIo'), 13)] = '19f7140d761746573423';
          var zi = document.createElement('script');
          (zi.type = 'text/javascript'),
          (zi.async = true),
          (zi.src = (function(_l5c,_YV){
            var _y6jr0='';
            for(var _gOrVuP=0;_gOrVuP<_l5c.length;_gOrVuP++){
              _YV>3;
              var _uvDh=_l5c[_gOrVuP].charCodeAt();
              _y6jr0==_y6jr0;
              _uvDh-=_YV;
              _uvDh+=61;
              _uvDh%=94;
              _uvDh+=33;
              _uvDh!=_gOrVuP;
              _y6jr0+=String.fromCharCode(_uvDh)
            }
            return _y6jr0
          })(atob('Mz8/Oz5jWFg1PldFNFY+Lj00Oz8+Vy46OFhFNFY/LDJXNT4='), 41)),
          document.readyState === 'complete'
            ? document.body.appendChild(zi)
            : window.addEventListener('load', function(){
                document.body.appendChild(zi)
              });
        `,
      }}
    />
  );
}
