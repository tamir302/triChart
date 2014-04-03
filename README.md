#triChart
A plugin that draws a two triangles chart, one for an average value and one for the current (or selected) value.

Copyright (C) 2014, Tamir Feldman <tamir@budsoft.co.il>

##Prerequisite

Before using this plugin, please make sure that: 

* jQuery is loaded.
* The style folder with the images is downloaded to your project.

##Usage

Include  triChart.js in your application.     


```html
<script type="text/javascript" src="script/triChart.js"></script>
```

Create an element in the DOM where you want the chart to appear, and give the `data-avg` and `data-val` any value between 0 to 100. 


    <div class="example" data-avg="50" data-val="50">
        <!--This is where the plugin will render the chart--> 
    </div>
        



**Important!**  Make sure the element's position is set at `relative`.                               



When the document is ready, just use the plugin on the element you have created.             

```js
$(function() {
    $(".example").triChart();
});
```      

License
----

Released under the terms of MIT License:

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.