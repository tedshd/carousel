# carousel

## Intro

This is a carousel lib.

Doesn't require any javascript libraries.

Dot on bottom is auto render in js.

## Usage

### JavaScript

```javascript
var carousel = new carousel({
    dom: document.getElementById('demo_1'),
    viewCount: 3
});
```

* dom - html dom element
* viewCount - the li count want to show on view, and slide this count

### HTML

```html

<!-- id is not require -->

<div id="demo_1" class="mod_carousel">
    <div class="mod_carousel_container">
        <ol>
            <li class="">content</li>
            <li class="">content</li>
            <li class="">content</li>
        </ol>
    </div>
    <div class="mod_carousel_arrow_l" data-state="hide"></div>
    <div class="mod_carousel_arrow_r" data-state="hide"></div>
</div>
```

