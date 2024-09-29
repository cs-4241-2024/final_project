import "./Home.css";
// index.js
import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/checkbox/checkbox.js';

import { useState } from "react";

function Home() {
    return (
        <div>
        <div
          dangerouslySetInnerHTML={{
            __html: `<label>
                      Material 3
                      <md-checkbox checked></md-checkbox>
                     </label>
                     <md-outlined-button>Back</md-outlined-button>
                     <md-filled-button>Next</md-filled-button>`,
          }}
        />
      </div>
        
    );

}

export default Home;