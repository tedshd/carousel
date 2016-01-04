# carousel

## Intro

This is a carousel lib.

Doesn't require any javascript libraries.

Dot on bottom is auto render in js.

## Usage

### JavaScript

```javascript
var carousel = new carousel({
    dom: document.getElementById('product-interest-carousel'),
    viewCount: 3
});
```

### HTML

```html
<div id="product-interest-carousel">
    <div class="carousel">
        <div class="carousel-container">
            <ul class="product-interest clearfix">
                <li class="divider">
                    <a href="" target="_blank">
                        <img class="product-img" src="" alt="">
                        <p class="product-title">title</p>
                        <p class="product-price">1200</p>
                        <p class="product-mall">Yahoo</p>
                    </a>
                </li>
                <li class="divider">
                    <a href="" target="_blank">
                        <img class="product-img" src="" alt="">
                        <p class="product-title">long title haha this is test</p>
                        <p class="product-price">1200</p>
                        <p class="product-mall">Yahoo</p>
                    </a>
                </li>
                <li class="divider">
                    <a href="" target="_blank">
                        <img class="product-img" src="" alt="">
                        <p class="product-title">long title haha this is test</p>
                        <p class="product-price">1200</p>
                        <p class="product-mall">Yahoo</p>
                    </a>
                </li>
                <li class="divider">
                    <a href="" target="_blank">
                        <img class="product-img" src="" alt="">
                        <p class="product-title">long title haha this is test</p>
                        <p class="product-price">1200</p>
                        <p class="product-mall">Yahoo</p>
                    </a>
                </li>
                <li class="">
                    <a href="" target="_blank">
                        <img class="product-img" src="" alt="">
                        <p class="product-title">long title haha this is test</p>
                        <p class="product-price">1200</p>
                        <p class="product-mall">Yahoo</p>
                    </a>
                </li>
            </ul>
        </div>
        <div class="arrow-l" data-state="hide"></div>
        <div class="arrow-r" data-state="hide"></div>
    </div>
</div>
```

* dom - html dom element
* viewCount - the li count want to show on view, and slide this count
