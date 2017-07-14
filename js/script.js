var fs = require('fs');
var Prism = require('prismjs');
const {dialog} = require('electron').remote;
var cheerio = require('cheerio');
var cleaner = require('clean-html')

function drop(sel) {
  console.log(sel.value);
  var s = sel.parentNode;
  console.log(parent);
  switch (sel.value) {
    case 'full':
      console.log(sel);
      s.querySelector('div').innerHTML = full;
      break;
    case 'center':
      console.log(sel);
      s.querySelector('div').innerHTML = center;
      break;
    case 'left':
      console.log(sel);
      s.querySelector('div').innerHTML = left;
      break;
    case 'right':
      console.log(sel);
      s.querySelector('div').innerHTML = right;
      break;
    case 'two':
      console.log(sel);
      s.querySelector('div').innerHTML = two;
      break;
    case 'three':
      console.log(sel);
      s.querySelector('div').innerHTML = three;
      break;
    default:
      s.querySelector('div').innerHTML = "";
  }
}
var button = document.querySelector(".button");
button.addEventListener("click", function() {
  document.querySelector('.container').insertAdjacentHTML('beforeend', dropdown);
  // $(".container").append(dropdown);
});

document.querySelector('.container').addEventListener('click', function(e){
  if(e.target.matches('.remove')){
    console.log("clicked");
    e.target.parentNode.remove();
  }
});

// $('.container').on("click", ".remove", function(e) {
//   e.preventDefault();
//   $(this).parent('div').remove();
// });

var dropdown = `
  <div class="selection">
    <select onchange="drop(this)">
      <option value="general" selected>Please Select</option>
      <option value="full">Full Width</option>
      <option value="center">Center</option>
      <option value="left">Left</option>
      <option value="right">Right</option>
      <option value="two">Two Column</option>
      <option value="three">Three Column</option>
    </select>
    <a href='#' class='remove'>Remove</a>
    <div>
    </div>
  </div>
`;

var full = `
      <div class="inline">
        <div>
          <label>URL</label><br>
          <input type="text" class="url"><br>
        </div>
        <div>
          <label>URL2</label><br>
          <input type="text" class="url2"><br>
        </div>
      </div>
      <label>Image</label><br>
      <span>../image/upload/q_70/</span><input type="text" class="image"><br>
      <label>Mobile Image</label><br>
      <span>../image/upload/q_70/</span><input type="text" class="mobile"><br>
      <div id="radio">
        <label>Text vertical</label><br>
        <input type="radio" name="vertical" value="banner_content"><p>center</p>
        <input type="radio" name="vertical" value="title-below"><p>below</p><br>
      </div>
      <div id="radio">
        <label>Text horizontal</label><br>
        <input type="radio" name="radio" value="center" checked><p>center</p>
        <input type="radio" name="radio" value="left"><p>left</p>
        <input type="radio" name="radio" value="center"><p>right</p><br>
      </div>
      <label>Title</label><br>
      <input type="text" class="title"><br>
      <label>Subtitle</label><br>
      <input type="text" class="subtitle"><br>
      <div class="inline">
        <div>
          <label>CTA</label><br>
          <input type="text" class="cta"><br>
        </div>
        <div>
          <label>CTA 2</label><br>
          <input type="text" class="cta2"><br>
        </div>
      </div>
  `;

var center = `
      <div class="inline">
        <div>
          <label>URL</label><br>
          <input type="text" class="url"><br>
        </div>
        <div>
          <label>URL2</label><br>
          <input type="text" class="url2"><br>
        </div>
      </div>
      <label>Image</label><br>
      <span>../image/upload/q_70/</span><input type="text" class="image"><br>
      <label>Mobile Image</label><br>
      <span>../image/upload/q_70/</span><input type="text" class="mobile"><br>
      <div id="radio">
        <label>Text vertical</label><br>
        <input type="radio" name="vertical" value="banner_content"><p>center</p>
        <input type="radio" name="vertical" value="title-below"><p>below</p><br>
      </div>
      <div id="radio">
        <label>Text horizontal</label><br>
        <input type="radio" name="radio" value="center" checked><p>center</p>
        <input type="radio" name="radio" value="left"><p>left</p>
        <input type="radio" name="radio" value="center"><p>right</p><br>
      </div>
      <label>Title</label><br>
      <input type="text" class="title"><br>
      <label>Subtitle</label><br>
      <input type="text" class="subtitle"><br>
      <div class="inline">
        <div>
          <label>CTA</label><br>
          <input type="text" class="cta"><br>
        </div>
        <div>
          <label>CTA 2</label><br>
          <input type="text" class="cta2"><br>
        </div>
      </div>
    `;

var left = `
    <label>URL</label><br>
    <input type="text" class="url"><br>
    <label>Image</label><br>
    <span>../image/upload/q_70/</span><input type="text" class="image"><br>
    <label>Title</label><br>
    <input type="text" class="title"><br>
    <label>Subtitle</label><br>
    <input type="text" class="subtitle"><br>
    <label>CTA</label><br>
    <input type="text" class="cta"><br>
    <label>URL2</label><br>
    <input type="text" class="url2"><br>
    <label>CTA 2</label><br>
    <input type="text" class="cta2"><br>
`;

var right = `
    <label>URL</label><br>
    <input type="text" class="url"><br>
    <label>Image</label><br>
    <span>../image/upload/q_70/</span><input type="text" class="image"><br>
    <label>Title</label><br>
    <input type="text" class="title"><br>
    <label>Subtitle</label><br>
    <input type="text" class="subtitle"><br>
    <label>CTA</label><br>
    <input type="text" class="cta"><br>
    <label>URL2</label><br>
    <input type="text" class="url2"><br>
    <label>CTA 2</label><br>
    <input type="text" class="cta2"><br>
`;

var two = `
  <p>First column</p>
      <label>URL</label>
      <input type="text" class="url"><br>
      <label>Image https://media.missguided.co.uk/image/upload/q_70/</label>
      <input type="text" class="image"><br>
      <label>Mobile Image</label>
      <input type="text" class="mobile"><br>
      <label>Title</label>
      <input type="text" class="title"><br>
      <label>Subtitle</label>
      <input type="text" class="subtitle"><br>
      <label>CTA</label>
      <input type="text" class="cta"><br>
      <label>URL2</label>
      <input type="text" class="url2"><br>
      <label>CTA 2</label>
      <input type="text" class="cta2"><br>
    <p>Second column</p>
      <label>URL</label>
      <input type="text" class="url3"><br>
      <label>Image https://media.missguided.co.uk/image/upload/q_70/</label>
      <input type="text" class="image2"><br>
      <label>Title</label>
      <input type="text" class="title2"><br>
      <label>Subtitle</label>
      <input type="text" class="subtitle2"><br>
      <label>CTA</label>
      <input type="text" class="cta3"><br>
      <label>URL2</label>
      <input type="text" class="url4"><br>
      <label>CTA 2</label>
      <input type="text" class="cta4"><br>
`;

var three = `
  <p>First column</p>
      <label>URL</label>
      <input type="text" class="url"><br>
      <label>Image https://media.missguided.co.uk/image/upload/q_70/</label>
      <input type="text" class="image"><br>
      <label>Mobile Image</label>
      <input type="text" class="mobile"><br>
      <label>Title</label>
      <input type="text" class="title"><br>
      <label>Subtitle</label>
      <input type="text" class="subtitle"><br>
      <label>CTA</label>
      <input type="text" class="cta"><br>
    <p>Second column</p>
      <label>URL</label>
      <input type="text" class="url2"><br>
      <label>Video</label>
      <input type="text" class="vid"><br>
      <label>Title</label>
      <input type="text" class="title2"><br>
      <label>Subtitle</label>
      <input type="text" class="subtitle2"><br>
      <label>CTA</label>
      <input type="text" class="cta2"><br>
    <p>Third column</p>
      <label>URL</label>
      <input type="text" class="url3"><br>
      <label>Image https://media.missguided.co.uk/image/upload/q_70/</label>
      <input type="text" class="image3"><br>
      <label>Title</label>
      <input type="text" class="title3"><br>
      <label>Subtitle</label>
      <input type="text" class="subtitle3"><br>
      <label>CTA</label>
      <input type="text" class="cta3"><br>
`;

var o = {
  "items": []
};

document.querySelector('#preview').addEventListener('click', function() {

  o = {
    "items": []
  };

 // create an object with key items to hold array

  var elements = document.querySelectorAll('.selection');
  Array.prototype.forEach.call(elements, function(el) {
    // loop in to the input's wrapper
    // console.log(elements);
    var obj = {};

    var content = el.querySelectorAll('input[type="text"]');
    content.forEach(function(el) {
      obj["" + el.className] = "" + el.value;
    });

    var radio = el.querySelectorAll('input[type="radio"]');
    console.log(radio);
    radio.forEach(function(x) {
      if(x.name == 'radio' && x.checked === true){
        console.log(x);
        obj["radio"] = "" + x.value;
      }
      if(x.name == "vertical" && x.checked === true){
        console.log(x);
        obj["vertical"] = "" + x.value;
        if(x.value == "banner_content"){
          obj["color"] = "white";
        }
      }
    });

    console.log(obj);
    o.items.push(obj); // push in the "o" object created
    fs.writeFile('output.json', JSON.stringify(o, null, 2), function(err, data) { //write the new JSON to the file
      if (err) {
        console.log(error);
      }
      console.log("fucking mint mate");
    });
  });

  // $('#console').text(JSON.stringify(o)); // strigify to show
    fs.writeFile('output.html', '', function(){console.log('done');});

    var inputs = document.querySelectorAll('select');
    Array.prototype.forEach.call(inputs, function(el, i) {
      // console.log(el.options[el.selectedIndex].value, i);

    var f = `
<div class="row fullwidth" id="row${i+1}">
  <a href="${o.items[i].url}" class="tracking">
    <picture>
      <!-- desktop -->
      <source media="(min-width: 768px)" srcset="https://media.missguided.co.uk/image/upload/c_scale,w_768,q_70/${o.items[i].url} 768w, https://media.missguided.co.uk/image/upload/c_scale,w_967,q_70/${o.items[i].image} 967w, https://media.missguided.co.uk/image/upload/c_scale,w_1147,q_70/${o.items[i].image} 1147w, https://media.missguided.co.uk/image/upload/c_scale,w_1294,q_70/${o.items[i].image} 1294w, https://media.missguided.co.uk/image/upload/c_scale,w_1453,q_70/${o.items[i].image} 1453w, https://media.missguided.co.uk/image/upload/c_scale,w_1591,q_70/${o.items[i].image} 1591w, https://media.missguided.co.uk/image/upload/c_scale,w_1718,q_70/${o.items[i].image} 1718w, https://media.missguided.co.uk/image/upload/c_scale,w_1856,q_70/${o.items[i].image} 1856w, https://media.missguided.co.uk/image/upload/c_scale,w_1919,q_70/${o.items[i].image} 1919w, https://media.missguided.co.uk/image/upload/c_scale,w_1920,q_70/${o.items[i].image} 1920w">
      <!-- mobile -->
      <source media="(max-width: 767px)"  srcset="https://media.missguided.co.uk/image/upload/c_fill,c_scale,w_320/${o.items[i].mobile} 320w, https://media.missguided.co.uk/image/upload/c_fill,c_scale,w_375,dpr_1/${o.items[i].mobile} 375w, https://media.missguided.co.uk/image/upload/c_fill,c_scale,w_414,dpr_1/${o.items[i].mobile} 414w"
      src="https://media.missguided.co.uk/image/upload/c_fill,c_scale,w_768,dpr_1/${o.items[i].mobile}" sizes="100vw">
      <img src="https://media.missguided.co.uk/image/upload/c_scale,w_1920,q_70/${o.items[i].image}" alt="backup">
    </picture>
    <div class="${o.items[i].vertical} ${o.items[i].radio}">
      <h2 class="title1 white">${o.items[i].title}</h2>
      <h4 class="subtitle1 white">${o.items[i].subtitle}</h4>
      <button class="button">${o.items[i].cta}</button>
    </div>
  </a>
</div>
    `;

    var c= `
<div class="row" id="row${i+1}">
  <a href="${o.items[i].url}" class="tracking">
    <picture>
      <!-- desktop -->
      <source media="(min-width: 768px)" srcset="https://media.missguided.co.uk/image/upload/c_scale,w_768,q_70/${o.items[i].url} 768w, https://media.missguided.co.uk/image/upload/c_scale,w_967,q_70/${o.items[i].image} 967w, https://media.missguided.co.uk/image/upload/c_scale,w_1147,q_70/${o.items[i].image} 1147w, https://media.missguided.co.uk/image/upload/c_scale,w_1294,q_70/${o.items[i].image} 1294w, https://media.missguided.co.uk/image/upload/c_scale,w_1453,q_70/${o.items[i].image} 1453w, https://media.missguided.co.uk/image/upload/c_scale,w_1591,q_70/${o.items[i].image} 1591w, https://media.missguided.co.uk/image/upload/c_scale,w_1718,q_70/${o.items[i].image} 1718w, https://media.missguided.co.uk/image/upload/c_scale,w_1856,q_70/${o.items[i].image} 1856w, https://media.missguided.co.uk/image/upload/c_scale,w_1919,q_70/${o.items[i].image} 1919w, https://media.missguided.co.uk/image/upload/c_scale,w_1920,q_70/${o.items[i].image} 1920w">
      <!-- mobile -->
      <source media="(max-width: 767px)"  srcset="https://media.missguided.co.uk/image/upload/c_fill,c_scale,w_320/${o.items[i].mobile} 320w, https://media.missguided.co.uk/image/upload/c_fill,c_scale,w_375,dpr_1/${o.items[i].mobile} 375w, https://media.missguided.co.uk/image/upload/c_fill,c_scale,w_414,dpr_1/${o.items[i].mobile} 414w"
      src="https://media.missguided.co.uk/image/upload/c_fill,c_scale,w_768,dpr_1/${o.items[i].mobile}" sizes="100vw">
      <img src="https://media.missguided.co.uk/image/upload/c_scale,w_1920,q_70/${o.items[i].image}" alt="backup">
    </picture>
    <div class="${o.items[i].vertical} ${o.items[i].radio}">
      <h2 class="title1 ${o.items[i].color}">${o.items[i].title}</h2>
      <h4 class="subtitle1 ${o.items[i].color}">${o.items[i].subtitle}</h4>
      <div class="more-buttons">
        <button class="button">${o.items[i].cta}</button>
        <a href = "${o.items[i].url2}">
          <button class="button">${o.items[i].cta2}</button>
        </a>
      </div>
    </div>
  </a>
</div>
    `;

    var l= `
<div class="row fullwidth" id="row${i+1}">
  <a href="${o.items[i].url}" class="tracking">
    <div class="feature-row">
      <div class="imgContainer left">
        <img src="https://media.missguided.co.uk/image/upload/q_70/${o.items[i].image}">
      </div>
      <div class="title-right">
        <h2 class="title2">${o.items[i].title}</h2>
        <h4 class="subtitle2">${o.items[i].subtitle}</h4>
        <div class="more-buttons">
          <button class="button">${o.items[i].cta}</button>
          <a href = "${o.items[i].url2}">
            <button class="button">${o.items[i].cta2}</button>
          </a>
        </div>
      </div>
    </div>
  </a>
</div>
    `;

    var r= `
<div class="row fullwidth" id="row${i+1}">
  <a href="${o.items[i].url}" class="tracking">
    <div class="feature-row">
      <div class="imgContainer right">
        <img src="https://media.missguided.co.uk/image/upload/q_70/${o.items[i].image}">
      </div>
      <div class="title-left">
        <h2 class="title2">${o.items[i].title}</h2>
        <h4 class="subtitle2">${o.items[i].subtitle}</h4>
        <div class="more-buttons">
          <button class="button">${o.items[i].cta}</button>
          <a href = "${o.items[i].url2}">
            <button class="button">${o.items[i].cta2}</button>
          </a>
        </div>
      </div>
    </div>
  </a>
</div>
    `;
var tw= `
<div class="row" id="row${i+1}">
  <div class="two-col">
    <div>
      <a href="${o.items[i].url}" class="tracking">
        <div class="imgContainer"><img src="https://media.missguided.co.uk/image/upload/q_70/${o.items[i].image}">  </div>
        <div class="title-below">
          <h2 class="title3">${o.items[i].title}</h2>
          <div class="more-buttons">
            <button class="button">${o.items[i].cta}</button>
            <a href = "${o.items[i].url2}">
              <button class="button">${o.items[i].cta2}</button>
            </a>
          </div>
        </div>
      </a>
    </div>
    <div>
      <a href="${o.items[i].url3}" class="tracking">
        <div class="imgContainer"><img src="https://media.missguided.co.uk/image/upload/q_70/${o.items[i].image2}"></div>
        <div class="title-below">
          <h2 class="title3">${o.items[i].title2}</h2>
          <div class="more-buttons">
            <button class="button">${o.items[i].cta3}</button>
            <a href = "${o.items[i].url4}">
              <button class="button">${o.items[i].cta4}</button>
            </a>
          </div>
        </div>
      </a>
    </div>
  </div>
</div>
`;

var th =`
<div class="row" id="row${i+1}">
  <div class="three-col">
    <div>
      <a href="${o.items[i].url}" class="tracking">
        <div class="imgContainer">
          <img src="https://media.missguided.co.uk/image/upload/w_300,q_70/${o.items[i].image}">
        </div>
        <div class="title-below">
          <h2 class="title4">${o.items[i].title}</h2>
          <h4 class="subtitle3">${o.items[i].subtitle}</h4>
          <button class="button">${o.items[i].cta}</button>
        </div>
      </a>
    </div>
    <div>
      <a href="${o.items[i].url2}" class="tracking">
        <div class="imgContainer">
          <video playsinline="" autoplay loop muted>
            <source type="video/webm" src="${o.items[i].vid}.webm">
            <source type="video/mp4" src="${o.items[i].vid}.mp4" onerror="fallback(parentNode)">
            <img src="${o.items[i].vid}.jpg">
          </video>
        </div>
        <div class="title-below">
          <h2 class="title4">${o.items[i].title2}</h2>
          <h4 class="subtitle3">${o.items[i].subtitle2}</h4>
          <button class="button">${o.items[i].cta2}</button>
        </div>
      </a>
    </div>
    <div>
      <a href="${o.items[i].url3}" class="tracking">
        <div class="imgContainer">
          <img src="https://media.missguided.co.uk/image/upload/w_300,q_70/${o.items[i].image3}">
        </div>
        <div class="title-below">
          <h2 class="title4">${o.items[i].title3}</h2>
          <h4 class="subtitle3">${o.items[i].title3}</h4>
          <button class="button">${o.items[i].cta3}</button>
        </div>
      </a>
    </div>
  </div>
</div>
`;

      switch(el.options[el.selectedIndex].value){
        case 'full':
          fs.appendFileSync('output.html', f);
          break;
        case 'center':
          fs.appendFileSync('output.html', c);
          break;
        case 'left':
          fs.appendFileSync('output.html', l);
          break;
        case 'right':
          fs.appendFileSync('output.html', r);
          break;
        case 'two':
          fs.appendFileSync('output.html', tw);
          break;
        case 'three':
          fs.appendFileSync('output.html', th);
          break;
      }
    });
    fs.readFile('./output.html','utf8', function(err,data) {
      if (err) {
          throw err;
      }

      data = data.replace(/<[^\/>][^>]*><\/[^>]+>/gim, "");

      fs.writeFile('output.html', data, function(err, data) { //write the new JSON to the file
        if (err) {
          console.log(error);
        }
        console.log("clean html written");
      });


      // The code snippet you want to highlight, as a string
      var code = data;

      // Returns a highlighted HTML string
      var html = Prism.highlight(code, Prism.languages.markup);
      var syntax = document.getElementsByTagName("code")[0];
      syntax.innerHTML = html;

      fs.readFile('./preview.html', function(err, data){
        var $ = cheerio.load(data);
          $('.preview-container').html(code);
          fs.writeFile('preview.html', $.html());
          document.querySelector('iframe').src += '';

      });
    });
});

function saveToFile () {

  dialog.showSaveDialog(function(fileName) {

    if (fileName === undefined) return;

    fs.readFile('./output.html','utf8', function(err,data) {
      if (err) {
          throw err;
      }
      var saveFile = data;
      fs.writeFile(fileName, saveFile, function(err, data) { //write the new JSON to the file
        if (err) {
          console.log(error);
        }
        console.log("file saved");
        const notification = {
          title: 'File Saved',
          body: 'Saved to: '+fileName
        }
        // const notificationButton = document.getElementById('basic-noti')

          const myNotification = new window.Notification(notification.title, notification)

          myNotification.onclick = () => {
            console.log('Notification clicked')
          }
      });
    });
  });
}

document.querySelector('.preview-button').addEventListener("click", function(){
  var preview = document.querySelector('.preview');
  if(preview.style.display === 'none'){
    preview.style.display = 'block';
  }else{
    preview.style.display = 'none';
  }
});
