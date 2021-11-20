// Import the functions you need from the SDKs you need
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-analytics.js";
import {
  getDatabase,
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/9.1.3/firebase-database.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwDLNDUINuCDZckS5C1M-I-9ia7ZoKIsw",
  authDomain: "pro-cam-web.firebaseapp.com",
  databaseURL: "https://pro-cam-web-default-rtdb.firebaseio.com",
  projectId: "pro-cam-web",
  storageBucket: "pro-cam-web.appspot.com",
  messagingSenderId: "1043601014942",
  appId: "1:1043601014942:web:c4608e15cdafb23fb3bb8f",
  measurementId: "G-L8XZNC95BJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

var products = [
  {
    id: 20,
    img: "./assets/images/Compact/ixus-185-bk-frt-flipped-800x524.jpg",
    name: "IXUS 185",
    price: 249,
    color: "Black,Silver,red",
    cart: false,
    quantity: 1,
    href: "./compact/IXUS 185.html",
    total: 0,
    type: "compact",
  },

  {
    id: 21,
    img: "./assets/images/Compact/PowerShot SX620.jpg",
    img2: "./assets/imges/compact/PowerShot SX620 HS Angle3_tcm13-1390546.jpg",
    img3: "./assets/imges/compact/PowerShot SX620 HS Angle3_tcm13-1390546.jpg",
    img4: "./assets/imges/compact/PowerShot SX620 HS Angle3_tcm13-1390546.jpg",
    name: "POWERSHOT SX-620 HS",
    price: 129,
    color: "Black,red",
    cart: false,
    quantity: 1,
    href: "./compact/POWERSHOT SX-620.html",
    total: 0,
    type: "compact",
    info: `<div>
        <h2 class="pl-h2">Specifications in detail</h2>

        <div class="product-specification__item pl-spacer pl-spacer--out--small pl-spacer--cut-h" id="image-sensor_1">
            <h3 class="pl-h2 pl-h2--alt">Image Sensor</h3>
            <div class="product-specification__item__details  pl-spacer pl-spacer--out--smaller pl-spacer--cut-h">

                <div
                    class="product-specification__item__details__element pl-spacer pl-spacer--in--smallest pl-spacer--cut-h clearfix row no-gutter">

                    <h4 class="col-xs-12 col-lg-4 pl-h5 pl-spacer--out pl-spacer--cut-v">Type</h4>
                    <div class="col-xs-12 col-lg-8">
                        <p>1/2.3 type CCD</p>
                    </div>
                </div>

                <div
                    class="product-specification__item__details__element pl-spacer pl-spacer--in--smallest pl-spacer--cut-h clearfix row no-gutter">

                    <h4 class="col-xs-12 col-lg-4 pl-h5 pl-spacer--out pl-spacer--cut-v">Effective Pixels</h4>
                    <div class="col-xs-12 col-lg-8">
                        <p>Approx. 20.0M <a><sup></sup></a><a href="#footnote-1"
                                class="product-specification-detail__link" canon-link--blue="">1</a></p>
                    </div>
                </div>

                <div
                    class="product-specification__item__details__element pl-spacer pl-spacer--in--smallest pl-spacer--cut-h clearfix row no-gutter">

                    <h4 class="col-xs-12 col-lg-4 pl-h5 pl-spacer--out pl-spacer--cut-v">Effective / Total Pixels</h4>
                    <div class="col-xs-12 col-lg-8">
                        <p>Approx. 20.5M</p>
                    </div>
                </div>


            </div>
        </div>

        <div class="product-specification__item pl-spacer pl-spacer--out--small pl-spacer--cut-h"
            id="image-processor_2">
            <h3 class="pl-h2 pl-h2--alt">Image Processor</h3>
            <div class="product-specification__item__details  pl-spacer pl-spacer--out--smaller pl-spacer--cut-h">

                <div
                    class="product-specification__item__details__element pl-spacer pl-spacer--in--smallest pl-spacer--cut-h clearfix row no-gutter">

                    <h4 class="col-xs-12 col-lg-4 pl-h5 pl-spacer--out pl-spacer--cut-v">Type</h4>
                    <div class="col-xs-12 col-lg-8">
                        <p>DIGIC 4+</p>
                    </div>
                </div>


            </div>
        </div>
     <div class="product-specification__item pl-spacer pl-spacer--out--small pl-spacer--cut-h" id="lens_3">
            <h3 class="pl-h2 pl-h2--alt">Lens</h3>
            <div class="product-specification__item__details  pl-spacer pl-spacer--out--smaller pl-spacer--cut-h">

                <div
                    class="product-specification__item__details__element pl-spacer pl-spacer--in--smallest pl-spacer--cut-h clearfix row no-gutter">

                    <h4 class="col-xs-12 col-lg-4 pl-h5 pl-spacer--out pl-spacer--cut-v">Focal Length</h4>
                    <div class="col-xs-12 col-lg-8">
                        <p>5.0 – 40.0 mm (35 mm equivalent: 28 – 224 mm)</p>
                    </div>
                </div>

                <div
                    class="product-specification__item__details__element pl-spacer pl-spacer--in--smallest pl-spacer--cut-h clearfix row no-gutter">

                    <h4 class="col-xs-12 col-lg-4 pl-h5 pl-spacer--out pl-spacer--cut-v">Zoom</h4>
                    <div class="col-xs-12 col-lg-8">
                        <p>Optical 8x
                            <br>
                            ZoomPlus 16x
                            <br>
                            Digital approx. 4x
                            <br>
                            Combined approx. 32x <a><sup></sup></a><a href="#footnote-2"
                                class="product-specification-detail__link" canon-link--blue="">2</a>
                        </p>
                    </div>
                </div>

                <div
                    class="product-specification__item__details__element pl-spacer pl-spacer--in--smallest pl-spacer--cut-h clearfix row no-gutter">

                    <h4 class="col-xs-12 col-lg-4 pl-h5 pl-spacer--out pl-spacer--cut-v">Maximum f/number</h4>
                    <div class="col-xs-12 col-lg-8">
                        <p>f/3.2 – f/6.9</p>
                    </div>
                </div>

                <div
                    class="product-specification__item__details__element pl-spacer pl-spacer--in--smallest pl-spacer--cut-h clearfix row no-gutter">

                    <h4 class="col-xs-12 col-lg-4 pl-h5 pl-spacer--out pl-spacer--cut-v">Construction</h4>
                    <div class="col-xs-12 col-lg-8">
                        <p>8 elements in 7 groups (1 double-sided aspherical lens)</p>
                    </div>
                </div>

                <div
                    class="product-specification__item__details__element pl-spacer pl-spacer--in--smallest pl-spacer--cut-h clearfix row no-gutter">

                    <h4 class="col-xs-12 col-lg-4 pl-h5 pl-spacer--out pl-spacer--cut-v">Image Stabilisation</h4>
                    <div class="col-xs-12 col-lg-8">
                        <p>Electronic type (Digital IS Mode)</p>
                    </div>
                </div>


            </div>
        </div>

        <div class="product-specification__item pl-spacer pl-spacer--out--small pl-spacer--cut-h" id="focusing_4">
            <h3 class="pl-h2 pl-h2--alt">Focusing</h3>
            <div class="product-specification__item__details  pl-spacer pl-spacer--out--smaller pl-spacer--cut-h">

                <div
                    class="product-specification__item__details__element pl-spacer pl-spacer--in--smallest pl-spacer--cut-h clearfix row no-gutter">

                    <h4 class="col-xs-12 col-lg-4 pl-h5 pl-spacer--out pl-spacer--cut-v">Type</h4>
                    <div class="col-xs-12 col-lg-8">
                        <p>TTL</p>
                    </div>
                </div>

                <div
                    class="product-specification__item__details__element pl-spacer pl-spacer--in--smallest pl-spacer--cut-h clearfix row no-gutter">

                    <h4 class="col-xs-12 col-lg-4 pl-h5 pl-spacer--out pl-spacer--cut-v">AF System/ Points</h4>
                    <div class="col-xs-12 col-lg-8">
                        <p>AiAF (Face Detection / 9-point), 1-point AF (fixed to centre)</p>
                    </div>
                </div>

                <div
                    class="product-specification__item__details__element pl-spacer pl-spacer--in--smallest pl-spacer--cut-h clearfix row no-gutter">

                    <h4 class="col-xs-12 col-lg-4 pl-h5 pl-spacer--out pl-spacer--cut-v">AF Modes</h4>
                    <div class="col-xs-12 col-lg-8">
                        <p>Single, Continuous, Servo AF/AE, Tracking AF <a><sup></sup></a><a href="#footnote-3"
                                class="product-specification-detail__link" canon-link--blue="">3</a></p>
                    </div>
                </div>

                <div
                    class="product-specification__item__details__element pl-spacer pl-spacer--in--smallest pl-spacer--cut-h clearfix row no-gutter">

                    <h4 class="col-xs-12 col-lg-4 pl-h5 pl-spacer--out pl-spacer--cut-v">AF Assist Beam</h4>
                    <div class="col-xs-12 col-lg-8">
                        <p>Yes</p>
                    </div>
                </div>

                <div
                    class="product-specification__item__details__element pl-spacer pl-spacer--in--smallest pl-spacer--cut-h clearfix row no-gutter">

                    <h4 class="col-xs-12 col-lg-4 pl-h5 pl-spacer--out pl-spacer--cut-v">Closest Focusing Distance</h4>
                    <div class="col-xs-12 col-lg-8">
                        <p>1 cm (W) from front of lens in Macro</p>
                    </div>
                </div>


            </div>
        </div>
        <div class="product-specification__item pl-spacer pl-spacer--out--small pl-spacer--cut-h"
            id="exposure-control_5">
            <h3 class="pl-h2 pl-h2--alt">Exposure Control</h3>
            <div class="product-specification__item__details  pl-spacer pl-spacer--out--smaller pl-spacer--cut-h">

                <div
                    class="product-specification__item__details__element pl-spacer pl-spacer--in--smallest pl-spacer--cut-h clearfix row no-gutter">

                    <h4 class="col-xs-12 col-lg-4 pl-h5 pl-spacer--out pl-spacer--cut-v">Metering modes</h4>
                    <div class="col-xs-12 col-lg-8">
                        <p>Evaluative (linked to Face Detection AF frame), Centre-weighted average, Spot (centre)</p>
                    </div>
                </div>

                <div
                    class="product-specification__item__details__element pl-spacer pl-spacer--in--smallest pl-spacer--cut-h clearfix row no-gutter">

                    <h4 class="col-xs-12 col-lg-4 pl-h5 pl-spacer--out pl-spacer--cut-v">Exposure Compensation</h4>
                    <div class="col-xs-12 col-lg-8">
                        <p>+/- 2 EV in 1/3 stop increments
                            <br>
                            i-Contrast for automatic dynamic range correction
                        </p>
                    </div>
                </div>

                <div
                    class="product-specification__item__details__element pl-spacer pl-spacer--in--smallest pl-spacer--cut-h clearfix row no-gutter">

                    <h4 class="col-xs-12 col-lg-4 pl-h5 pl-spacer--out pl-spacer--cut-v">ISO Sensitivity</h4>
                    <div class="col-xs-12 col-lg-8">
                        <p>AUTO, 100, 200, 400, 800, 1600
                            <br>
                            AUTO ISO: 100 - 800
                        </p>
                    </div>
                </div>


            </div>
        </div>


        <div class="product-specification__item pl-spacer pl-spacer--out--small pl-spacer--cut-h" id="shutter_6">
            <h3 class="pl-h2 pl-h2--alt">Shutter</h3>
            <div class="product-specification__item__details  pl-spacer pl-spacer--out--smaller pl-spacer--cut-h">

                <div
                    class="product-specification__item__details__element pl-spacer pl-spacer--in--smallest pl-spacer--cut-h clearfix row no-gutter">

                    <h4 class="col-xs-12 col-lg-4 pl-h5 pl-spacer--out pl-spacer--cut-v">Speed</h4>
                    <div class="col-xs-12 col-lg-8">
                        <p>1 – 1/2000 s (Auto Mode)
                            <br>
                            15 – 1/2000 s (total range – varies by shooting mode)
                        </p>
                    </div>
                </div>


            </div>
        </div>


        <div class="product-specification__item pl-spacer pl-spacer--out--small pl-spacer--cut-h" id="white-balance_7">
            <h3 class="pl-h2 pl-h2--alt">White Balance</h3>
            <div class="product-specification__item__details  pl-spacer pl-spacer--out--smaller pl-spacer--cut-h">

                <div
                    class="product-specification__item__details__element pl-spacer pl-spacer--in--smallest pl-spacer--cut-h clearfix row no-gutter">

                    <h4 class="col-xs-12 col-lg-4 pl-h5 pl-spacer--out pl-spacer--cut-v">Type</h4>
                    <div class="col-xs-12 col-lg-8">
                        <p>TTL</p>
                    </div>
                </div>

                <div
                    class="product-specification__item__details__element pl-spacer pl-spacer--in--smallest pl-spacer--cut-h clearfix row no-gutter">

                    <h4 class="col-xs-12 col-lg-4 pl-h5 pl-spacer--out pl-spacer--cut-v">Settings</h4>
                    <div class="col-xs-12 col-lg-8">
                        <p>Auto (including Face Detection WB), Daylight, Cloudy, Light bulb, Fluorescent, Fluorescent H,
                            Custom</p>
                    </div>
                </div>


            </div>
        </div>

     <div class="product-specification__item pl-spacer pl-spacer--out--small pl-spacer--cut-h" id="lcd-monitor_8">
            <h3 class="pl-h2 pl-h2--alt">LCD Monitor</h3>
            <div class="product-specification__item__details  pl-spacer pl-spacer--out--smaller pl-spacer--cut-h">

                <div
                    class="product-specification__item__details__element pl-spacer pl-spacer--in--smallest pl-spacer--cut-h clearfix row no-gutter">

                    <h4 class="col-xs-12 col-lg-4 pl-h5 pl-spacer--out pl-spacer--cut-v">Monitor</h4>
                    <div class="col-xs-12 col-lg-8">
                        <p>6.8 cm (2.7") LCD (TFT), approx. 230,000 dots</p>
                    </div>
                </div>

                <div
                    class="product-specification__item__details__element pl-spacer pl-spacer--in--smallest pl-spacer--cut-h clearfix row no-gutter">

                    <h4 class="col-xs-12 col-lg-4 pl-h5 pl-spacer--out pl-spacer--cut-v">Coverage</h4>
                    <div class="col-xs-12 col-lg-8">
                        <p>Approx. 100%</p>
                    </div>
                </div>

                <div
                    class="product-specification__item__details__element pl-spacer pl-spacer--in--smallest pl-spacer--cut-h clearfix row no-gutter">

                    <h4 class="col-xs-12 col-lg-4 pl-h5 pl-spacer--out pl-spacer--cut-v">Brightness</h4>
                    <div class="col-xs-12 col-lg-8">
                        <p>Adjustable to one of five levels.
                            <br>
                            Quick-bright LCD available via holding INFO Button
                        </p>
                    </div>
                </div>


            </div>
        </div>


        <div class="product-specification__item pl-spacer pl-spacer--out--small pl-spacer--cut-h" id="flash_9">
            <h3 class="pl-h2 pl-h2--alt">Flash</h3>
            <div class="product-specification__item__details  pl-spacer pl-spacer--out--smaller pl-spacer--cut-h">

                <div
                    class="product-specification__item__details__element pl-spacer pl-spacer--in--smallest pl-spacer--cut-h clearfix row no-gutter">

                    <h4 class="col-xs-12 col-lg-4 pl-h5 pl-spacer--out pl-spacer--cut-v">Modes</h4>
                    <div class="col-xs-12 col-lg-8">
                        <p>Auto, Manual Flash On / Off, Slow Synchro</p>
                    </div>
                </div>

                <div
                    class="product-specification__item__details__element pl-spacer pl-spacer--in--smallest pl-spacer--cut-h clearfix row no-gutter">

                    <h4 class="col-xs-12 col-lg-4 pl-h5 pl-spacer--out pl-spacer--cut-v">Slow Sync Speed</h4>
                    <div class="col-xs-12 col-lg-8">
                        <p>Yes. Fastest speed 1/2000 s</p>
                    </div>
                </div>

                <div
                    class="product-specification__item__details__element pl-spacer pl-spacer--in--smallest pl-spacer--cut-h clearfix row no-gutter">

                    <h4 class="col-xs-12 col-lg-4 pl-h5 pl-spacer--out pl-spacer--cut-v">Red-Eye Reduction</h4>
                    <div class="col-xs-12 col-lg-8">
                        <p>Yes</p>
                    </div>
                </div>

                <div
                    class="product-specification__item__details__element pl-spacer pl-spacer--in--smallest pl-spacer--cut-h clearfix row no-gutter">

                    <h4 class="col-xs-12 col-lg-4 pl-h5 pl-spacer--out pl-spacer--cut-v">Flash Exposure Compensation
                    </h4>
                    <div class="col-xs-12 col-lg-8">
                        <p>Face Detection FE</p>
                    </div>
                </div>

                <div
                    class="product-specification__item__details__element pl-spacer pl-spacer--in--smallest pl-spacer--cut-h clearfix row no-gutter">

                    <h4 class="col-xs-12 col-lg-4 pl-h5 pl-spacer--out pl-spacer--cut-v">Built-in Flash Range</h4>
                    <div class="col-xs-12 col-lg-8">
                        <p>50 cm – 3.0 m (W) / 1.3 – 1.5 m (T)</p>
                    </div>
                </div>

                <div
                    class="product-specification__item__details__element pl-spacer pl-spacer--in--smallest pl-spacer--cut-h clearfix row no-gutter">

                    <h4 class="col-xs-12 col-lg-4 pl-h5 pl-spacer--out pl-spacer--cut-v">External Flash</h4>
                    <div class="col-xs-12 col-lg-8">
                        <p>Canon High Power Flash HF-DC2</p>
                    </div>
                </div>


            </div>
        </div>


        <div class="product-specification__item pl-spacer pl-spacer--out--small pl-spacer--cut-h" id="shooting_10">
            <h3 class="pl-h2 pl-h2--alt">Shooting</h3>
            <div class="product-specification__item__details  pl-spacer pl-spacer--out--smaller pl-spacer--cut-h">

                <div
                    class="product-specification__item__details__element pl-spacer pl-spacer--in--smallest pl-spacer--cut-h clearfix row no-gutter">

                    <h4 class="col-xs-12 col-lg-4 pl-h5 pl-spacer--out pl-spacer--cut-v">Modes</h4>
                    <div class="col-xs-12 col-lg-8">
                        <p>Smart Auto (32 scenes detected), P, Portrait, FaceSelf-Timer, Low Light (5.0 MP), Digital IS,
                            Fish-eye Effect, Miniature Effect, Toy Camera Effect, Monochrome, Super Vivid, Poster
                            Effect,
                            Fireworks, Long Shutter
                            <br>
                            Easy Auto activated by default
                        </p>
                    </div>
                </div>

                <div
                    class="product-specification__item__details__element pl-spacer pl-spacer--in--smallest pl-spacer--cut-h clearfix row no-gutter">

                    <h4 class="col-xs-12 col-lg-4 pl-h5 pl-spacer--out pl-spacer--cut-v">Drive modes</h4>
                    <div class="col-xs-12 col-lg-8">
                        <p>Single, Continuous, Self-Timer</p>
                    </div>
                </div>

                <div
                    class="product-specification__item__details__element pl-spacer pl-spacer--in--smallest pl-spacer--cut-h clearfix row no-gutter">

                    <h4 class="col-xs-12 col-lg-4 pl-h5 pl-spacer--out pl-spacer--cut-v">Continuous Shooting</h4>
                    <div class="col-xs-12 col-lg-8">
                        <p>Approx. 0.8 shots/s
                            <br>
                            Low Light Mode (5.0 MP): Approx. 2.2 shots/s
                            <br>
                            (all speeds are until memory card becomes full) <a><sup></sup></a><a href="#footnote-4"
                                class="product-specification-detail__link" canon-link--blue="">4</a><a>,
                                <sup></sup></a><a href="#footnote-5" class="product-specification-detail__link"
                                canon-link--blue="">5</a>
                        </p>
                    </div>
                </div>


            </div>
        </div>


        <div class="product-specification__item pl-spacer pl-spacer--out--small pl-spacer--cut-h" id="_11">
            <h3 class="pl-h2 pl-h2--alt">Recording Pixels / Compression</h3>
            <div class="product-specification__item__details  pl-spacer pl-spacer--out--smaller pl-spacer--cut-h">

                <div
                    class="product-specification__item__details__element pl-spacer pl-spacer--in--smallest pl-spacer--cut-h clearfix row no-gutter">

                    <h4 class="col-xs-12 col-lg-4 pl-h5 pl-spacer--out pl-spacer--cut-v">Image Size</h4>
                    <div class="col-xs-12 col-lg-8">
                        <p>4:3 - (L) 5152 x 3864, (M1) 3648 x 2736, (M2) 2048 x 1536, (S) 640 x 480
                            <br>
                            16:9/ W - (L) 5152 x 2896
                            <br>
                            Resize option available in playback
                        </p>
                    </div>
                </div>

                <div
                    class="product-specification__item__details__element pl-spacer pl-spacer--in--smallest pl-spacer--cut-h clearfix row no-gutter">

                    <h4 class="col-xs-12 col-lg-4 pl-h5 pl-spacer--out pl-spacer--cut-v">Compression</h4>
                    <div class="col-xs-12 col-lg-8">
                        <p>Fine</p>
                    </div>
                </div>

                <div
                    class="product-specification__item__details__element pl-spacer pl-spacer--in--smallest pl-spacer--cut-h clearfix row no-gutter">

                    <h4 class="col-xs-12 col-lg-4 pl-h5 pl-spacer--out pl-spacer--cut-v">Movies</h4>
                    <div class="col-xs-12 col-lg-8">
                        <p>(HD) 1280 x 720, 25 fps, (L) 640 x 480, 29.97 fps</p>
                    </div>
                </div>

                <div
                    class="product-specification__item__details__element pl-spacer pl-spacer--in--smallest pl-spacer--cut-h clearfix row no-gutter">

                    <h4 class="col-xs-12 col-lg-4 pl-h5 pl-spacer--out pl-spacer--cut-v">Movie Length</h4>
                    <div class="col-xs-12 col-lg-8">
                        <p>
                        </p>
                        <p>(HD) Up to 4 GB or 29 min 59 s <a><sup></sup></a><a href="#footnote-6"
                                class="product-specification-detail__link" canon-link--blue="">6</a></p>
                        <p>(L) up to 4 GB or 1 hour <a><sup></sup></a><a href="#footnote-7"
                                class="product-specification-detail__link" canon-link--blue="">7</a></p>
                        <p></p>
                    </div>
                </div>


            </div>
        </div>

        <div class="product-specification__item pl-spacer pl-spacer--out--small pl-spacer--cut-h" id="_12">
            <h3 class="pl-h2 pl-h2--alt">File Types</h3>
            <div class="product-specification__item__details  pl-spacer pl-spacer--out--smaller pl-spacer--cut-h">

                <div
                    class="product-specification__item__details__element pl-spacer pl-spacer--in--smallest pl-spacer--cut-h clearfix row no-gutter">

                    <h4 class="col-xs-12 col-lg-4 pl-h5 pl-spacer--out pl-spacer--cut-v">Still Image Type</h4>
                    <div class="col-xs-12 col-lg-8">
                        <p>JPEG compression, (Exif 2.3 [Exif Print] compliant) / Design rule for Camera File system,
                            Digital
                            Print Order Format [DPOF] Version 1.1 compliant</p>
                    </div>
                </div>

                <div
                    class="product-specification__item__details__element pl-spacer pl-spacer--in--smallest pl-spacer--cut-h clearfix row no-gutter">

                    <h4 class="col-xs-12 col-lg-4 pl-h5 pl-spacer--out pl-spacer--cut-v">Movies</h4>
                    <div class="col-xs-12 col-lg-8">
                        <p>MOV [Video: H.264, Audio: MPEG4 AAC-LC (monaural)]</p>
                    </div>
                </div>


            </div>
        </div>

        <div class="product-specification__item pl-spacer pl-spacer--out--small pl-spacer--cut-h"
            id="other-features_13">
            <h3 class="pl-h2 pl-h2--alt">Other Features</h3>
            <div class="product-specification__item__details  pl-spacer pl-spacer--out--smaller pl-spacer--cut-h">

                <div
                    class="product-specification__item__details__element pl-spacer pl-spacer--in--smallest pl-spacer--cut-h clearfix row no-gutter">

                    <h4 class="col-xs-12 col-lg-4 pl-h5 pl-spacer--out pl-spacer--cut-v">Red-Eye Correction</h4>
                    <div class="col-xs-12 col-lg-8">
                        <p>Yes</p>
                    </div>
                </div>

                <div
                    class="product-specification__item__details__element pl-spacer pl-spacer--in--smallest pl-spacer--cut-h clearfix row no-gutter">

                    <h4 class="col-xs-12 col-lg-4 pl-h5 pl-spacer--out pl-spacer--cut-v">Intelligent Orientation Sensor
                    </h4>
                    <div class="col-xs-12 col-lg-8">
                        <p>Yes, with Auto Rotate</p>
                    </div>
                </div>

                <div
                    class="product-specification__item__details__element pl-spacer pl-spacer--in--smallest pl-spacer--cut-h clearfix row no-gutter">

                    <h4 class="col-xs-12 col-lg-4 pl-h5 pl-spacer--out pl-spacer--cut-v">Histogram</h4>
                    <div class="col-xs-12 col-lg-8">
                        <p>Yes, during playback</p>
                    </div>
                </div>

                <div
                    class="product-specification__item__details__element pl-spacer pl-spacer--in--smallest pl-spacer--cut-h clearfix row no-gutter">

                    <h4 class="col-xs-12 col-lg-4 pl-h5 pl-spacer--out pl-spacer--cut-v">Playback zoom</h4>
                    <div class="col-xs-12 col-lg-8">
                        <p>Approx. 2x – 10x</p>
                    </div>
                </div>

                <div
                    class="product-specification__item__details__element pl-spacer pl-spacer--in--smallest pl-spacer--cut-h clearfix row no-gutter">

                    <h4 class="col-xs-12 col-lg-4 pl-h5 pl-spacer--out pl-spacer--cut-v">Self Timer</h4>
                    <div class="col-xs-12 col-lg-8">
                        <p>Approx. 2, 10 s or Custom</p>
                    </div>
                </div>

                <div
                    class="product-specification__item__details__element pl-spacer pl-spacer--in--smallest pl-spacer--cut-h clearfix row no-gutter">

                    <h4 class="col-xs-12 col-lg-4 pl-h5 pl-spacer--out pl-spacer--cut-v">Menu Languages</h4>
                    <div class="col-xs-12 col-lg-8">
                        <p>English, German, French, Dutch, Danish, Finnish, Italian, Greek, Norwegian, Portuguese,
                            Russian,
                            Swedish, Spanish, Ukrainian, Polish, Czech, Hungarian, Turkish, Simplified Chinese, Chinese
                            (traditional), Japanese, Korean, Thai, Arabic, Romanian, Farsi, Hindi, Malay, Indonesian,
                            Vietnamese, Hebrew</p>
                    </div>
                </div>


            </div>
        </div>



        <div class="product-specification__item pl-spacer pl-spacer--out--small pl-spacer--cut-h" id="interface_14">
            <h3 class="pl-h2 pl-h2--alt">Interface</h3>
            <div class="product-specification__item__details  pl-spacer pl-spacer--out--smaller pl-spacer--cut-h">

                <div
                    class="product-specification__item__details__element pl-spacer pl-spacer--in--smallest pl-spacer--cut-h clearfix row no-gutter">

                    <h4 class="col-xs-12 col-lg-4 pl-h5 pl-spacer--out pl-spacer--cut-v">Computer</h4>
                    <div class="col-xs-12 col-lg-8">
                        <p>Hi-Speed USB composite connector (Mini-B compatible)</p>
                    </div>
                </div>

                <div
                    class="product-specification__item__details__element pl-spacer pl-spacer--in--smallest pl-spacer--cut-h clearfix row no-gutter">

                    <h4 class="col-xs-12 col-lg-4 pl-h5 pl-spacer--out pl-spacer--cut-v">Other</h4>
                    <div class="col-xs-12 col-lg-8">
                        <p>A/V output, composite connector (PAL/NTSC)</p>
                    </div>
                </div>


            </div>
        </div>


        <div class="product-specification__item pl-spacer pl-spacer--out--small pl-spacer--cut-h" id="memory-card_15">
            <h3 class="pl-h2 pl-h2--alt">Memory Card</h3>
            <div class="product-specification__item__details  pl-spacer pl-spacer--out--smaller pl-spacer--cut-h">

                <div
                    class="product-specification__item__details__element pl-spacer pl-spacer--in--smallest pl-spacer--cut-h clearfix row no-gutter">

                    <h4 class="col-xs-12 col-lg-4 pl-h5 pl-spacer--out pl-spacer--cut-v">Type</h4>
                    <div class="col-xs-12 col-lg-8">
                        <p>SD, SDHC, SDXC</p>
                    </div>
                </div>


            </div>
        </div>

        <div class="product-specification__item pl-spacer pl-spacer--out--small pl-spacer--cut-h"
            id="supported-operating-system_16">
            <h3 class="pl-h2 pl-h2--alt">Supported Operating System</h3>
            <div class="product-specification__item__details  pl-spacer pl-spacer--out--smaller pl-spacer--cut-h">

                <div
                    class="product-specification__item__details__element pl-spacer pl-spacer--in--smallest pl-spacer--cut-h clearfix row no-gutter">

                    <h4 class="col-xs-12 col-lg-4 pl-h5 pl-spacer--out pl-spacer--cut-v">PC &amp; Macintosh</h4>
                    <div class="col-xs-12 col-lg-8">
                        <p>Windows 10 / 8.1 / 8 / 7 SP1 <a><sup></sup></a><a href="#footnote-8"
                                class="product-specification-detail__link" canon-link--blue="">8</a>
                            <br>
                            Mac OS X 10.9 / 10.10 / 10.11 / 10.12
                        </p>
                    </div>
                </div>


            </div>
        </div>
        <div class="product-specification__item pl-spacer pl-spacer--out--small pl-spacer--cut-h" id="software_17">
            <h3 class="pl-h2 pl-h2--alt">Software</h3>
            <div class="product-specification__item__details  pl-spacer pl-spacer--out--smaller pl-spacer--cut-h">

                <div
                    class="product-specification__item__details__element pl-spacer pl-spacer--in--smallest pl-spacer--cut-h clearfix row no-gutter">

                    <h4 class="col-xs-12 col-lg-4 pl-h5 pl-spacer--out pl-spacer--cut-v">Other</h4>
                    <div class="col-xs-12 col-lg-8">
                        <p>CameraWindow DC</p>
                    </div>
                </div>


            </div>
        </div>

        <div class="product-specification__item pl-spacer pl-spacer--out--small pl-spacer--cut-h" id="power-source_18">
            <h3 class="pl-h2 pl-h2--alt">Power Source</h3>
            <div class="product-specification__item__details  pl-spacer pl-spacer--out--smaller pl-spacer--cut-h">

                <div
                    class="product-specification__item__details__element pl-spacer pl-spacer--in--smallest pl-spacer--cut-h clearfix row no-gutter">

                    <h4 class="col-xs-12 col-lg-4 pl-h5 pl-spacer--out pl-spacer--cut-v">Batteries</h4>
                    <div class="col-xs-12 col-lg-8">
                        <p>Rechargeable Li-ion Battery NB-11L / NB-11LH (NB-11L battery and charger supplied)</p>
                    </div>
                </div>

                <div
                    class="product-specification__item__details__element pl-spacer pl-spacer--in--smallest pl-spacer--cut-h clearfix row no-gutter">

                    <h4 class="col-xs-12 col-lg-4 pl-h5 pl-spacer--out pl-spacer--cut-v">Battery life</h4>
                    <div class="col-xs-12 col-lg-8">
                        <p>Approx. 210 shots
                            <br>
                            Eco Mode: Approx. 285 shots
                            <br>
                            Playback Mode: Approx. 240 min
                        </p>
                    </div>
                </div>


            </div>
        </div>
        <div class="product-specification__item pl-spacer pl-spacer--out--small pl-spacer--cut-h" id="accessories_19">
            <h3 class="pl-h2 pl-h2--alt">Accessories</h3>
            <div class="product-specification__item__details  pl-spacer pl-spacer--out--smaller pl-spacer--cut-h">

                <div
                    class="product-specification__item__details__element pl-spacer pl-spacer--in--smallest pl-spacer--cut-h clearfix row no-gutter">

                    <h4 class="col-xs-12 col-lg-4 pl-h5 pl-spacer--out pl-spacer--cut-v">Cases / Straps</h4>
                    <div class="col-xs-12 col-lg-8">
                        <p>Soft Case DCC-1320
                            <br>
                            Soft Case DCC-1350
                            <br>
                            Soft Case DCC-1370
                        </p>
                    </div>
                </div>

                <div
                    class="product-specification__item__details__element pl-spacer pl-spacer--in--smallest pl-spacer--cut-h clearfix row no-gutter">

                    <h4 class="col-xs-12 col-lg-4 pl-h5 pl-spacer--out pl-spacer--cut-v">Flash</h4>
                    <div class="col-xs-12 col-lg-8">
                        <p>Canon High Power Flash HF-DC2</p>
                    </div>
                </div>

                <div
                    class="product-specification__item__details__element pl-spacer pl-spacer--in--smallest pl-spacer--cut-h clearfix row no-gutter">

                    <h4 class="col-xs-12 col-lg-4 pl-h5 pl-spacer--out pl-spacer--cut-v">Power Supply &amp; Battery
                        Chargers
                    </h4>
                    <div class="col-xs-12 col-lg-8">
                        <p>Battery Charger CB-2LFE / CB-2LDE
                            <br>
                            Rechargeable Li-ion Battery NB-11L/ NB-11LH
                        </p>
                    </div>
                </div>

                <div
                    class="product-specification__item__details__element pl-spacer pl-spacer--in--smallest pl-spacer--cut-h clearfix row no-gutter">

                    <h4 class="col-xs-12 col-lg-4 pl-h5 pl-spacer--out pl-spacer--cut-v">Other</h4>
                    <div class="col-xs-12 col-lg-8">
                        <p>Canon AV Cable AVC-DC400
                            <br>
                            Interface cable IFC-400PCU
                        </p>
                    </div>
                </div>


            </div>
        </div>

    </div>`,
  },

  {
    id: 23,
    img: "./assets/images/Compact/PowerShot SX540 HS.jpg",
    name: "POWERSHOT SX540 HS",
    price: 199,
    cart: false,
    quantity: 1,
    href: "/kobolg/DSLR/PowerShot SX540 HS.html",
    total: 0,
    type: "compact",
  },

  {
    id: 24,
    img: "./assets/images/Compact/PowerShot-SX430.jpg",
    name: "POWERSHOT SX-430 IS BK",
    price: 299,
    cart: false,
    quantity: 1,
    total: 0,
    type: "compact",
  },

  {
    id: 25,
    img: "./assets/images/Compact/PowerShot SX70 HS.jpg",
    name: "PowerShot SX70 HS",
    price: 499,
    cart: false,
    quantity: 1,
    total: 0,
    type: "compact",
  },

  {
    id: 26,
    img: "./assets/images/Compact/canon_powershot_g7_x_mark_iii.jpg",
    name: "POWERSHOT G7X MK-III",
    price: 299,
    cart: false,
    quantity: 1,
    total: 0,
    type: "compact",
  },
];

const db = getDatabase();

function buy() {
  var productsFirebase = [];
  for (let index = 0; index < products.length; index++) {
    if (products[index].cart) {
      var product = {
        name: products[index].name,
        price: products[index].price,
        quantity: products[index].quantity,
        total: products[index].total,
      };
      productsFirebase.push(product);
    }
  }
  set(ref(db, "order/"), {
    total: total(),
    products: productsFirebase,
  });
  Swal.fire({
    type: "success",
    title: "Success",
    text: "Operation Completed!",
  });
  clean();
}

function total() {
  let total = 0;
  for (let index = 0; index < products.length; index++) {
    if (products[index].cart) {
      total += products[index].total;
    }
  }
  return total;
}

var con = 0;

var con2 = [];
//POSITION AT TABLE

function clean() {
  for (let index = 0; index < products.length; index++) {
    products[index].total = 0;
    products[index].quantity = 1;
    products[index].cart = false;
    con2 = [];
    updateCart();
  }
}

function add(id) {
  for (let index = 0; index < products.length; index++) {
    if (products[index].id != id || products[index].cart == true) {
    } else {
      products[index].cart = true;
      con2.push(products[index]);
      localStorage.setItem("cartItems", JSON.stringify(con2));
      document.getElementById("cart_Items").innerHTML += `
            <td class="product-btn btn-primary">
                                                <a href="#" class="remove" aria-label="Remove this item"
                                                    data-product_id="27" data-product_sku="885B712">×</a>
                                            </td>
                                            <td class="product-thumbnail">
                                                <a href="#"><img src= "${products[index].img}"
                                                        class="attachment-kobolg_thumbnail size-kobolg_thumbnail"
                                                        alt="img" width="600" height="778"></a>
                                            </td>
                                            <td class="product-name" data-title="Product">
                                                <a href="#">${products[index].name}</a>
                                            </td>
                                            <td class="product-price" data-title="Price">
                                                <span class="kobolg-Price-amount amount"><span
                                                        class="kobolg-Price-currencySymbol">$</span>150.00</span>
                                            </td>
                                            <td class="product-quantity" data-title="Quantity">
                                                <div class="quantity">
                                                    <span class="qty-label">Quantiy:</span>
                                                    <div class="control">
                                                        <a class="btn-number qtyminus quantity-minus" href="#">-</a>
                                                        <input type="text" value="1" title="Qty"
                                                            class="input-qty input-text qty text">
                                                        <a class="btn-number qtyplus quantity-plus" href="#">+</a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="product-subtotal" data-title="Total">
                                                <span class="kobolg-Price-amount amount"><span
                                                        class="kobolg-Price-currencySymbol">$</span>150.00</span>
                                            </td>`;
      con++;
      var total = (products[index].total =
        products[index].price * products[index].quantity);
      total;
      localStorage.setItem("total", JSON.stringify(total));
    }
  }

  document.getElementById("total").innerHTML = `
   <tr>
   <th scope="row"></th>
   <td></td>
   <td></td>
   <td></td>
   <td>
       <h4>Total:</h4>
   </td>
   <td>$ ${total()}.00</td>
    </tr>
    <tr>
    <th scope="row"></th>
    <td></td>
    <td></td>
    <td></td>
    <td>
 
    </td>
    <td>
      <button onclick="buy()"class="btn btn-success">Buy</button>
    </td>
     </tr>
   `;
}

window.add = add;
window.reduceAmount = reduceAmount;
window.addAmount = addAmount;
window.buy = buy;

function updateCart() {
  con = 0;
  var totalTable = 0;
  document.getElementById("cartItems").innerHTML = "";
  for (let index = 0; index < con2.length; index++) {
    var position = con2[index];
    for (let index3 = 0; index3 < products.length; index3++) {
      if (position == products[index3].id) {
        document.getElementById("cartItems").innerHTML += `
            <tr>
           <th scope="row">${con + 1}</th>
       
           <td><img style="width: 5rem;" src="${products[index3].img}" ></td>
           <td>${products[index3].name}</td>
           <td>
           <button class="btn btn-primary" onclick="reduceAmount(${
             products[index3].id
           })">-</button>
           <input style="width: 2rem;" id="input${
             products[index3].id
           }" value="${products[index3].quantity}" disabled>
           <button class="btn btn-primary" onclick="addAmount(${
             products[index3].id
           })" >+</button>
           </td>
           <td>$ ${products[index3].price * products[index3].quantity}.00</td>
            </tr>
           `;
        products[index3].total =
          products[index3].price * products[index3].quantity;
      } else {
      }
    }

    con = con + 1;
  }
  if (total() == 0) {
    document.getElementById("total").innerHTML = "";
  } else {
    document.getElementById("total").innerHTML = `
    <tr>
    <th scope="row"></th>
    <td></td>
    <td></td>
    <td></td>
    <td>
        <h4>Total:</h4>
    </td>
    <td>$ ${total(totalTable)}.00</td>
     </tr>
     <tr>
     <th scope="row"></th>
     <td></td>
     <td></td>
     <td></td>
     <td>

     </td>
     <td>
       <button onclick="buy()" class="btn btn-success">Buy</button>
     </td>
      </tr>
    `;
  }
}

function reduceAmount(id) {
  for (let index = 0; index < products.length; index++) {
    if (products[index].id == id) {
      if (products[index].quantity > 1) {
        products[index].quantity = products[index].quantity - 1;
        updateCart();
      } else {
      }
    } else {
    }
  }
}

function addAmount(id) {
  for (let index = 0; index < products.length; index++) {
    if (products[index].id == id) {
      if (products[index].quantity > 0) {
        products[index].quantity = products[index].quantity + 1;
        updateCart();
      } else {
      }
    } else {
    }
  }
}

// for (let index = 0; index < products.length; index++) {
//   document.getElementById("Compactul").innerHTML += `
//                                     <li  class="product-item wow fadeInUp product-item rows-space-30 col-bg-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-ts-6 style-01 post-24 product type-product status-publish has-post-thumbnail product_cat-chair product_cat-table product_cat-new-arrivals product_tag-light product_tag-hat product_tag-sock first instock featured shipping-taxable purchasable product-type-variable has-default-attributes"
//                                     id="${products[index].id}"
//                                     data-wow-duration="1s" data-wow-delay="0ms" data-wow="fadeInUp">
//                                 <div class="product-inner tooltip-left" >
//                                     <div class="product-thumb">
                                            
//                                             <a href="./single-product.html">


//                                             <img class="img-responsive" src="${products[index].img}"
//                                                 width="600" height="778">
//                                         </a>
//                                     </div>
//                                     <div class="product-info equal-elem">
//                                         <h3 class="product-name product_title">
//                                             <a href="#">${products[index].name}</a>
//                                         </h3>


//                                         <span class="price">
//                                             <span class="kobolg-Price-amount amount">
//                                                 <span>
//                                                     <span class="kobolg-Price-amount amount">
//                                                         ${products[index].price}
//                                                     </span>
//                                                     <span class="kobolg-Price-currencySymbol" style="color: rgb(114, 114, 114);">jd</span>
//                                                 </span>
//                                             </span>
//                                         </span>
//                                     </div>
//                                 </div>
//                             </li>`;
// }

for (let index = 0; index < products.length; index++) {
  document.getElementById(products[index].id).onclick = () => {
    var name = products[index].name;
    var price = products[index].price;
    var quentity = products[index].quantity;
    var id = products[index].id;
    var cart_status = products[index].cart;
    var total_items_price = products[index].total;
    var img = products[index].img;
    var info = products[index].info;
    localStorage.setItem("item-name", name);
    localStorage.setItem("item-price", price);
    localStorage.setItem("item-total", total_items_price);
    localStorage.setItem("item-quentity", quentity);
    localStorage.setItem("item-cart_status", cart_status);
    localStorage.setItem("item-id", id);
    localStorage.setItem("item-img", img);
    localStorage.setItem("item-info", info);
  };
}

const searchField = document.querySelector("#searchinput");
const searchResultsContainer = document.querySelector("#  ");

searchField.addEventListener("input", (e) => {
  // if input field is empty, clear the search results
  if (e.target.value === "") {
    searchResultsContainer.innerHTML = "";
    return;
  }

  // filter the products array
  const searchResults = products.filter((meal) => {
    return meal.name.toLowerCase().includes(e.target.value.toLowerCase());
  });

  // before displaying the search results, clear the search results div
  searchResultsContainer.innerHTML = "";
})
