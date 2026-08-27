import { LogoMark } from "@/components/logo";

const introScript = `(function(){try{if(sessionStorage.getItem("ep-intro")){document.documentElement.setAttribute("data-intro-seen","1");}else{sessionStorage.setItem("ep-intro","1");}}catch(e){}})();`;

const LETTERS = ["E", "a", "s", "y", "P", "r", "a", "v", "a"];

export function Preloader() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: introScript }} />
      <div className="pl-root" aria-hidden="true">
        <div className="pl-mark">
          <LogoMark className="size-16" />
        </div>
        <div className="pl-word font-heading text-2xl font-bold tracking-tight">
          {LETTERS.map((letter, i) => (
            <span
              key={i}
              className={`pl-letter ${i >= 4 ? "text-primary" : ""}`}
              style={{ "--i": i } as React.CSSProperties}
            >
              {letter}
            </span>
          ))}
        </div>
        <div className="pl-bar" />
      </div>
    </>
  );
}
