import { Logo } from "@/components/logo";

const introScript = `(function(){try{if(sessionStorage.getItem("ep-intro")){document.documentElement.setAttribute("data-intro-seen","1");}else{sessionStorage.setItem("ep-intro","1");}}catch(e){}})();`;

export function Preloader() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: introScript }} />
      <div className="pl-root" aria-hidden="true">
        <div className="pl-mark">
          <Logo label={null} className="h-9 sm:h-11" />
        </div>
        <div className="pl-bar" />
      </div>
    </>
  );
}
