import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { useEffect, useRef } from "react";

function DeepLinker(options) {
  if (!options) {
    throw new Error("no options");
  }

  var hasFocus = true;
  var didHide = false;

  // window is blurred when dialogs are shown
  function onBlur() {
    hasFocus = false;
  }

  // document is hidden when native app is shown or browser is backgrounded
  function onVisibilityChange(e) {
    if (e.target.visibilityState === "hidden") {
      didHide = true;
    }
  }

  // window is focused when dialogs are hidden, or browser comes into view
  function onFocus() {
    if (didHide) {
      if (options.onReturn) {
        options.onReturn();
      }

      didHide = false; // reset
    } else {
      // ignore duplicate focus event when returning from native app on
      // iOS Safari 13.3+
      if (!hasFocus && options.onFallback) {
        // wait for app switch transition to fully complete - only then is
        // 'visibilitychange' fired
        setTimeout(function () {
          // if browser was not hidden, the deep link failed
          if (!didHide) {
            options.onFallback();
          }
        }, 1000);
      }
    }

    hasFocus = true;
  }

  // add/remove event listeners
  // `mode` can be "add" or "remove"
  function bindEvents(mode) {
    [
      [window, "blur", onBlur],
      [document, "visibilitychange", onVisibilityChange],
      [window, "focus", onFocus],
    ].forEach(function (conf) {
      conf[0][mode + "EventListener"](conf[1], conf[2]);
    });
  }

  // add event listeners
  bindEvents("add");

  // expose public API
  this.destroy = bindEvents.bind(null, "remove");
  this.openURL = function (url) {
    // it can take a while for the dialog to appear
    var dialogTimeout = 500;

    setTimeout(function () {
      if (hasFocus && options.onIgnored) {
        options.onIgnored();
      }
    }, dialogTimeout);

    window.location = url;
  };
}

var url =
  "streetconsumer://compliance?propertyId=d9376ea2-9475-4702-95a2-127268885ee9";
var badURL = "www.fogaonet.com";

export default function Compliance() {
  useEffect(() => {
    if (window) {
      var linker = new DeepLinker({
        onIgnored: function () {
          console.log("browser failed to respond to the deep link");
          linker.openURL(badURL);
        },
        onFallback: function () {
          console.log("dialog hidden or user returned to tab");
        },
        onReturn: function () {
          console.log("user returned to the page from the native app");
        },
      });

      linker.openURL(url);
    }
  }, [window]);

  return (
    <div className="container">
      <Head>
        <title>You are being redirect to the app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="You're being redirect to the app or store if you don't have the app" />
      </main>

      <Footer />
    </div>
  );
}
